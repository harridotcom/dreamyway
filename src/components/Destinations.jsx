const destinations = [
  {
    name: 'Santorini',
    country: 'Greece',
    meta: '120+ packages',
    img: 'https://images.unsplash.com/photo-1570077188670-e3bda5d0e1b5?w=800&h=500&fit=crop&q=80',
    large: true,
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    meta: '80+ packages',
    img: 'https://images.unsplash.com/photo-1537996134566-4f8f8301b3c7?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    meta: '60+ packages',
    img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Machu Picchu',
    country: 'Peru',
    meta: '40+ packages',
    img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&h=500&fit=crop&q=80',
    large: true,
  },
  {
    name: 'Zanzibar',
    country: 'Tanzania',
    meta: '35+ packages',
    img: 'https://images.unsplash.com/photo-1586974988094-d46e7e7d9b74?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Amalfi Coast',
    country: 'Italy',
    meta: '55+ packages',
    img: 'https://images.unsplash.com/photo-1534308143923-ba57c297a75d?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Queenstown',
    country: 'New Zealand',
    meta: '45+ packages',
    img: 'https://images.unsplash.com/photo-1507699622402-c8e37e426f6f?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Marrakech',
    country: 'Morocco',
    meta: '50+ packages',
    img: 'https://images.unsplash.com/photo-1517960905319-e9b0b9e02d06?w=600&h=400&fit=crop&q=80',
  },
]

export default function Destinations({ onEnquire }) {
  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Where To Go</span>
          <h2 className="section-title">
            Trending <span style={{ color: 'var(--orange)' }}>Destinations</span>
          </h2>
          <p className="section-subtitle">
            Explore the world's most sought-after destinations — each crafted for a lifetime of memories.
          </p>
        </div>
        <div className="destinations__grid">
          {destinations.map(d => (
            <div
              key={d.name}
              className={`dest-card${d.large ? ' dest-card--large' : ''}`}
              onClick={() => onEnquire({ destination: d.name })}
            >
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="dest-card__bg-img"
                onError={e => { e.target.style.opacity = 0 }}
              />
              <div className="dest-card__overlay" />
              <div className="dest-card__content">
                <div className="dest-card__country">{d.country}</div>
                <div className="dest-card__name">{d.name}</div>
                <div className="dest-card__meta">{d.meta}</div>
              </div>
              <div className="dest-card__btn">Explore</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
