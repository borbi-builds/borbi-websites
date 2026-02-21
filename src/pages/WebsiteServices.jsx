import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import { Search, Palette, Code, Rocket, ArrowRight } from 'lucide-react'

const portfolio = [
  { name: 'Elite HVAC Pro', vertical: 'Home Services', desc: 'Lead generation site with booking integration' },
  { name: 'Sakura Kitchen', vertical: 'Restaurant', desc: 'Online ordering + menu showcase' },
  { name: 'IronForge Gym', vertical: 'Fitness', desc: 'Membership portal + class scheduling' },
  { name: 'Luxe Realty', vertical: 'Real Estate', desc: 'Property listings + virtual tours' },
  { name: 'BrightSmile Dental', vertical: 'Healthcare', desc: 'Patient portal + appointment booking' },
  { name: 'Summit Legal', vertical: 'Professional', desc: 'Case inquiry forms + practice areas' },
  { name: 'Fresh Harvest', vertical: 'E-Commerce', desc: 'Subscription boxes + checkout flow' },
  { name: 'AutoCare Plus', vertical: 'Automotive', desc: 'Service scheduling + fleet management' },
  { name: 'CloudStack SaaS', vertical: 'Technology', desc: 'Product landing + demo scheduling' },
]

const process = [
  { icon: <Search size={28} />, step: 'Discovery', desc: 'We learn your business, audience, and goals through a deep-dive session.' },
  { icon: <Palette size={28} />, step: 'Design', desc: 'Custom mockups in Figma with your branding. Iterate until perfect.' },
  { icon: <Code size={28} />, step: 'Build', desc: 'Clean, fast code. React, Next.js, or WordPress — whatever fits best.' },
  { icon: <Rocket size={28} />, step: 'Deploy', desc: 'Launch on your domain with analytics, SEO, and performance monitoring.' },
]

export default function WebsiteServices() {
  return (
    <>
      <Hero
        title="Custom Websites. Built Fast."
        subtitle="From concept to launch in weeks, not months. Conversion-focused design meets modern technology."
        cta="Start Your Project"
        ctaLink="#contact"
      />

      {/* Portfolio Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Our Work</h2>
          <p className="text-gray-400 text-center mb-10">Websites across every vertical.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map(p => (
              <div key={p.name} className="glass-card p-5 group">
                <div className="h-32 rounded-lg mb-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-sm text-indigo-300 font-medium">{p.vertical}</span>
                </div>
                <h3 className="font-semibold mb-1">{p.name}</h3>
                <p className="text-sm text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="glass-card p-6 text-center relative">
                <div className="text-indigo-400 mx-auto mb-4 flex justify-center">{p.icon}</div>
                <div className="text-xs text-indigo-400 font-semibold mb-2">STEP {i + 1}</div>
                <h3 className="font-semibold mb-2">{p.step}</h3>
                <p className="text-sm text-gray-400">{p.desc}</p>
                {i < 3 && <ArrowRight className="hidden md:block absolute -right-3 top-1/2 text-indigo-400/30" size={20} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <h3 className="font-semibold mb-2">Starter</h3>
              <div className="text-3xl font-bold gradient-text mb-1">$2,000</div>
              <p className="text-sm text-gray-400 mb-4">5-page marketing site</p>
              <ul className="text-sm text-gray-300 space-y-2 text-left">
                <li>✓ Custom design</li><li>✓ Mobile responsive</li><li>✓ Contact forms</li><li>✓ Basic SEO</li>
              </ul>
            </div>
            <div className="glass-strong p-6 text-center border-indigo-500/30">
              <div className="text-xs text-indigo-400 font-semibold mb-1">MOST POPULAR</div>
              <h3 className="font-semibold mb-2">Professional</h3>
              <div className="text-3xl font-bold gradient-text mb-1">$3,500</div>
              <p className="text-sm text-gray-400 mb-4">10-page site + integrations</p>
              <ul className="text-sm text-gray-300 space-y-2 text-left">
                <li>✓ Everything in Starter</li><li>✓ CMS integration</li><li>✓ Analytics dashboard</li><li>✓ 30 days support</li>
              </ul>
            </div>
            <div className="glass-card p-6 text-center">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold gradient-text mb-1">$5,000+</div>
              <p className="text-sm text-gray-400 mb-4">Custom web application</p>
              <ul className="text-sm text-gray-300 space-y-2 text-left">
                <li>✓ Everything in Pro</li><li>✓ Custom features</li><li>✓ API integrations</li><li>✓ 90 days support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm service="websites" />
    </>
  )
}
