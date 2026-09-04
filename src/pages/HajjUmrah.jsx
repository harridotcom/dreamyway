import { useState } from 'react'
import Footer from '../components/Footer'

const umrahPackages = [
  {
    name: 'Economy Umrah',
    duration: '10 Nights · 11 Days',
    price: 'AED 3,500',
    hotel: '3-Star Hotel',
    flight: 'Economy Class',
    img: 'https://images.unsplash.com/photo-1591604466107-ec97de294d95?w=600&h=380&fit=crop&q=80',
    highlights: ['Return Flights', 'Visa Processing', 'Makkah & Madinah Hotels', 'Airport Transfers', 'Ziyarat Tours'],
    badge: 'Budget Friendly',
    badgeColor: '#059669',
  },
  {
    name: 'Standard Umrah',
    duration: '14 Nights · 15 Days',
    price: 'AED 5,500',
    hotel: '4-Star Hotel',
    flight: 'Economy Class',
    img: 'https://images.unsplash.com/photo-1564507004406-ab5a06b05a2b?w=600&h=380&fit=crop&q=80',
    highlights: ['Return Flights', 'Visa Processing', 'Deluxe Hotels', 'Airport Transfers', 'Guided Ziyarat', 'Breakfast Included'],
    badge: 'Most Popular',
    badgeColor: '#F97316',
  },
  {
    name: 'Premium Umrah',
    duration: '12 Nights · 13 Days',
    price: 'AED 8,999',
    hotel: '5-Star Hotel',
    flight: 'Business Class',
    img: 'https://images.unsplash.com/photo-1548407260-da850faa41e3?w=600&h=380&fit=crop&q=80',
    highlights: ['Business Class Flights', 'Visa Processing', 'Luxury Hotels', 'Private Transfers', 'VIP Ziyarat', 'Full Board Meals', 'Dedicated Guide'],
    badge: 'Luxury',
    badgeColor: '#7C3AED',
  },
  {
    name: 'Ramadan Special',
    duration: '15 Nights · 16 Days',
    price: 'AED 9,500',
    hotel: '4-Star Hotel',
    flight: 'Economy Class',
    img: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&h=380&fit=crop&q=80',
    highlights: ['Return Flights', 'Visa Processing', 'Ramadan Hotels', 'Iftar & Suhoor', 'Airport Transfers', 'Special Taraweeh Programs'],
    badge: 'Ramadan 2025',
    badgeColor: '#DC2626',
  },
]

const hajjPackages = [
  {
    name: 'Economy Hajj Package',
    price: 'AED 15,000',
    hotel: '3-Star (1 km from Haram)',
    img: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&h=380&fit=crop&q=80',
    highlights: ['Return Flights', 'Official Hajj Visa', 'Maktab Services', 'Mina Tent (Air-cooled)', 'Arafat, Muzdalifah Stay', 'Group Guidance', 'Meals in Mina'],
    badge: 'Economy',
    badgeColor: '#059669',
  },
  {
    name: 'Standard Hajj Package',
    price: 'AED 22,000',
    hotel: '4-Star (500m from Haram)',
    img: 'https://images.unsplash.com/photo-1591604466107-ec97de294d95?w=600&h=380&fit=crop&q=80',
    highlights: ['Return Flights', 'Hajj Visa', 'Deluxe Mina Camp', 'Arafat, Muzdalifah Stay', 'All Meals', 'Dedicated Scholar', 'Medical Support', 'Ziyarat Tours'],
    badge: 'Recommended',
    badgeColor: '#F97316',
  },
  {
    name: 'VIP Hajj Package',
    price: 'AED 38,000',
    hotel: '5-Star (Adjacent to Haram)',
    img: 'https://images.unsplash.com/photo-1564507004406-ab5a06b05a2b?w=600&h=380&fit=crop&q=80',
    highlights: ['Business Class Flights', 'Hajj Visa', 'Luxury Mina Suite', 'Private Transfers', 'All Meals (Premium)', 'Personal Scholar', '24/7 Medical Team', 'Exclusive Ziyarat'],
    badge: 'VIP',
    badgeColor: '#7C3AED',
  },
]

const inclusions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    ),
    title: 'Return Flights',
    desc: 'Direct or connecting flights from UAE to Jeddah / Madinah and back.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    title: 'Visa Processing',
    desc: 'Full Hajj / Umrah visa processing handled by our licensed agency.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
      </svg>
    ),
    title: 'Hotel Accommodation',
    desc: 'Hand-picked hotels in Makkah & Madinah, close to the Haramain.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z"/>
      </svg>
    ),
    title: 'Experienced Guide',
    desc: 'Knowledgeable Islamic scholars and licensed guides throughout the journey.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    title: 'Ziyarat Tours',
    desc: 'Guided visits to all major historical and religious sites in both cities.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
      </svg>
    ),
    title: 'Group Support',
    desc: '24/7 group coordinator and on-ground support team for any assistance.',
  },
]

export default function HajjUmrah({ onEnquire }) {
  const [activeTab, setActiveTab] = useState('umrah')

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        style={{
          minHeight: '75vh',
          background: 'linear-gradient(160deg, #0d1b35 0%, #1a3460 40%, #1e4d8c 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'calc(var(--navbar-h) + 60px) 24px 80px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1591604466107-ec97de294d95?w=1600&h=900&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.18,
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.1) 0%, transparent 70%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(249,115,22,0.18)',
              border: '1px solid rgba(249,115,22,0.4)',
              color: '#FBA860',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              padding: '6px 18px',
              borderRadius: '50px',
              marginBottom: '24px',
            }}
          >
            Sacred Journeys
          </span>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.18,
              marginBottom: 20,
            }}
          >
            Hajj & Umrah<br />
            <span style={{ color: '#FB923C' }}>Packages 2025</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.72)',
              maxWidth: 560,
              margin: '0 auto 40px',
            }}
          >
            Embark on the most blessed journey of your life with complete peace of mind.
            Dreamway Key handles every detail so you can focus entirely on your ibadah.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-orange" onClick={() => onEnquire({ service: 'Hajj & Umrah' })}>
              Request a Callback
            </button>
            <a href="#packages" className="btn-white">
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ───────────────────────────────── */}
      <section style={{ background: 'white', padding: '0' }}>
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            borderBottom: '1px solid var(--gray-100)',
          }}
        >
          {[
            { num: '5,000+', label: 'Pilgrims Served' },
            { num: '15+', label: 'Years Experience' },
            { num: '100%', label: 'Visa Success Rate' },
            { num: '24/7', label: 'On-Ground Support' },
          ].map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: '28px 20px',
                textAlign: 'center',
                borderRight: i < 3 ? '1px solid var(--gray-100)' : 'none',
              }}
            >
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--orange)', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--gray-500)', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Package Tabs ──────────────────────────────── */}
      <section id="packages" style={{ padding: '72px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <span className="section-label">Our Packages</span>
            <h2 className="section-title">
              Choose Your <span style={{ color: 'var(--orange)' }}>Sacred Journey</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
              Carefully designed packages to suit every pilgrim — from budget to luxury.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 48 }}>
            {[
              { id: 'umrah', label: 'Umrah Packages' },
              { id: 'hajj', label: 'Hajj Packages' },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                style={{
                  padding: '11px 28px',
                  borderRadius: 'var(--radius)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  border: '2px solid',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  background: activeTab === t.id ? 'var(--orange)' : 'white',
                  color: activeTab === t.id ? 'white' : 'var(--orange)',
                  borderColor: 'var(--orange)',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: activeTab === 'hajj' ? 'repeat(3,1fr)' : 'repeat(4,1fr)',
              gap: 24,
            }}
            className="hajj-pkg-grid"
          >
            {(activeTab === 'umrah' ? umrahPackages : hajjPackages).map(pkg => (
              <div
                key={pkg.name}
                style={{
                  background: 'white',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow)',
                  transition: 'var(--transition)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)' }}
              >
                <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: '#1a3460' }}>
                  <img
                    src={pkg.img}
                    alt={pkg.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                    onError={e => { e.target.style.opacity = 0 }}
                  />
                  <div
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6) 100%)',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute', top: 14, right: 14,
                      background: pkg.badgeColor,
                      color: 'white',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '50px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {pkg.badge}
                  </span>
                  {pkg.duration && (
                    <span
                      style={{
                        position: 'absolute', bottom: 14, left: 14,
                        background: 'rgba(0,0,0,0.55)',
                        color: 'white',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        padding: '4px 12px',
                        borderRadius: '50px',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      {pkg.duration}
                    </span>
                  )}
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--gray-800)', marginBottom: 4 }}>
                    {pkg.name}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginBottom: 16 }}>
                    {pkg.hotel} &nbsp;·&nbsp; {pkg.flight || 'Economy Class'}
                  </div>
                  <ul style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
                    {pkg.highlights.map(h => (
                      <li key={h} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'var(--gray-600)' }}>
                        <svg viewBox="0 0 20 20" fill="var(--orange)" width="14" height="14">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)' }}>Starting from</div>
                      <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--orange)' }}>{pkg.price}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)' }}>per person</div>
                    </div>
                    <button
                      className="btn-orange"
                      style={{ padding: '9px 18px', fontSize: '0.82rem' }}
                      onClick={() => onEnquire({ package: pkg.name, service: 'Hajj & Umrah' })}
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ───────────────────────────── */}
      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">All Packages Include</span>
            <h2 className="section-title">
              Everything You <span style={{ color: 'var(--orange)' }}>Need, Handled</span>
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}
          >
            {inclusions.map(inc => (
              <div
                key={inc.title}
                style={{
                  display: 'flex',
                  gap: 16,
                  padding: '24px',
                  border: '1.5px solid var(--gray-100)',
                  borderRadius: 'var(--radius)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange-pale)'; e.currentTarget.style.boxShadow = 'var(--shadow)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--gray-100)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div
                  style={{
                    width: 50, height: 50,
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--orange-pale)',
                    color: 'var(--orange)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {inc.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--gray-800)', marginBottom: 6 }}>{inc.title}</h4>
                  <p style={{ fontSize: '0.83rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>{inc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a2f5e 0%, #0f1f40 100%)',
          padding: '72px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1564507004406-ab5a06b05a2b?w=1200&h=500&fit=crop&q=70)',
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: 0.1,
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(249,115,22,0.2)',
              border: '1px solid rgba(249,115,22,0.4)',
              color: '#FBA860',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              padding: '5px 14px',
              borderRadius: '50px',
              marginBottom: '20px',
            }}
          >
            Book Your Sacred Journey
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Begin Your Spiritual Journey Today
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginBottom: 36, lineHeight: 1.7 }}>
            Our Hajj & Umrah specialists are ready to help you plan the most blessed
            journey of your life. Contact us for a personalised quote.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-orange" onClick={() => onEnquire({ service: 'Hajj & Umrah' })}>
              Get a Free Quote
            </button>
            <a
              href="tel:+97140000000"
              className="btn-white"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer onEnquire={onEnquire} />
    </>
  )
}
