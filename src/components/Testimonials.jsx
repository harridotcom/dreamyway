const reviews = [
  {
    name: 'Aarav Sharma',
    dest: 'Maldives',
    text: 'Absolutely incredible service! Dreamway Key organised our honeymoon perfectly — every detail was taken care of. The resort was stunning and the transfers were seamless.',
    avatar: '#F97316',
    initial: 'AS',
  },
  {
    name: 'Fatima Al-Hassan',
    dest: 'Paris',
    text: 'The Paris package was beyond our expectations. Hotels were gorgeous, all tours pre-arranged, and the team was reachable 24/7. Will definitely book again!',
    avatar: '#7C3AED',
    initial: 'FA',
  },
  {
    name: 'Rohan Mehta',
    dest: 'Thailand',
    text: 'Took my family of 5 to Thailand. The kids loved every moment — from the excursions to the beach resorts. Flawless planning by the Dreamway team.',
    avatar: '#059669',
    initial: 'RM',
  },
  {
    name: 'Priya Nair',
    dest: 'Kashmir',
    text: 'Kashmir was a dream! The houseboat experience on Dal Lake was once in a lifetime. Dreamway handled our visas and everything without any hassle.',
    avatar: '#DC2626',
    initial: 'PN',
  },
  {
    name: 'Mohammed Al-Rashidi',
    dest: 'Hajj Package',
    text: 'The Hajj package was exceptional — accommodation near Haram, guided services, and the team was compassionate and professional throughout our sacred journey.',
    avatar: '#D97706',
    initial: 'MR',
  },
  {
    name: 'Anita George',
    dest: 'Singapore & Malaysia',
    text: 'Everything was spot on — flights, hotels, city tours, and even the food recommendations! The Dreamway team feels like family. 10/10 experience.',
    avatar: '#0284C7',
    initial: 'AG',
  },
  {
    name: 'Siddharth Rao',
    dest: 'Europe Tour',
    text: 'Got our Schengen visa within record time and the 12-day Europe tour was magnificent. Visited 6 countries without a single hiccup. Highly recommend!',
    avatar: '#BE185D',
    initial: 'SR',
  },
  {
    name: 'Leila Karimi',
    dest: 'Bali',
    text: 'A truly rejuvenating experience. The wellness packages in Bali were curated to perfection. I came back feeling completely renewed. Thank you Dreamway!',
    avatar: '#065F46',
    initial: 'LK',
  },
]

const doubled = [...reviews, ...reviews]

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
)

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Traveler Stories</span>
          <h2 className="section-title">
            What Our <span style={{ color: 'var(--orange)' }}>Travelers Say</span>
          </h2>
          <p className="section-subtitle">
            Real experiences from real people who trusted Dreamway Key to make their journeys unforgettable.
          </p>
        </div>
      </div>
      <div className="testimonials__track-wrap">
        <div className="testimonials__track">
          {doubled.map((r, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-card__stars">
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className="testi-card__text">"{r.text}"</p>
              <div className="testi-card__author">
                <div className="testi-card__avatar" style={{ background: r.avatar }}>
                  {r.initial}
                </div>
                <div>
                  <div className="testi-card__name">{r.name}</div>
                  <div className="testi-card__dest">
                    <LocationIcon /> {r.dest}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
