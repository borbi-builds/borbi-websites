import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm({ service = 'General' }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="glass p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-400">We'll be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Get Started</h2>
        <p className="text-gray-400 text-center mb-8">Tell us about your project and we'll get back to you within 24 hours.</p>
        <form onSubmit={handleSubmit} className="glass p-8 flex flex-col gap-4" data-netlify="true" name={`contact-${service}`}>
          <input type="hidden" name="form-name" value={`contact-${service}`} />
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1" htmlFor="name">Name *</label>
              <input id="name" name="name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1" htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@company.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1" htmlFor="company">Company</label>
            <input id="company" name="company" value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Company name" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1" htmlFor="message">Message *</label>
            <textarea id="message" name="message" rows={4} required value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us about your project..." />
          </div>
          <button type="submit" className="btn-primary flex items-center justify-center gap-2">
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
