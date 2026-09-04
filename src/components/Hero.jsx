export default function Hero({ onEnquire }) {
  return (
    <section className="hero" id="home">
      {/* Real background image */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
        }}
      />
      <div className="hero__bg-overlay" />
      <div className="hero__particles">
        <div className="hero__particle" />
        <div className="hero__particle" />
        <div className="hero__particle" />
      </div>
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Trusted Travel Partner — UAE
        </div>
        <h1 className="hero__title">
          Your Dream Journey<br />
          <span>Starts Here</span>
        </h1>
        <p className="hero__subtitle">
          Experience the world with Dreamway Key — crafting unforgettable journeys
          with expert guidance, exclusive packages, and seamless travel solutions.
        </p>
        <div className="hero__btns">
          <button className="btn-orange" onClick={() => onEnquire({ source: 'hero' })}>
            Plan My Trip
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <a
            href="#packages"
            className="btn-outline-orange"
            style={{ border: '2px solid rgba(255,255,255,0.4)', color: 'white' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
          >
            Explore Packages
          </a>
        </div>
        <div className="hero__stats">
          {[
            { num: '10,000+', label: 'Happy Travelers' },
            { num: '150+', label: 'Destinations' },
            { num: '15+', label: 'Years of Trust' },
            { num: '500+', label: 'Packages' },
          ].map(s => (
            <div className="hero__stat" key={s.label}>
              <div className="hero__stat-num">{s.num}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="hero__scroll"
        onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        Scroll
      </div>
    </section>
  )
}
