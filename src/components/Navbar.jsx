import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/marketing', label: 'Marketing Arm' },
  { to: '/websites', label: 'Website Services' },
  { to: '/automation', label: 'Automation' },
  { to: '/agents', label: 'Agent Sales' },
  { to: '/equity', label: 'Equity Research' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="glass-strong sticky top-0 z-50 px-6 py-4" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold gradient-text no-underline">Borbi Enterprises</Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-sm text-gray-300 hover:text-white transition-colors no-underline">{l.label}</Link>
          ))}
          <Link to="/landing" className="btn-primary text-sm !py-2 !px-4 no-underline">Book Consultation</Link>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3 pb-4">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-gray-300 hover:text-white no-underline px-2 py-1" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Link to="/landing" className="btn-primary text-sm text-center !py-2 no-underline" onClick={() => setOpen(false)}>Book Consultation</Link>
        </div>
      )}
    </nav>
  )
}
