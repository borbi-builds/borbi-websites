import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import { TrendingUp, Globe, Zap, Bot, BarChart3, ArrowRight } from 'lucide-react'

const services = [
  { icon: <TrendingUp size={28} />, title: 'Marketing Arm', desc: 'Full-stack marketing: SEO, websites, social content, and platinum packages.', link: '/marketing' },
  { icon: <Globe size={28} />, title: 'Website Services', desc: 'Custom websites built fast. From discovery to deploy in weeks.', link: '/websites' },
  { icon: <Zap size={28} />, title: 'Automation', desc: 'Workflow automation for e-commerce and mid-market businesses.', link: '/automation' },
  { icon: <Bot size={28} />, title: 'Trained Agents', desc: 'Deploy AI agents built for your industry with custom portals.', link: '/agents' },
  { icon: <BarChart3 size={28} />, title: 'Equity Research', desc: 'Interactive research with toggleable scenarios and live data.', link: '/equity' },
]

const stats = [
  { num: '13', label: 'Revenue Streams' },
  { num: '50+', label: 'Clients Served' },
  { num: '24/7', label: 'AI-Powered Execution' },
  { num: '5x', label: 'Average ROI' },
]

export default function Home() {
  return (
    <>
      <Hero
        title="Multi-Agent Enterprise Built for Scale"
        subtitle="13 revenue streams. AI-powered execution. Proven results across marketing, automation, trained agents, and equity research."
        cta="Book Consultation"
        ctaLink="/landing#contact"
        secondaryCta="Explore Services"
        secondaryLink="#services"
      />

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.label} className="glass-card p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-1">{s.num}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our <span className="gradient-text">Service Divisions</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <Link key={s.title} to={s.link} className="glass-card p-6 no-underline text-inherit group">
                <div className="text-indigo-400 mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{s.desc}</p>
                <span className="text-indigo-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto glass-strong p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale?</h2>
          <p className="text-gray-400 mb-8">Let's discuss how Borbi Enterprises can accelerate your business with AI-powered solutions.</p>
          <Link to="/landing#contact" className="btn-primary no-underline">Book Consultation</Link>
        </div>
      </section>
    </>
  )
}
