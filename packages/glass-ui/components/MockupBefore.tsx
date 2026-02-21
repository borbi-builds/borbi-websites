import React from 'react';

interface MockupBeforeProps {
  variant: string;
}

const mockups: Record<string, { bg: string; title: string; elements: React.ReactNode }> = {
  'summit-mechanical': {
    bg: 'linear-gradient(135deg, #1a2744 0%, #2d3a52 100%)',
    title: 'Summit Mechanical - Old Wix Site',
    elements: (
      <>
        <div style={{ background: '#e87722', padding: '8px 16px', fontSize: '11px', color: 'white', display: 'flex', justifyContent: 'space-between', fontFamily: 'Trebuchet MS' }}>
          <span>SUMMIT MECHANICAL</span>
          <span>Home | About | Services | Contact</span>
        </div>
        <div style={{ background: '#3a4a6a', height: '45%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ fontSize: '40px', opacity: 0.3 }}>🏗️</div>
          <div style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,0.5)', color: '#999', fontSize: '9px', padding: '2px 6px', borderRadius: 2 }}>400KB blurry JPEG</div>
        </div>
        <div style={{ padding: '12px', fontFamily: 'Trebuchet MS' }}>
          <h3 style={{ color: '#ddd', fontSize: '14px', margin: '0 0 6px' }}>Your Trusted HVAC Experts</h3>
          <p style={{ color: '#888', fontSize: '10px', lineHeight: 1.4 }}>We provide heating and cooling services for residential and commercial properties. Call us today for a free estimate on any HVAC project...</p>
          <button style={{ background: '#e87722', border: 'none', color: 'white', padding: '6px 16px', fontSize: '10px', marginTop: 8, borderRadius: 2 }}>Contact Us</button>
        </div>
        <div style={{ background: '#2a3550', height: '15%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#666', fontSize: '9px' }}>⚠️ Google Maps: API key expired</span>
        </div>
      </>
    ),
  },
  'rosemarys-kitchen': {
    bg: 'linear-gradient(135deg, #2d1810 0%, #4a2820 100%)',
    title: "Rosemary's Kitchen - Old Site",
    elements: (
      <>
        <div style={{ background: '#800020', padding: '8px 16px', fontSize: '11px', color: '#FFFDD0', textAlign: 'center', fontFamily: 'Papyrus, fantasy' }}>
          🍽️ Rosemary's Kitchen
        </div>
        <div style={{ background: '#1a0a06', height: '35%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '30px', opacity: 0.4 }}>⏳</div>
            <span style={{ color: '#555', fontSize: '9px' }}>Video won't load...</span>
          </div>
        </div>
        <div style={{ padding: '10px', fontFamily: 'Comic Sans MS, cursive' }}>
          <p style={{ color: '#FFFDD0', fontSize: '11px' }}>Margherita Pizza... $12</p>
          <p style={{ color: '#FFFDD0', fontSize: '11px' }}>Pasta Carbonara... $15</p>
          <p style={{ color: '#FFFDD0', fontSize: '11px' }}>Tiramisu... $8</p>
          <a href="#" style={{ color: '#4444ff', fontSize: '10px', textDecoration: 'underline' }}>Download Menu (PDF)</a>
          <span style={{ color: '#ff4444', fontSize: '9px', marginLeft: 8 }}>404 Not Found</span>
        </div>
        <div style={{ padding: '8px', fontSize: '9px', color: '#666', fontFamily: 'Times New Roman' }}>
          Hours: Mon-Sat 11am-9pm (Last updated: 2019)
        </div>
      </>
    ),
  },
  'thread-and-bone': {
    bg: 'linear-gradient(135deg, #f5f0e8 0%, #e8e0d0 100%)',
    title: 'Thread & Bone - Old Shopify Theme',
    elements: (
      <>
        <div style={{ background: '#333', padding: '6px 12px', fontSize: '10px', color: '#999', display: 'flex', justifyContent: 'space-between' }}>
          <span>THREAD & BONE</span>
          <span>Shop | About | Cart (0)</span>
        </div>
        <div style={{ background: '#e8e0d0', height: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px' }}>👕</div>
            <span style={{ color: '#888', fontSize: '9px' }}>Generic product grid</span>
          </div>
        </div>
        <div style={{ padding: '10px', background: '#f5f0e8' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
            {['$45', '$62', '$38'].map((p, i) => (
              <div key={i} style={{ background: '#ddd', padding: 8, textAlign: 'center', borderRadius: 2 }}>
                <div style={{ fontSize: '16px', opacity: 0.3 }}>📦</div>
                <span style={{ color: '#666', fontSize: '9px' }}>{p}</span>
              </div>
            ))}
          </div>
          <p style={{ color: '#999', fontSize: '9px', marginTop: 8, textAlign: 'center' }}>1.2% conversion rate • 78% bounce</p>
        </div>
      </>
    ),
  },
  'clarityhq': {
    bg: 'linear-gradient(135deg, #1e1e2e 0%, #2a2a3e 100%)',
    title: 'ClarityHQ - Old Landing Page',
    elements: (
      <>
        <div style={{ padding: '8px 16px', fontSize: '10px', color: '#888', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 'bold', color: '#aaa' }}>ClarityHQ</span>
          <span>Features | Pricing | Login</span>
        </div>
        <div style={{ background: 'linear-gradient(to right, #3b3b5e, #2a2a4e)', padding: '20px', textAlign: 'center' }}>
          <h3 style={{ color: '#ddd', fontSize: '14px', margin: 0 }}>Project Management Made Simple</h3>
          <p style={{ color: '#888', fontSize: '10px', margin: '6px 0' }}>Sign up for free. No credit card required.</p>
          <div style={{ display: 'inline-flex', gap: 4, marginTop: 8 }}>
            <input style={{ background: '#1a1a2e', border: '1px solid #444', padding: '4px 8px', fontSize: '10px', color: '#666', borderRadius: 2, width: 120 }} placeholder="Email address" />
            <button style={{ background: '#6366f1', color: 'white', border: 'none', padding: '4px 12px', fontSize: '10px', borderRadius: 2 }}>Try Free</button>
          </div>
        </div>
        <div style={{ padding: '12px' }}>
          <p style={{ color: '#666', fontSize: '9px', textAlign: 'center' }}>Wall of text about features nobody reads...</p>
          <p style={{ color: '#555', fontSize: '8px', textAlign: 'center', marginTop: 4 }}>0.8% signup rate • No social proof • No demo</p>
        </div>
      </>
    ),
  },
  'packlane-fulfillment': {
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    title: 'Packlane - Manual Spreadsheet Process',
    elements: (
      <>
        <div style={{ background: '#0d7c3e', padding: '6px 12px', fontSize: '10px', color: 'white' }}>
          📊 orders_tracking_v47_FINAL_FINAL.xlsx
        </div>
        <div style={{ background: '#f0f0f0', padding: '6px', fontFamily: 'monospace', fontSize: '8px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#ddd' }}>
                {['Order', 'Status', 'Ship', 'Track#'].map(h => (
                  <th key={h} style={{ padding: '2px 4px', border: '1px solid #bbb', color: '#333', fontSize: '7px' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[['#4521', 'PENDING??', 'FedEx', 'MISSING'], ['#4522', 'shipped', 'UPS', '1Z999...'], ['#4523', 'idk', '???', 'ERROR']].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: '2px 4px', border: '1px solid #ddd', color: cell.includes('ERROR') || cell.includes('MISSING') || cell.includes('???') || cell.includes('idk') ? '#ff0000' : '#333', fontSize: '7px' }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ padding: '8px', textAlign: 'center' }}>
          <p style={{ color: '#ef4444', fontSize: '10px', fontWeight: 'bold' }}>15 hrs/week manual entry</p>
          <p style={{ color: '#888', fontSize: '9px' }}>3-5 errors per week • Lost packages • Angry customers</p>
        </div>
      </>
    ),
  },
  'signal-north': {
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f23 100%)',
    title: 'Signal North - Manual Client Reports',
    elements: (
      <>
        <div style={{ background: '#333', padding: '6px 12px', fontSize: '10px', color: '#999' }}>
          📧 inbox: 47 unread client requests
        </div>
        <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {['Client A: "Where\'s my report?"', 'Client B: "Numbers seem wrong"', 'Client C: "Need update ASAP"'].map((msg, i) => (
            <div key={i} style={{ background: '#2a2a3e', padding: '6px 8px', borderRadius: 4, fontSize: '9px', color: '#ccc', borderLeft: '3px solid #ef4444' }}>
              {msg}
            </div>
          ))}
        </div>
        <div style={{ padding: '8px', textAlign: 'center' }}>
          <p style={{ color: '#ef4444', fontSize: '10px', fontWeight: 'bold' }}>20 hrs/week on reports</p>
          <p style={{ color: '#888', fontSize: '9px' }}>Clients churning 12%/month • Data always stale</p>
        </div>
      </>
    ),
  },
  'ridgeline-capital': {
    bg: 'linear-gradient(135deg, #0a1628 0%, #162240 100%)',
    title: 'Ridgeline - Traditional PDF Reports',
    elements: (
      <>
        <div style={{ background: '#1e3a5f', padding: '8px 12px', fontSize: '10px', color: '#8ab4d6' }}>
          📄 Q3_Analysis_Draft_v12_REVIEWED_FINAL.pdf
        </div>
        <div style={{ background: '#f8f6f0', padding: '12px', fontFamily: 'Times New Roman' }}>
          <h4 style={{ color: '#333', fontSize: '11px', margin: '0 0 4px' }}>Investment Thesis: XYZ Corp</h4>
          <p style={{ color: '#666', fontSize: '8px', lineHeight: 1.3 }}>Based on our analysis of the company's fundamentals, we believe the stock is currently trading at a 23% discount to intrinsic value. Our base case DCF suggests...</p>
          <div style={{ marginTop: 8, padding: 6, background: '#eee', borderRadius: 2 }}>
            <span style={{ color: '#888', fontSize: '8px' }}>Static table: cannot edit assumptions</span>
          </div>
        </div>
        <div style={{ padding: '8px', textAlign: 'center' }}>
          <p style={{ color: '#f59e0b', fontSize: '10px', fontWeight: 'bold' }}>4 weeks per report</p>
          <p style={{ color: '#888', fontSize: '9px' }}>Static PDF • Can't toggle scenarios • Outdated by delivery</p>
        </div>
      </>
    ),
  },
  'archer-analytics': {
    bg: 'linear-gradient(135deg, #0f1729 0%, #1a2540 100%)',
    title: 'Archer - Delayed Data Pipeline',
    elements: (
      <>
        <div style={{ background: '#2a2a3e', padding: '6px 12px', fontSize: '10px', color: '#888' }}>
          ⏰ Last data refresh: 2 days ago
        </div>
        <div style={{ padding: '10px' }}>
          <div style={{ background: '#1a1a2e', borderRadius: 4, padding: 8, border: '1px solid #333' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#666', marginBottom: 4 }}>
              <span>Subscribers</span><span style={{ color: '#ef4444' }}>▼ Declining</span>
            </div>
            <div style={{ height: 40, background: 'linear-gradient(to right, #333 70%, transparent 70%)', borderRadius: 2 }} />
          </div>
        </div>
        <div style={{ padding: '8px', textAlign: 'center' }}>
          <p style={{ color: '#ef4444', fontSize: '10px', fontWeight: 'bold' }}>2-day data lag</p>
          <p style={{ color: '#888', fontSize: '9px' }}>Subscribers leaving • Stale insights • Manual Excel work</p>
        </div>
      </>
    ),
  },
};

const afterMockups: Record<string, { bg: string; title: string; elements: React.ReactNode }> = {
  'summit-mechanical': {
    bg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    title: 'Summit Mechanical - Borbi Glass UI',
    elements: (
      <>
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', padding: '8px 16px', fontSize: '11px', color: 'white', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontWeight: 'bold' }}>SUMMIT MECHANICAL</span>
          <span style={{ color: '#94a3b8' }}>Services | Areas | Reviews | Book Now</span>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a5f)', padding: '20px', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'radial-gradient(circle at 30% 50%, #06b6d4, transparent 60%)' }} />
          <h3 style={{ color: 'white', fontSize: '16px', margin: 0, fontWeight: 700, position: 'relative', zIndex: 1 }}>Reliable HVAC. Guaranteed.</h3>
          <p style={{ color: '#94a3b8', fontSize: '10px', margin: '6px 0', position: 'relative', zIndex: 1 }}>Charlotte's #1 rated heating & cooling</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10, position: 'relative', zIndex: 1 }}>
            <button style={{ background: '#06b6d4', color: 'white', border: 'none', padding: '6px 16px', fontSize: '10px', borderRadius: 8, fontWeight: 600 }}>📞 Call Now</button>
            <button style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 16px', fontSize: '10px', borderRadius: 8 }}>Book Online</button>
          </div>
        </div>
        <div style={{ padding: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
          {['AC Repair', 'Heating', 'Maintenance'].map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', padding: 8, borderRadius: 8, textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '16px' }}>{['❄️', '🔥', '🔧'][i]}</div>
              <span style={{ color: 'white', fontSize: '9px', fontWeight: 600 }}>{s}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: '6px 10px', display: 'flex', justifyContent: 'center', gap: 12 }}>
          {['⭐ 4.9 Rating', '142 Reviews', 'Licensed & Insured'].map((b, i) => (
            <span key={i} style={{ color: '#10b981', fontSize: '8px', fontWeight: 600 }}>{b}</span>
          ))}
        </div>
      </>
    ),
  },
  'rosemarys-kitchen': {
    bg: 'linear-gradient(135deg, #0f172a 0%, #1a1520 100%)',
    title: "Rosemary's Kitchen - Borbi Glass UI",
    elements: (
      <>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', fontSize: '11px', color: 'white', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>Rosemary's Kitchen</span>
          <span style={{ color: '#94a3b8' }}>Menu | Reserve | Order</span>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #2a1a10, #1a0f08)', padding: '18px', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.15, background: 'radial-gradient(circle at 50% 50%, #f59e0b, transparent 60%)' }} />
          <h3 style={{ color: 'white', fontSize: '16px', fontFamily: 'Georgia, serif', margin: 0, position: 'relative', zIndex: 1 }}>Farm to Table. Heart to Plate.</h3>
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 10, position: 'relative', zIndex: 1 }}>
            {['Appetizers', 'Entrées', 'Desserts'].map((t, i) => (
              <button key={i} style={{ background: i === 1 ? '#f59e0b' : 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.15)', padding: '4px 10px', fontSize: '9px', borderRadius: 20 }}>{t}</button>
            ))}
          </div>
        </div>
        <div style={{ padding: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
          {[{ name: 'Truffle Risotto', price: '$24' }, { name: 'Herb-Crusted Salmon', price: '$28' }].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: 8, borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ color: 'white', fontSize: '10px', fontWeight: 600 }}>{item.name}</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                <span style={{ color: '#f59e0b', fontSize: '10px', fontWeight: 700 }}>{item.price}</span>
                <span style={{ color: '#94a3b8', fontSize: '8px' }}>🌱 GF</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: '6px 10px', textAlign: 'center' }}>
          <button style={{ background: '#f59e0b', color: '#0f172a', border: 'none', padding: '6px 20px', fontSize: '10px', borderRadius: 8, fontWeight: 700 }}>Reserve a Table</button>
        </div>
      </>
    ),
  },
  'thread-and-bone': {
    bg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    title: 'Thread & Bone - Borbi Glass UI',
    elements: (
      <>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', fontSize: '11px', color: 'white', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontWeight: 'bold', letterSpacing: 2 }}>THREAD & BONE</span>
          <span style={{ color: '#94a3b8' }}>Shop | Lookbook | Cart</span>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', padding: '16px', textAlign: 'center' }}>
          <h3 style={{ color: 'white', fontSize: '14px', fontWeight: 700, margin: 0 }}>New Collection</h3>
          <p style={{ color: '#94a3b8', fontSize: '10px' }}>Handcrafted leather goods</p>
        </div>
        <div style={{ padding: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
          {[{ name: 'Heritage Jacket', price: '$189', badge: 'Bestseller' }, { name: 'Canvas Tote', price: '$65', badge: 'New' }].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: 8, borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
              <div style={{ background: '#06b6d4', color: 'white', fontSize: '7px', padding: '1px 6px', borderRadius: 10, position: 'absolute', top: 4, right: 4 }}>{item.badge}</div>
              <div style={{ fontSize: '24px', textAlign: 'center', margin: '4px 0' }}>🧥</div>
              <span style={{ color: 'white', fontSize: '10px', fontWeight: 600 }}>{item.name}</span>
              <div style={{ color: '#06b6d4', fontSize: '11px', fontWeight: 700 }}>{item.price}</div>
              <button style={{ background: 'rgba(6,182,212,0.15)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.3)', padding: '3px 8px', fontSize: '8px', borderRadius: 6, marginTop: 4, width: '100%' }}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div style={{ padding: '6px 10px', textAlign: 'center' }}>
          <span style={{ color: '#10b981', fontSize: '9px', fontWeight: 600 }}>+209% conversion rate • 3.4% avg</span>
        </div>
      </>
    ),
  },
  'clarityhq': {
    bg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    title: 'ClarityHQ - Borbi Glass UI',
    elements: (
      <>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', fontSize: '11px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ color: 'white', fontWeight: 'bold' }}>ClarityHQ</span>
          <span style={{ color: '#94a3b8' }}>Features | Pricing | Demo</span>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #0f172a, #1a2744)', padding: '20px', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'radial-gradient(circle at 50% 30%, #8b5cf6, transparent 60%)' }} />
          <h3 style={{ color: 'white', fontSize: '16px', fontWeight: 700, margin: 0, position: 'relative', zIndex: 1 }}>Ship Projects 2x Faster</h3>
          <p style={{ color: '#94a3b8', fontSize: '10px', position: 'relative', zIndex: 1, margin: '6px 0' }}>The project management tool your team will actually use</p>
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 8, position: 'relative', zIndex: 1 }}>
            <button style={{ background: '#8b5cf6', color: 'white', border: 'none', padding: '6px 16px', fontSize: '10px', borderRadius: 8, fontWeight: 600 }}>Start Free Trial</button>
            <button style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 16px', fontSize: '10px', borderRadius: 8 }}>Watch Demo</button>
          </div>
        </div>
        <div style={{ padding: '8px 10px', display: 'flex', gap: 8, justifyContent: 'center' }}>
          {['500+ teams', '4.9★ rating', 'SOC2'].map((b, i) => (
            <span key={i} style={{ background: 'rgba(139,92,246,0.1)', color: '#a78bfa', fontSize: '8px', padding: '3px 8px', borderRadius: 10, border: '1px solid rgba(139,92,246,0.2)' }}>{b}</span>
          ))}
        </div>
        <div style={{ padding: '6px 10px', textAlign: 'center' }}>
          <span style={{ color: '#10b981', fontSize: '9px', fontWeight: 600 }}>+335% signups • 3.8% conversion</span>
        </div>
      </>
    ),
  },
  'packlane-fulfillment': {
    bg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    title: 'Packlane - Automated Dashboard',
    elements: (
      <>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', fontSize: '11px', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 'bold' }}>📦 Packlane Dashboard</span>
          <span style={{ color: '#10b981', fontSize: '9px' }}>● All Systems Operational</span>
        </div>
        <div style={{ padding: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
          {[{ label: 'Orders Today', val: '147', color: '#06b6d4' }, { label: 'Shipped', val: '143', color: '#10b981' }, { label: 'Errors', val: '0', color: '#10b981' }].map((m, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: 8, borderRadius: 8, textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: m.color, fontSize: '16px', fontWeight: 700 }}>{m.val}</div>
              <div style={{ color: '#94a3b8', fontSize: '8px' }}>{m.label}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '6px 8px' }}>
          <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 6, padding: 6, fontSize: '9px', color: '#10b981' }}>
            ✅ Auto-processed 147 orders • Zero manual entry • 1 hr total (was 15 hrs)
          </div>
        </div>
        <div style={{ padding: '6px 10px', textAlign: 'center' }}>
          <span style={{ color: '#06b6d4', fontSize: '9px', fontWeight: 600 }}>15 hrs → 1 hr/week • Zero errors</span>
        </div>
      </>
    ),
  },
  'signal-north': {
    bg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    title: 'Signal North - Automated Reporting',
    elements: (
      <>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', fontSize: '11px', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 'bold' }}>📊 Signal North Portal</span>
          <span style={{ color: '#10b981', fontSize: '9px' }}>● Live Data</span>
        </div>
        <div style={{ padding: '8px' }}>
          {['Client A', 'Client B', 'Client C'].map((c, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 8px', borderRadius: 6, marginBottom: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ color: 'white', fontSize: '10px' }}>{c}</span>
              <span style={{ color: '#10b981', fontSize: '8px' }}>✅ Report auto-sent</span>
            </div>
          ))}
        </div>
        <div style={{ padding: '6px 8px' }}>
          <div style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: 6, padding: 6, fontSize: '9px', color: '#06b6d4' }}>
            📈 20 hrs → 2 hrs/week • Churn down 64% • All reports auto-generated
          </div>
        </div>
      </>
    ),
  },
  'ridgeline-capital': {
    bg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    title: 'Ridgeline - Interactive Research Portal',
    elements: (
      <>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', fontSize: '11px', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 'bold' }}>📈 Ridgeline Research Portal</span>
          <span style={{ color: '#94a3b8' }}>Live • Interactive</span>
        </div>
        <div style={{ padding: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
          {[{ label: 'Bull Case', val: '$142', color: '#10b981' }, { label: 'Bear Case', val: '$87', color: '#ef4444' }].map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: 8, borderRadius: 8, textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: '#94a3b8', fontSize: '8px' }}>{s.label}</div>
              <div style={{ color: s.color, fontSize: '16px', fontWeight: 700 }}>{s.val}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '4px 8px' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 6, padding: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#94a3b8' }}>
              <span>Revenue Growth</span>
              <span style={{ color: '#06b6d4' }}>Drag to adjust →</span>
            </div>
            <div style={{ height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 3, marginTop: 4, position: 'relative' }}>
              <div style={{ height: 6, width: '65%', background: 'linear-gradient(to right, #06b6d4, #8b5cf6)', borderRadius: 3 }} />
            </div>
          </div>
        </div>
        <div style={{ padding: '6px 10px', textAlign: 'center' }}>
          <span style={{ color: '#10b981', fontSize: '9px', fontWeight: 600 }}>4 weeks → 5 days • Interactive • Always current</span>
        </div>
      </>
    ),
  },
  'archer-analytics': {
    bg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    title: 'Archer - Real-Time Dashboard',
    elements: (
      <>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', fontSize: '11px', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 'bold' }}>🎯 Archer Analytics Portal</span>
          <span style={{ color: '#10b981', fontSize: '9px' }}>● Real-Time</span>
        </div>
        <div style={{ padding: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
          {[{ label: 'Subscribers', val: '+73%', color: '#10b981' }, { label: 'Data Lag', val: '0 sec', color: '#06b6d4' }].map((m, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: 8, borderRadius: 8, textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: m.color, fontSize: '16px', fontWeight: 700 }}>{m.val}</div>
              <div style={{ color: '#94a3b8', fontSize: '8px' }}>{m.label}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '6px 8px' }}>
          <div style={{ background: 'rgba(16,185,129,0.1)', borderRadius: 6, padding: 6, border: '1px solid rgba(16,185,129,0.2)' }}>
            <div style={{ height: 30, background: 'linear-gradient(to right, rgba(6,182,212,0.3), rgba(16,185,129,0.5))', borderRadius: 4, position: 'relative' }}>
              <div style={{ position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)', fontSize: '8px', color: '#10b981', fontWeight: 700 }}>▲ Live</div>
            </div>
          </div>
        </div>
        <div style={{ padding: '6px 10px', textAlign: 'center' }}>
          <span style={{ color: '#10b981', fontSize: '9px', fontWeight: 600 }}>Real-time data • +73% subscribers • Zero lag</span>
        </div>
      </>
    ),
  },
};

export const MockupBefore: React.FC<MockupBeforeProps> = ({ variant }) => {
  const m = mockups[variant];
  if (!m) return <div style={{ background: '#333', width: '100%', height: '100%' }} />;
  return (
    <div style={{ background: m.bg, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'absolute', inset: 0 }}>
      {m.elements}
    </div>
  );
};

export const MockupAfter: React.FC<MockupBeforeProps> = ({ variant }) => {
  const m = afterMockups[variant];
  if (!m) return <div style={{ background: '#0f172a', width: '100%', height: '100%' }} />;
  return (
    <div style={{ background: m.bg, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'absolute', inset: 0 }}>
      {m.elements}
    </div>
  );
};
