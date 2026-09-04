const packages = [
  {
    name: 'Maldives Bliss',
    duration: '4 Nights · 5 Days',
    price: 'AED 2,999',
    badge: 'Best Seller',
    tags: ['Beach', 'Luxury', 'Honeymoon'],
    img: 'https://images.unsplash.com/photo-1514282401047-45b84f14c05b?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Thailand Explorer',
    duration: '5 Nights · 6 Days',
    price: 'AED 1,999',
    badge: 'Popular',
    tags: ['Culture', 'Beach', 'Adventure'],
    img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Dubai Staycation',
    duration: '3 Nights · 4 Days',
    price: 'AED 899',
    badge: 'Local Pick',
    tags: ['Luxury', 'Shopping', 'Family'],
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Kashmir Paradise',
    duration: '6 Nights · 7 Days',
    price: 'AED 2,499',
    badge: 'Trending',
    tags: ['Mountains', 'Nature', 'Honeymoon'],
    img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Paris Romance',
    duration: '5 Nights · 6 Days',
    price: 'AED 4,999',
    badge: 'Premium',
    tags: ['Romance', 'Culture', 'Luxury'],
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Singapore Escape',
    duration: '4 Nights · 5 Days',
    price: 'AED 2,299',
    badge: 'New',
    tags: ['City', 'Family', 'Shopping'],
    img: 'https://images.unsplash.com/photo-1525625293386-0bc63e4a32de?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Malaysia Discovery',
    duration: '5 Nights · 6 Days',
    price: 'AED 1,799',
    badge: 'Adventure',
    tags: ['Nature', 'Adventure', 'Culture'],
    img: 'https://images.unsplash.com/photo-1596422405886-a36e05399fef?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Switzerland Alps',
    duration: '7 Nights · 8 Days',
    price: 'AED 6,499',
    badge: 'Luxury',
    tags: ['Mountains', 'Snow', 'Scenic'],
    img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&q=80',
  },
]

export default function FeaturedPackages({ onEnquire }) {
  return (
    <section className="packages" id="packages">
      <div className="container">
        <div className="packages__header">
          <div>
            <span className="section-label">Dreamway Exclusives</span>
            <h2 className="section-title">
              Handpicked <span style={{ color: 'var(--orange)' }}>Dream Packages</span>
            </h2>
            <p className="section-subtitle" style={{ margin: 0 }}>
              Curated travel experiences designed for every type of traveler.
            </p>
          </div>
          <a href="#destinations" className="btn-outline-orange">
            View All
          </a>
        </div>
        <div className="packages__scroll">
          {packages.map(pkg => (
            <div className="pkg-card" key={pkg.name}>
              <div className="pkg-card__img">
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  loading="lazy"
                  onError={e => { e.target.style.display = 'none' }}
                />
                <div className="pkg-card__img-overlay" />
                <div className="pkg-card__badge">{pkg.badge}</div>
                <div className="pkg-card__duration">{pkg.duration}</div>
              </div>
              <div className="pkg-card__body">
                <h3>{pkg.name}</h3>
                <div className="pkg-card__tags">
                  {pkg.tags.map(t => <span className="pkg-card__tag" key={t}>{t}</span>)}
                </div>
                <div className="pkg-card__footer">
                  <div className="pkg-card__price">
                    <div className="from">Starting from</div>
                    <div className="amount">{pkg.price}</div>
                    <div className="per">per person</div>
                  </div>
                  <button
                    className="pkg-card__btn"
                    onClick={() => onEnquire({ package: pkg.name })}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
