import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'
import { TrendingUp, Globe, Zap, Bot, BarChart3, ShoppingCart, Megaphone, Code, Database, Cpu, Users, Briefcase, PiggyBank, Quote } from 'lucide-react'

const streams = [
  { icon: <Megaphone size={20} />, name: 'SEO Services' },
  { icon: <Globe size={20} />, name: 'Website Development' },
  { icon: <TrendingUp size={20} />, name: 'Social Media Marketing' },
  { icon: <Users size={20} />, name: 'Platinum Marketing Packages' },
  { icon: <ShoppingCart size={20} />, name: 'E-Commerce Automation' },
  { icon: <Zap size={20} />, name: 'Mid-Market Workflow Automation' },
  { icon: <Bot size={20} />, name: 'Trained AI Agents' },
  { icon: <Cpu size={20} />, name: 'Agent Portal Licensing' },
  { icon: <Code size={20} />, name: 'Custom Development' },
  { icon: <BarChart3 size={20} />, name: 'Equity Research Reports' },
  { icon: <Database size={20} />, name: 'Data & Analytics Consulting' },
  { icon: <Briefcase size={20} />, name: 'Strategic Consulting' },
  { icon: <PiggyBank size={20} />, name: 'Hardware-as-a-Service (Mac Mini)' },
]

const testimonials = [
  { name: 'Sarah Chen', role: 'CEO, TechFlow Inc.', text: 'Borbi Enterprises transformed our entire marketing pipeline. Our lead generation is up 400% and the automation saves us 30 hours a week.' },
  { name: 'Marcus Johnson', role: 'Founder, GreenLeaf Properties', text: 'The trained AI agent handles 80% of our client inquiries. It paid for itself in the first month. Incredible ROI.' },
  { name: 'Dr. Emily Watson', role: 'Managing Partner, Watson Legal', text: 'Their equity research platform changed how we evaluate investments. The interactive scenarios are a game-changer for our fund.' },
]

export default function Landing() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="glow-orb w-96 h-96 bg-indigo-500 -top-48 left-1/4" style={{position:'absolute'}} />
        <div className="glow-orb w-80 h-80 bg-purple-600 -bottom-40 right-1/4" style={{position:'absolute'}} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-sm text-indigo-400 font-semibold tracking-wider uppercase mb-4">The Borbi Enterprises Story</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            One Enterprise.<br /><span className="gradient-text">Thirteen Revenue Streams.</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            We built a multi-agent enterprise from the ground up — combining AI, automation, marketing, and research into a unified business that scales without limits.
          </p>
          <a href="#contact" className="btn-primary no-underline text-lg">Book Your Consultation</a>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto glass p-10">
          <h2 className="text-2xl font-bold mb-6">The Vision</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>Most businesses do one thing. We decided to build an ecosystem.</p>
            <p>Borbi Enterprises started with a simple observation: small and mid-market businesses need the same tools as enterprises — marketing, automation, AI, research — but can't afford dedicated teams for each.</p>
            <p>So we built all of them. Under one roof. Powered by AI agents that work 24/7. Every division feeds the others: marketing generates leads for website services, automation retains those clients, trained agents scale their operations, and equity research funds the growth.</p>
            <p>The result? Thirteen interconnected revenue streams, each reinforcing the next.</p>
          </div>
        </div>
      </section>

      {/* 13 Revenue Streams */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">13 Revenue Streams</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {streams.map((s, i) => (
              <div key={s.name} className="glass-card p-4 flex items-center gap-3">
                <div className="text-indigo-400">{s.icon}</div>
                <div>
                  <span className="text-xs text-indigo-400 font-semibold">#{i + 1}</span>
                  <div className="text-sm font-medium">{s.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="glass-card p-6">
                <Quote className="text-indigo-400/50 mb-3" size={24} />
                <p className="text-sm text-gray-300 mb-4 italic">"{t.text}"</p>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-gray-400">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm service="consultation" />
    </>
  )
}
