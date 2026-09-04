const GulfIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)

const GlobalIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
)

const gulfCountries = ['UAE', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain', 'Oman']
const globalCountries = ['Schengen', 'UK', 'USA', 'Canada', 'Australia', 'New Zealand', 'Japan', 'Singapore']

export default function VisaSection({ onEnquire }) {
  return (
    <section className="visa" id="visa">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Visa Services</span>
          <h2 className="section-title">
            Stress-Free <span style={{ color: 'var(--orange)' }}>Visa Assistance</span>
          </h2>
          <p className="section-subtitle">
            Our visa experts handle all documentation, applications, and follow-ups so you can focus on packing your bags.
          </p>
        </div>
        <div className="visa__grid">
          <div className="visa-card visa-card--gulf">
            <div className="visa-card__icon"><GulfIcon /></div>
            <div>
              <div className="visa-card__title">Gulf Visa Services</div>
              <p className="visa-card__desc">
                Fast and reliable visa processing for all Gulf Cooperation Council countries.
                Tourist, visit, transit, and multiple-entry options available with quick approvals.
              </p>
            </div>
            <div className="visa-card__countries">
              {gulfCountries.map(c => (
                <span className="visa-card__country" key={c}>{c}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn-orange" onClick={() => onEnquire({ service: 'Gulf Visa' })}>
                Enquire Now
              </button>
              <button className="btn-outline-orange" onClick={() => onEnquire({ service: 'Gulf Visa' })}>
                Check Requirements
              </button>
            </div>
          </div>
          <div className="visa-card visa-card--global">
            <div className="visa-card__icon" style={{ background: 'rgba(99,102,241,0.1)', color: '#6366f1' }}>
              <GlobalIcon />
            </div>
            <div>
              <div className="visa-card__title">Global Visa Services</div>
              <p className="visa-card__desc">
                Comprehensive visa assistance for worldwide travel. From Schengen to US and beyond —
                we ensure your applications are complete, accurate, and submitted on time.
              </p>
            </div>
            <div className="visa-card__countries">
              {globalCountries.map(c => (
                <span className="visa-card__country" key={c} style={{ borderColor: 'rgba(99,102,241,0.2)' }}>{c}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn-orange" onClick={() => onEnquire({ service: 'Global Visa' })}>
                Enquire Now
              </button>
              <button className="btn-outline-orange" onClick={() => onEnquire({ service: 'Global Visa' })}>
                Check Requirements
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
