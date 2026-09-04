const points = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
      </svg>
    ),
    title: 'Tailor-Made Itineraries',
    desc: 'Every trip is crafted around your preferences, budget, and travel style.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
      </svg>
    ),
    title: '24/7 Support',
    desc: 'Our travel experts are available around the clock wherever you are in the world.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    title: 'Best Price Guarantee',
    desc: 'We match or beat any comparable quote — no hidden fees, ever.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
    title: 'Fully Insured Travel',
    desc: 'Travel with complete peace of mind with comprehensive coverage included.',
  },
]

const stats = [
  { num: '10K+', label: 'Happy Travelers' },
  { num: '150+', label: 'Destinations' },
  { num: '15+', label: 'Years Experience' },
  { num: '4.9', label: 'Average Rating' },
]

export default function WhyUs() {
  return (
    <section className="whyus">
      <div className="container">
        <div className="whyus__inner">
          <div className="whyus__left">
            <span className="section-label" style={{ background: 'rgba(249,115,22,0.2)', color: '#FBA860' }}>
              Why Choose Us
            </span>
            <h2 className="section-title">
              The Dreamway Key<br />
              <span style={{ color: 'var(--orange-mid)' }}>Difference</span>
            </h2>
            <p className="section-subtitle">
              We don't just book trips — we craft journeys that become lifelong memories. Here's why thousands trust us.
            </p>
            <div className="whyus__points">
              {points.map(p => (
                <div className="whyus__point" key={p.title}>
                  <div className="whyus__point-icon">{p.icon}</div>
                  <div className="whyus__point-text">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="whyus__right">
            {stats.map(s => (
              <div className="whyus__stat-card" key={s.label}>
                <div className="whyus__stat-num">{s.num}</div>
                <div className="whyus__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
