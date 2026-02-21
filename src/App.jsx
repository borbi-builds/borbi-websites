import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MarketingArm from './pages/MarketingArm'
import WebsiteServices from './pages/WebsiteServices'
import AutomationSales from './pages/AutomationSales'
import AgentSales from './pages/AgentSales'
import EquityResearch from './pages/EquityResearch'
import Landing from './pages/Landing'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketing" element={<MarketingArm />} />
            <Route path="/websites" element={<WebsiteServices />} />
            <Route path="/automation" element={<AutomationSales />} />
            <Route path="/agents" element={<AgentSales />} />
            <Route path="/equity" element={<EquityResearch />} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
