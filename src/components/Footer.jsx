import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg gradient-text mb-3">Borbi Enterprises</h3>
          <p className="text-sm text-gray-400">Multi-Agent Enterprise Built for Scale. 13 revenue streams. One unified vision.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gray-200">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <Link to="/marketing" className="hover:text-white no-underline text-gray-400">Marketing Arm</Link>
            <Link to="/websites" className="hover:text-white no-underline text-gray-400">Website Services</Link>
            <Link to="/automation" className="hover:text-white no-underline text-gray-400">Automation</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gray-200">Products</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <Link to="/agents" className="hover:text-white no-underline text-gray-400">Trained Agents</Link>
            <Link to="/equity" className="hover:text-white no-underline text-gray-400">Equity Research</Link>
            <Link to="/landing" className="hover:text-white no-underline text-gray-400">About Us</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gray-200">Contact</h4>
          <p className="text-sm text-gray-400">info@borbienterprises.com</p>
          <p className="text-sm text-gray-400 mt-1">Book a consultation today.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Borbi Enterprises. All rights reserved.
      </div>
    </footer>
  )
}
