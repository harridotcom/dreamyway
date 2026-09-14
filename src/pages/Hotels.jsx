import { useState } from 'react'
import Footer from '../components/Footer'

const hotelPackages = {
  budget: [
    {
      name: 'City Comfort Inn',
      location: 'Deira, Dubai',
      rating: 3,
      price: 'AED 180',
      img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=380&fit=crop&q=80',
      highlights: ['Free WiFi', 'Breakfast Included', 'Airport Shuttle', '24hr Front Desk'],
      badge: 'Great Value',
      badgeColor: '#059669',
    },
    {
      name: 'Bur Dubai Suites',
      location: 'Bur Dubai, Dubai',
      rating: 3,
      price: 'AED 210',
      img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=380&fit=crop&q=80',
      highlights: ['Free WiFi', 'Kitchenette', 'Metro Access', 'Daily Housekeeping'],
      badge: 'Budget Friendly',
      badgeColor: '#059669',
    },
  ],
  standard: [
    {
      name: 'Marina View Hotel',
      location: 'Dubai Marina, Dubai',
      rating: 4,
      price: 'AED 420',
      img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=380&fit=crop&q=80',
      highlights: ['Sea View Rooms', 'Swimming Pool', 'Gym Access', 'Breakfast Included', 'Free WiFi'],
      badge: 'Most Popular',
      badgeColor: '#F97316',
    },
    {
      name: 'Al Barsha Grand',
      location: 'Al Barsha, Dubai',
      rating: 4,
      price: 'AED 380',
      img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=380&fit=crop&q=80',
      highlights: ['Rooftop Pool', 'Spa Access', 'Mall Nearby', 'Breakfast Included'],
      badge: 'Family Friendly',
      badgeColor: '#F97316',
    },
  ],
  luxury: [
    {
      name: 'Palm Jumeirah Resort',
      location: 'Palm Jumeirah, Dubai',
      rating: 5,
      price: 'AED 1,250',
      img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=380&fit=crop&q=80',
      highlights: ['Private Beach', 'Infinity Pool', 'Butler Service', 'Fine Dining', 'Spa & Wellness'],
      badge: 'Luxury',
      badgeColor: '#7C3AED',
    },
    {
      name: 'Downtown Sky Suites',
      location: 'Downtown, Dubai',
      rating: 5,
      price: 'AED 980',
      img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=380&fit=crop&q=80',
      highlights: ['Burj Khalifa View', 'Rooftop Lounge', 'Valet Parking', 'Executive Lounge Access'],
      badge: '5-Star',
      badgeColor: '#7C3AED',
    },
  ],
  resort: [
    {
      name: 'Ras Al Khaimah Beach Resort',
      location: 'Ras Al Khaimah, UAE',
      rating: 5,
      price: 'AED 750',
      img: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=380&fit=crop&q=80',
      highlights: ['All-Inclusive', 'Private Beach', 'Water Sports', 'Kids Club', 'Multiple Restaurants'],
      badge: 'All-Inclusive',
      badgeColor: '#DC2626',
    },
    {
      name: 'Fujairah Mountain Villas',
      location: 'Fujairah, UAE',
      rating: 4,
      price: 'AED 620',
      img: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&h=380&fit=crop&q=80',
      highlights: ['Private Villas', 'Mountain View', 'Outdoor Pool', 'BBQ Area'],
      badge: 'Staycation',
      badgeColor: '#DC2626',
    },
  ],
}

const tabs = [
  { id: 'budget', label: 'Budget Hotels' },
  { id: 'standard', label: 'Standard Hotels' },
  { id: 'luxury', label: 'Luxury Hotels' },
  { id: 'resort', label: 'Resorts & Villas' },
]

const inclusions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: 'Best Price Guarantee',
    desc: 'We match or beat any comparable hotel rate found elsewhere.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z" />
      </svg>
    ),
    title: 'Handpicked Properties',
    desc: 'Every hotel is personally vetted by our travel specialists for quality.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    title: 'Free Cancellation',
    desc: 'Flexible booking options with free cancellation on most rooms.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    ),
    title: 'Instant Confirmation',
    desc: 'Get your booking confirmed instantly, no waiting required.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
    title: '24/7 Support',
    desc: 'Our team is on standby around the clock for any assistance you need.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
      </svg>
    ),
    title: 'Wide Selection',
    desc: 'From budget stays to 5-star resorts, we cover every destination and budget.',
  },
]

function Stars({ count }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#F97316" width="13" height="13">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.77l-5.21 2.75 1-5.8-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </span>
  )
}

export default function Hotels({ onEnquire }) {
  const [activeTab, setActiveTab] = useState('standard')

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
            backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop&q=80)',
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
            Stay in Comfort
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
            Hotel Bookings<br />
            <span style={{ color: '#FB923C' }}>Worldwide</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.72)',
              maxWidth: 560,
              margin: '0 auto 40px',
            }}
          >
            From budget stays to 5-star resorts, find and book the perfect hotel for
            every trip with Dreamway Key's best price guarantee.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-orange" onClick={() => onEnquire({ service: 'Hotels' })}>
              Request a Callback
            </button>
            <a href="#packages" className="btn-white">
              View Hotels
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
            { num: '10,000+', label: 'Hotels Worldwide' },
            { num: '50+', label: 'Countries Covered' },
            { num: 'Best', label: 'Price Guarantee' },
            { num: '24/7', label: 'Booking Support' },
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
            <span className="section-label">Our Hotels</span>
            <h2 className="section-title">
              Find Your Perfect <span style={{ color: 'var(--orange)' }}>Stay</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
              Handpicked hotels across every category, so there's something for every traveller.
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
            {hotelPackages[activeTab].map(hotel => (
              <div
                key={hotel.name}
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
                    src={hotel.img}
                    alt={hotel.name}
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
                      background: hotel.badgeColor,
                      color: 'white',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '50px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {hotel.badge}
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
                    {hotel.location}
                  </span>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--gray-800)', marginBottom: 6 }}>
                    {hotel.name}
                  </h3>
                  <div style={{ marginBottom: 16 }}>
                    <Stars count={hotel.rating} />
                  </div>
                  <ul style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
                    {hotel.highlights.map(h => (
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
                      <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--orange)' }}>{hotel.price}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)' }}>per night</div>
                    </div>
                    <button
                      className="btn-orange"
                      style={{ padding: '9px 18px', fontSize: '0.82rem' }}
                      onClick={() => onEnquire({ package: hotel.name, service: 'Hotels' })}
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
            <span className="section-label">Why Book With Us</span>
            <h2 className="section-title">
              Hassle-Free <span style={{ color: 'var(--orange)' }}>Hotel Booking</span>
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=500&fit=crop&q=70)',
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
            Need Help Choosing?
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
            Let Us Find Your Ideal Hotel
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginBottom: 36, lineHeight: 1.7 }}>
            Tell us your destination and budget, and our travel experts will shortlist
            the best options for you — free of charge.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-orange" onClick={() => onEnquire({ service: 'Hotels' })}>
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
