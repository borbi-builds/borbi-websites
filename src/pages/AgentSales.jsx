import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import { Bot, Monitor, GraduationCap, Headphones, Server, Building2, ShoppingCart, Stethoscope, Scale, Package, Check } from 'lucide-react'

const included = [
  { icon: <Bot size={24} />, title: 'Trained AI Agent', desc: 'Custom-trained on your industry data, processes, and terminology.' },
  { icon: <Monitor size={24} />, title: 'Custom Portal', desc: 'Branded web portal for your team to interact with the agent.' },
  { icon: <GraduationCap size={24} />, title: 'Training Agent', desc: 'Secondary agent that continuously improves the primary agent.' },
  { icon: <Headphones size={24} />, title: '30-Day Support', desc: 'Full onboarding support, tuning, and optimization.' },
  { icon: <Server size={24} />, title: 'Mac Mini Included', desc: 'Dedicated hardware for local agent hosting and privacy.' },
]

const industries = [
  { icon: <Building2 size={28} />, name: 'Real Estate', desc: 'Lead qualification, property matching, client follow-up, market analysis.' },
  { icon: <ShoppingCart size={28} />, name: 'E-Commerce', desc: 'Customer support, product recommendations, order tracking, returns.' },
  { icon: <Stethoscope size={28} />, name: 'Healthcare', desc: 'Patient intake, appointment scheduling, FAQ handling, referral routing.' },
  { icon: <Scale size={28} />, name: 'Legal', desc: 'Document review assistance, case intake, scheduling, client communications.' },
]

export default function AgentSales() {
  return (
    <>
      <Hero
        title="Deploy AI Agents Built For Your Industry"
        subtitle="Fully trained, portal-equipped AI agents delivered with dedicated hardware and 30 days of hands-on support."
        cta="Deploy Your Agent"
        ctaLink="#contact"
      />

      {/* What's Included */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What's Included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map(i => (
              <div key={i.title} className="glass-card p-6">
                <div className="text-indigo-400 mb-3">{i.icon}</div>
                <h3 className="font-semibold mb-2">{i.title}</h3>
                <p className="text-sm text-gray-400">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Built For Your Industry</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map(ind => (
              <div key={ind.name} className="glass-card p-6 flex gap-4">
                <div className="text-indigo-400 shrink-0">{ind.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{ind.name}</h3>
                  <p className="text-sm text-gray-400">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Demo */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Custom Agent Portal</h2>
          <div className="glass-strong p-8">
            <div className="rounded-lg bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs text-gray-500 ml-2">agent-portal.borbienterprises.com</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="col-span-1 space-y-2">
                  <div className="glass-card p-3 text-xs">
                    <div className="text-gray-400 mb-1">Active Conversations</div>
                    <div className="text-xl font-bold text-indigo-300">24</div>
                  </div>
                  <div className="glass-card p-3 text-xs">
                    <div className="text-gray-400 mb-1">Resolution Rate</div>
                    <div className="text-xl font-bold text-green-400">94%</div>
                  </div>
                  <div className="glass-card p-3 text-xs">
                    <div className="text-gray-400 mb-1">Avg Response</div>
                    <div className="text-xl font-bold text-yellow-300">1.2s</div>
                  </div>
                </div>
                <div className="col-span-2 glass-card p-4 text-sm">
                  <div className="text-gray-400 text-xs mb-3">Live Chat Preview</div>
                  <div className="space-y-3">
                    <div className="flex gap-2"><span className="text-indigo-400 text-xs shrink-0">User:</span><span className="text-gray-300 text-xs">I need to schedule a property viewing for 123 Oak St</span></div>
                    <div className="flex gap-2"><span className="text-green-400 text-xs shrink-0">Agent:</span><span className="text-gray-300 text-xs">I'd be happy to help! I see 123 Oak St is available. I have openings this Thursday at 2 PM and Friday at 10 AM. Which works better for you?</span></div>
                    <div className="flex gap-2"><span className="text-indigo-400 text-xs shrink-0">User:</span><span className="text-gray-300 text-xs">Thursday works great</span></div>
                    <div className="flex gap-2"><span className="text-green-400 text-xs shrink-0">Agent:</span><span className="text-gray-300 text-xs">Done! I've booked Thursday at 2 PM. You'll receive a confirmation email shortly with directions and what to bring. Anything else?</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6">
        <div className="max-w-lg mx-auto glass-strong p-8 text-center">
          <Package className="mx-auto text-indigo-400 mb-4" size={32} />
          <h2 className="text-2xl font-bold mb-2">Complete Agent Package</h2>
          <div className="text-4xl font-bold gradient-text mb-2">$5,000</div>
          <p className="text-sm text-gray-400 mb-6">One-time setup. Everything included.</p>
          <ul className="text-sm text-gray-300 space-y-2 text-left mb-8">
            {['Trained AI Agent', 'Custom Branded Portal', 'Training Agent (continuous learning)', '30-Day Hands-On Support', 'Mac Mini Hardware', 'All integrations configured'].map(item => (
              <li key={item} className="flex items-center gap-2"><Check size={16} className="text-green-400 shrink-0" />{item}</li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary no-underline">Deploy Your Agent</a>
        </div>
      </section>

      <ContactForm service="agents" />
    </>
  )
}
