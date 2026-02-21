import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import { ToggleLeft, Calculator, Filter, Activity, FileText, Check } from 'lucide-react'

const features = [
  { icon: <ToggleLeft size={24} />, title: 'Toggle Scenarios', desc: 'Switch between bull, base, and bear cases instantly. See how assumptions change valuations.' },
  { icon: <Calculator size={24} />, title: 'Adjust DCF Models', desc: 'Modify discount rates, growth assumptions, and terminal values in real-time.' },
  { icon: <Filter size={24} />, title: 'Filter Risks', desc: 'Isolate specific risk factors: regulatory, competitive, macro, execution.' },
  { icon: <Activity size={24} />, title: 'Live Market Data', desc: 'Real-time price feeds, volume analysis, and technical indicators integrated.' },
]

export default function EquityResearch() {
  return (
    <>
      <Hero
        title="Interactive Equity Research. Real Customization."
        subtitle="Toggle scenarios, adjust DCF models, filter risks, and explore live market data — all in a Glass UI interface built for analysts."
        cta="See Sample Report"
        ctaLink="#demo"
        secondaryCta="Get Pricing"
        secondaryLink="#pricing"
      />

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Research Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map(f => (
              <div key={f.title} className="glass-card p-6 flex gap-4">
                <div className="text-indigo-400 shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-400">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-16 px-6" id="demo">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Interactive Demo</h2>
          <div className="glass-strong p-6">
            <div className="rounded-lg bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs text-gray-500 ml-2">AAPL — Apple Inc. | Interactive Research Report</span>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="glass-card p-3 text-center">
                  <div className="text-xs text-gray-400">Current Price</div>
                  <div className="text-lg font-bold text-white">$178.72</div>
                  <div className="text-xs text-green-400">+1.24%</div>
                </div>
                <div className="glass-card p-3 text-center">
                  <div className="text-xs text-gray-400">Fair Value (Base)</div>
                  <div className="text-lg font-bold text-indigo-300">$195.40</div>
                  <div className="text-xs text-green-400">+9.3% upside</div>
                </div>
                <div className="glass-card p-3 text-center">
                  <div className="text-xs text-gray-400">Fair Value (Bull)</div>
                  <div className="text-lg font-bold text-green-300">$228.15</div>
                  <div className="text-xs text-green-400">+27.7% upside</div>
                </div>
                <div className="glass-card p-3 text-center">
                  <div className="text-xs text-gray-400">Fair Value (Bear)</div>
                  <div className="text-lg font-bold text-red-300">$142.80</div>
                  <div className="text-xs text-red-400">-20.1% downside</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card p-4">
                  <div className="text-xs text-gray-400 mb-3">DCF Assumptions</div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-gray-400">Revenue Growth (5Y CAGR)</span><span className="text-indigo-300">8.2%</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">Operating Margin</span><span className="text-indigo-300">31.5%</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">WACC</span><span className="text-indigo-300">9.8%</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">Terminal Growth</span><span className="text-indigo-300">2.5%</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">Shares Outstanding</span><span className="text-indigo-300">15.4B</span></div>
                  </div>
                </div>
                <div className="glass-card p-4">
                  <div className="text-xs text-gray-400 mb-3">Risk Factors</div>
                  <div className="space-y-2">
                    {[
                      { risk: 'China Revenue Exposure', level: 'Medium', color: 'text-yellow-400' },
                      { risk: 'Regulatory (Antitrust)', level: 'Medium', color: 'text-yellow-400' },
                      { risk: 'Hardware Cycle Dependency', level: 'Low', color: 'text-green-400' },
                      { risk: 'Services Growth Deceleration', level: 'Low', color: 'text-green-400' },
                      { risk: 'Currency Headwinds', level: 'High', color: 'text-red-400' },
                    ].map(r => (
                      <div key={r.risk} className="flex justify-between text-sm">
                        <span className="text-gray-300">{r.risk}</span>
                        <span className={`text-xs font-medium ${r.color}`}>{r.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Report */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto glass-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-indigo-400" size={28} />
            <div>
              <h3 className="font-bold text-lg">Sample Report: Apple Inc. (AAPL)</h3>
              <p className="text-xs text-gray-400">Generated Feb 2026 | 42 pages | Interactive PDF</p>
            </div>
          </div>
          <div className="space-y-4 text-sm text-gray-300">
            <div className="glass p-4">
              <h4 className="font-semibold text-gray-200 mb-2">Executive Summary</h4>
              <p className="text-gray-400">Apple's ecosystem moat continues to strengthen with Services revenue now representing 24% of total revenue. Our base case DCF suggests 9.3% upside from current levels, driven by continued iPhone installed base monetization and emerging revenue from Vision Pro and AI features.</p>
            </div>
            <div className="glass p-4">
              <h4 className="font-semibold text-gray-200 mb-2">Key Thesis Points</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Services margin expansion to 75%+ by FY2028</li>
                <li>• AI integration driving upgrade cycle acceleration</li>
                <li>• Capital return program ($90B+ annually) supports floor</li>
                <li>• Vision Pro creates new spatial computing TAM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6" id="pricing">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8 text-center">
              <h3 className="font-semibold text-lg mb-2">Per Report</h3>
              <div className="text-3xl font-bold gradient-text mb-1">$500 – $2,000</div>
              <p className="text-sm text-gray-400 mb-6">Single company deep-dive</p>
              <ul className="text-sm text-gray-300 space-y-2 text-left">
                {['Interactive Glass UI report', 'Bull/Base/Bear scenarios', 'Full DCF model', 'Risk analysis matrix', 'PDF + web access'].map(i => (
                  <li key={i} className="flex items-center gap-2"><Check size={14} className="text-green-400 shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="glass-strong p-8 text-center border-indigo-500/30">
              <div className="text-xs text-indigo-400 font-semibold mb-1">BEST VALUE</div>
              <h3 className="font-semibold text-lg mb-2">Quarterly Subscription</h3>
              <div className="text-3xl font-bold gradient-text mb-1">$1,500 – $5,000/qtr</div>
              <p className="text-sm text-gray-400 mb-6">Coverage universe + updates</p>
              <ul className="text-sm text-gray-300 space-y-2 text-left">
                {['Everything in Per Report', 'Up to 10 companies covered', 'Quarterly updates & revisions', 'Custom scenario modeling', 'Priority analyst access', 'API data feeds'].map(i => (
                  <li key={i} className="flex items-center gap-2"><Check size={14} className="text-green-400 shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm service="equity" />
    </>
  )
}
