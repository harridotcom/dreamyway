import { useState } from 'react'
import Footer from '../components/Footer'

const cruisePackages = {
  middleeast: [
    {
      name: 'Dubai & Abu Dhabi Escape',
      line: 'MSC Cruises',
      duration: '3 Nights · 4 Days',
      price: 'AED 1,450',
      cabin: 'Interior Cabin',
      img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&h=380&fit=crop&q=80',
      highlights: ['Full Board Meals', 'Onboard Entertainment', 'Dubai & Abu Dhabi Stops', 'Kids Club'],
      badge: 'Short Getaway',
      badgeColor: '#059669',
    },
    {
      name: 'Arabian Gulf Explorer',
      line: 'Costa Cruises',
      duration: '5 Nights · 6 Days',
      price: 'AED 2,600',
      cabin: 'Ocean View Cabin',
      img: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=600&h=380&fit=crop&q=80',
      highlights: ['Full Board Meals', 'Live Shows', 'Doha & Bahrain Stops', 'Spa Access', 'Pool Deck'],
      badge: 'Most Popular',
      badgeColor: '#F97316',
    },
  ],
  mediterranean: [
    {
      name: 'Mediterranean Highlights',
      line: 'Royal Caribbean',
      duration: '7 Nights · 8 Days',
      price: 'AED 4,900',
      cabin: 'Balcony Cabin',
      img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=380&fit=crop&q=80',
      highlights: ['Full Board Meals', 'Rome, Barcelona & Nice Stops', 'Onboard Pools', 'Nightly Entertainment'],
      badge: 'Bestseller',
      badgeColor: '#F97316',
    },
    {
      name: 'Greek Isles Discovery',
      line: 'Celebrity Cruises',
      duration: '8 Nights · 9 Days',
      price: 'AED 5,800',
      cabin: 'Balcony Cabin',
      img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=380&fit=crop&q=80',
      highlights: ['Full Board Meals', 'Santorini & Mykonos Stops', 'Specialty Dining', 'Excursions Included'],
      badge: 'Scenic Route',
      badgeColor: '#059669',
    },
  ],
  caribbean: [
    {
      name: 'Caribbean Paradise',
      line: 'Norwegian Cruise Line',
      duration: '7 Nights · 8 Days',
      price: 'AED 5,200',
      cabin: 'Balcony Cabin',
      img: 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=600&h=380&fit=crop&q=80',
      highlights: ['Full Board Meals', 'Bahamas & Jamaica Stops', 'Water Slides', 'Casino & Nightlife'],
      badge: 'Family Favourite',
      badgeColor: '#DC2626',
    },
    {
      name: 'Bahamas Island Hopper',
      line: 'Carnival Cruise Line',
      duration: '4 Nights · 5 Days',
      price: 'AED 2,100',
      cabin: 'Interior Cabin',
      img: 'https://images.unsplash.com/photo-1548613053-22087dd0b6d6?w=600&h=380&fit=crop&q=80',
      highlights: ['Full Board Meals', 'Private Island Stop', 'Water Park', 'Live Entertainment'],
      badge: 'Great Value',
      badgeColor: '#059669',
    },
  ],
  luxury: [
    {
      name: 'World Explorer Suite',
      line: 'Silversea Cruises',
      duration: '10 Nights · 11 Days',
      price: 'AED 14,900',
      cabin: 'Luxury Suite with Butler',
      img: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=600&h=380&fit=crop&q=80',
      highlights: ['All-Inclusive Dining', 'Butler Service', 'Private Excursions', 'Premium Beverages', 'Spa & Wellness'],
      badge: 'Ultra Luxury',
      badgeColor: '#7C3AED',
    },
    {
      name: 'Grand Voyage Penthouse',
      line: 'Regent Seven Seas',
      duration: '12 Nights · 13 Days',
      price: 'AED 19,500',
      cabin: 'Penthouse Suite',
      img: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=600&h=380&fit=crop&q=80',
      highlights: ['All-Inclusive Dining', 'Unlimited Shore Excursions', 'Business Class Flights', 'Personal Concierge'],
      badge: 'VIP',
      badgeColor: '#7C3AED',
    },
  ],
}

const tabs = [
  { id: 'middleeast', label: 'Middle East' },
  { id: 'mediterranean', label: 'Mediterranean' },
  { id: 'caribbean', label: 'Caribbean' },
  { id: 'luxury', label: 'Luxury Cruises' },
]

const inclusions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: 'All-Inclusive Dining',
    desc: 'Full board meals across multiple onboard restaurants included in every fare.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z" />
      </svg>
    ),
    title: 'Onboard Entertainment',
    desc: 'Live shows, casinos, pools and activities for every age group.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    title: 'Multiple Port Stops',
    desc: 'Explore several iconic destinations without unpacking more than once.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    ),
    title: 'Flexible Cabin Options',
    desc: 'From interior cabins to private suites with butler service, choose your comfort level.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
    title: '24/7 Concierge',
    desc: 'Our team assists with cabin upgrades, excursions and any onboard queries.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
      </svg>
    ),
    title: 'Family Friendly',
    desc: 'Kids clubs, water parks and family cabins available across most sailings.',
  },
]

export default function Cruises({ onEnquire }) {
  const [activeTab, setActiveTab] = useState('middleeast')

  return (
    <>
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&h=900&fit=crop&q=80)',
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
            Set Sail With Us
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
            Cruise Holidays<br />
            <span style={{ color: '#FB923C' }}>& Voyages</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.72)',
              maxWidth: 560,
              margin: '0 auto 40px',
            }}
          >
            Explore the world's most iconic coastlines aboard world-class ships, with
            every detail of your voyage planned by Dreamway Key.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-orange" onClick={() => onEnquire({ service: 'Cruises' })}>
              Request a Callback
            </button>
            <a href="#packages" className="btn-white">
              View Cruises
            </a>
          </div>
        </div>
      </section>

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
            { num: '30+', label: 'Cruise Lines' },
            { num: '100+', label: 'Destinations' },
            { num: '15+', label: 'Years Experience' },
            { num: '24/7', label: 'Concierge Support' },
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

      <section id="packages" style={{ padding: '72px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <span className="section-label">Our Cruises</span>
            <h2 className="section-title">
              Choose Your <span style={{ color: 'var(--orange)' }}>Voyage</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
              Curated cruise itineraries across the world's most beautiful waters.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                style={{
                  padding: '11px 24px',
                  borderRadius: 'var(--radius)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
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
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 24,
            }}
            className="hajj-pkg-grid"
          >
            {cruisePackages[activeTab].map(cruise => (
              <div
                key={cruise.name}
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
                    src={cruise.img}
                    alt={cruise.name}
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
                      background: cruise.badgeColor,
                      color: 'white',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '50px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {cruise.badge}
                  </span>
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
                    {cruise.duration}
                  </span>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--gray-800)', marginBottom: 4 }}>
                    {cruise.name}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginBottom: 16 }}>
                    {cruise.line} &nbsp;·&nbsp; {cruise.cabin}
                  </div>
                  <ul style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
                    {cruise.highlights.map(h => (
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
                      <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--orange)' }}>{cruise.price}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)' }}>per person</div>
                    </div>
                    <button
                      className="btn-orange"
                      style={{ padding: '9px 18px', fontSize: '0.82rem' }}
                      onClick={() => onEnquire({ package: cruise.name, service: 'Cruises' })}
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

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">All Cruises Include</span>
            <h2 className="section-title">
              Everything For A <span style={{ color: 'var(--orange)' }}>Smooth Voyage</span>
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=500&fit=crop&q=70)',
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
            Book Your Voyage
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
            Set Sail on Your Dream Cruise
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginBottom: 36, lineHeight: 1.7 }}>
            Our cruise specialists are ready to help you plan the perfect voyage.
            Contact us for a personalised itinerary and quote.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-orange" onClick={() => onEnquire({ service: 'Cruises' })}>
              Get a Free Quote
            </button>
            <a href="tel:+97140000000" className="btn-white">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer onEnquire={onEnquire} />
    </>
  )
}
