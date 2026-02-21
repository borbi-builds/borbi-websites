import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import { Search, Globe, Share2, Crown, TrendingUp, Users, Dumbbell } from 'lucide-react'

const tier1 = [
  { icon: <Search size={24} />, name: 'SEO', desc: 'Technical SEO, local search, content strategy, and link building to dominate rankings.', price: 'From $800/mo' },
  { icon: <Globe size={24} />, name: 'Website', desc: 'Conversion-optimized websites with modern design, fast load times, and analytics.', price: 'From $2,000' },
  { icon: <Share2 size={24} />, name: 'Social Content', desc: 'Content creation, scheduling, community management across all platforms.', price: 'From $600/mo' },
]

const caseStudies = [
  { icon: <TrendingUp size={24} />, industry: 'HVAC Company', result: '340% increase in organic leads', detail: 'Full SEO overhaul + Google Business optimization drove 3.4x more qualified leads in 90 days.', metric: '+340%' },
  { icon: <Users size={24} />, industry: 'Local Restaurant', result: '2.5x social engagement', detail: 'Content strategy + paid social drove 150% more reservations and doubled Instagram following.', metric: '2.5x' },
  { icon: <Dumbbell size={24} />, industry: 'Boutique Gym', result: '180 new members in 60 days', detail: 'Landing page + Facebook ads + email nurture sequence converted cold traffic at 4.2% rate.', metric: '+180' },
]

export default function MarketingArm() {
  return (
    <>
      <Hero
        title="Your Full-Stack Marketing Team"
        subtitle="SEO, websites, social content, and full-package marketing — all under one roof. Results-driven, data-backed, and built to scale."
        cta="Get a Free Audit"
        ctaLink="#contact"
      />

      {/* Tier 1 */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Individual Services</h2>
          <p className="text-gray-400 text-center mb-10">Pick what you need. Each service stands on its own.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {tier1.map(s => (
              <div key={s.name} className="glass-card p-6">
                <div className="text-indigo-400 mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{s.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{s.desc}</p>
                <div className="text-indigo-300 font-semibold">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 2: Platinum */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto glass-strong p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-500/20 to-transparent w-1/2 h-full" />
          <div className="relative z-10">
            <Crown className="mx-auto text-yellow-400 mb-4" size={36} />
            <h2 className="text-2xl font-bold mb-3">Platinum Full Package</h2>
            <p className="text-gray-400 mb-6">Everything above, unified. SEO + Website + Social Content + Analytics + Strategy — one team, one dashboard, maximum results.</p>
            <div className="text-3xl font-bold gradient-text mb-2">$2,500/mo</div>
            <p className="text-sm text-gray-500 mb-6">Save 30% vs. individual services</p>
            <ul className="text-left text-sm text-gray-300 max-w-md mx-auto space-y-2 mb-8">
              <li>✓ Full SEO management & reporting</li>
              <li>✓ Website maintenance & optimization</li>
              <li>✓ 20+ social posts/month with design</li>
              <li>✓ Monthly strategy calls</li>
              <li>✓ Dedicated account manager</li>
              <li>✓ Quarterly performance reviews</li>
            </ul>
            <a href="#contact" className="btn-primary no-underline">Get Started</a>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map(c => (
              <div key={c.industry} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-400">{c.icon}</div>
                  <h3 className="font-semibold">{c.industry}</h3>
                </div>
                <div className="text-2xl font-bold gradient-text mb-2">{c.metric}</div>
                <p className="text-sm font-medium text-gray-200 mb-2">{c.result}</p>
                <p className="text-sm text-gray-400">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm service="marketing" />
    </>
  )
}
