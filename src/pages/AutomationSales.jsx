import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import { useState } from 'react'
import { ShoppingCart, Building2, Clock, DollarSign, TrendingDown, Zap } from 'lucide-react'

const caseStudies = [
  { title: 'E-Commerce Brand', result: '15 hrs/week saved', detail: 'Automated order processing, inventory sync, and customer follow-ups across Shopify + email + CRM.', icon: <ShoppingCart size={24} /> },
  { title: 'Mid-Market Consultancy', result: '$48K/year cost reduction', detail: 'Replaced 3 manual data-entry workflows with n8n automations. 99.9% accuracy, zero overtime.', icon: <Building2 size={24} /> },
  { title: 'SaaS Startup', result: '4x faster onboarding', detail: 'Automated client onboarding: contract signing, portal setup, welcome sequences, Slack notifications.', icon: <Zap size={24} /> },
]

export default function AutomationSales() {
  const [hours, setHours] = useState(20)
  const [rate, setRate] = useState(35)
  const saved = hours * rate * 4
  const annual = saved * 12

  return (
    <>
      <Hero
        title="Workflow Automation That Works"
        subtitle="Stop losing time to repetitive tasks. We build automations that save hours every week and pay for themselves in months."
        cta="Get Your ROI Estimate"
        ctaLink="#calculator"
      />

      {/* Segments */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <ShoppingCart className="text-indigo-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">E-Commerce Automation</h3>
            <p className="text-gray-400 mb-4">Automate the repetitive work that's eating your margins.</p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>✓ Order processing & fulfillment triggers</li>
              <li>✓ Inventory sync across channels</li>
              <li>✓ Abandoned cart recovery sequences</li>
              <li>✓ Customer segmentation & follow-ups</li>
              <li>✓ Review request automation</li>
            </ul>
          </div>
          <div className="glass-card p-8">
            <Building2 className="text-indigo-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Mid-Market Workflows</h3>
            <p className="text-gray-400 mb-4">Enterprise-grade automation without enterprise-grade prices.</p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>✓ CRM → ERP data synchronization</li>
              <li>✓ Invoice processing & approval chains</li>
              <li>✓ Employee onboarding workflows</li>
              <li>✓ Report generation & distribution</li>
              <li>✓ Cross-platform notifications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-6" id="calculator">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">ROI Calculator</h2>
          <div className="glass-strong p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Hours spent on manual tasks / week</label>
                <input type="range" min="5" max="80" value={hours} onChange={e => setHours(+e.target.value)} className="w-full accent-indigo-500 bg-transparent border-none p-0" />
                <div className="text-right text-indigo-300 font-semibold">{hours} hrs/week</div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Average hourly cost ($)</label>
                <input type="range" min="15" max="150" value={rate} onChange={e => setRate(+e.target.value)} className="w-full accent-indigo-500 bg-transparent border-none p-0" />
                <div className="text-right text-indigo-300 font-semibold">${rate}/hr</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 text-center">
                <Clock className="mx-auto text-indigo-400 mb-2" size={20} />
                <div className="text-xs text-gray-400">Time Saved/Month</div>
                <div className="text-xl font-bold gradient-text">{hours * 4} hrs</div>
              </div>
              <div className="glass-card p-4 text-center">
                <DollarSign className="mx-auto text-green-400 mb-2" size={20} />
                <div className="text-xs text-gray-400">Monthly Savings</div>
                <div className="text-xl font-bold text-green-400">${saved.toLocaleString()}</div>
              </div>
              <div className="glass-card p-4 text-center">
                <TrendingDown className="mx-auto text-green-400 mb-2" size={20} />
                <div className="text-xs text-gray-400">Annual Savings</div>
                <div className="text-xl font-bold text-green-400">${annual.toLocaleString()}</div>
              </div>
              <div className="glass-card p-4 text-center">
                <Zap className="mx-auto text-yellow-400 mb-2" size={20} />
                <div className="text-xs text-gray-400">ROI (vs $5K investment)</div>
                <div className="text-xl font-bold text-yellow-400">{Math.round(annual / 5000 * 100)}%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map(c => (
              <div key={c.title} className="glass-card p-6">
                <div className="text-indigo-400 mb-4">{c.icon}</div>
                <h3 className="font-semibold mb-1">{c.title}</h3>
                <div className="text-lg font-bold gradient-text mb-2">{c.result}</div>
                <p className="text-sm text-gray-400">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm service="automation" />
    </>
  )
}
