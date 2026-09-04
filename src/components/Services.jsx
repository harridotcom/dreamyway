const FlightIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
  </svg>
)
const HotelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
  </svg>
)
const TourIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)
const VisaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
  </svg>
)
const CruiseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-1.02C9.26 22.65 10.62 23 12 23s2.74-.35 4-1.02C17.26 22.65 18.62 23 20 23h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/>
  </svg>
)
const InsuranceIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
  </svg>
)
const PassportIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M20 3H4v2h16V3zm1 13V8c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h1v2h2v-2h8v2h2v-2h1c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
  </svg>
)
const HajjIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20zm0-8Z"/>
  </svg>
)

const services = [
  { Icon: FlightIcon, title: 'Flight Booking', desc: 'Best fares on domestic & international flights with all major airlines.' },
  { Icon: HotelIcon, title: 'Hotel Reservations', desc: 'Hand-picked hotels from budget stays to luxury resorts worldwide.' },
  { Icon: TourIcon, title: 'Tour Packages', desc: 'Fully customised packages with guided itineraries for every budget.' },
  { Icon: VisaIcon, title: 'Visa Assistance', desc: 'Hassle-free visa processing for Gulf countries and worldwide destinations.' },
  { Icon: CruiseIcon, title: 'Cruise Packages', desc: 'Luxury cruise experiences across the Mediterranean, Caribbean & more.' },
  { Icon: InsuranceIcon, title: 'Travel Insurance', desc: 'Comprehensive coverage so you travel worry-free anywhere in the world.' },
  { Icon: PassportIcon, title: 'Passport & Attestation', desc: 'Document attestation and passport services with quick turnaround.' },
  { Icon: HajjIcon, title: 'Hajj & Umrah', desc: 'Sacred journey packages with premium accommodations and full support.' },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="text-center">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">
            Complete <span style={{ color: 'var(--orange)' }}>Travel Solutions</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From flights and hotels to visas and Hajj — we handle every aspect of your travel journey with expertise and care.
          </p>
        </div>
        <div className="services__grid">
          {services.map(({ Icon, title, desc }) => (
            <div className="service-card" key={title}>
              <div className="service-icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
