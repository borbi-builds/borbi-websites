import { Link } from 'react-router-dom'

export default function Hero({ title, subtitle, cta = 'Get Started', ctaLink = '#contact', secondaryCta, secondaryLink }) {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-indigo-500 -top-48 -left-48" style={{position:'absolute'}} />
      <div className="glow-orb w-80 h-80 bg-purple-500 -bottom-40 -right-40" style={{position:'absolute'}} />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="gradient-text">{title}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {ctaLink.startsWith('#') ? (
            <a href={ctaLink} className="btn-primary no-underline">{cta}</a>
          ) : (
            <Link to={ctaLink} className="btn-primary no-underline">{cta}</Link>
          )}
          {secondaryCta && (
            secondaryLink?.startsWith('#') ? (
              <a href={secondaryLink} className="btn-secondary no-underline">{secondaryCta}</a>
            ) : (
              <Link to={secondaryLink} className="btn-secondary no-underline">{secondaryCta}</Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}
