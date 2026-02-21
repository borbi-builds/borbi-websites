import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassButton } from './GlassButton';

interface ContactFormProps {
  source: string; // 'marketing-arm', 'website-services', etc.
  hideCompany?: boolean;
  submitButtonText?: string;
  successMessage?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  source,
  hideCompany = false,
  submitButtonText = 'Send Message',
  successMessage = 'Thanks! We received your message. Expect a response within 24 hours.',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        ...formData,
        source,
      };

      // Try to submit to n8n webhook
      const response = await fetch(
        process.env.NEXT_PUBLIC_N8N_WEBHOOK ||
          'http://localhost:5678/webhook/borbi-contact-form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      console.log('Form submitted:', data);

      setSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit form. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-green-500/10 border border-green-400/50 rounded-2xl p-8 text-center"
      >
        <div className="text-5xl mb-4">✅</div>
        <p className="text-white font-semibold mb-2">Message Received!</p>
        <p className="text-slate-300">{successMessage}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="text-slate-300 text-sm mb-2 block">Your Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-slate-300 text-sm mb-2 block">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition"
          required
        />
      </div>

      {/* Company (Optional) */}
      {!hideCompany && (
        <div>
          <label className="text-slate-300 text-sm mb-2 block">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition"
          />
        </div>
      )}

      {/* Message */}
      <div>
        <label className="text-slate-300 text-sm mb-2 block">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you're looking for..."
          rows={5}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition resize-none"
          required
        />
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-red-500/10 border border-red-400/50 rounded-lg p-4 text-red-400 text-sm"
        >
          {error}
        </motion.div>
      )}

      {/* Submit Button */}
      <GlassButton
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Sending...' : submitButtonText}
      </GlassButton>

      <p className="text-slate-500 text-xs text-center">
        We respect your privacy. Your message is secure and confidential.
      </p>
    </form>
  );
};
