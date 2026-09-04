const FbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
)
const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)
const YtIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  </svg>
)
const LiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
  </svg>
)

const quickLinks = ['Flights', 'Hotels', 'Tour Packages', 'Cruises', 'Travel Insurance', 'Passport Services']
const destinations = ['Dubai', 'Thailand', 'Maldives', 'Singapore', 'Malaysia', 'Europe Packages']

const social = [
  { Icon: FbIcon, label: 'Facebook' },
  { Icon: IgIcon, label: 'Instagram' },
  { Icon: YtIcon, label: 'YouTube' },
  { Icon: LiIcon, label: 'LinkedIn' },
  { Icon: XIcon, label: 'X (Twitter)' },
]

const contactItems = [
  { Icon: PinIcon, text: 'Office 204, Travel Hub Building,\nDubai, UAE' },
  { Icon: PhoneIcon, text: '+971 4 XXX XXXX\n+971 50 XXX XXXX' },
  { Icon: MailIcon, text: 'info@dreamwaykey.com\nbookings@dreamwaykey.com' },
  { Icon: ClockIcon, text: 'Mon – Sat: 9:00 AM – 7:00 PM\nSunday: 10:00 AM – 4:00 PM' },
]

export default function Footer({ onEnquire }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <img src="/logo.png" alt="Dreamway Key" className="footer__logo" />
            <p className="footer__tagline">
              Your trusted travel partner since 2009. We craft journeys that become
              stories worth telling — from the UAE and beyond.
            </p>
            <div className="footer__social">
              {social.map(({ Icon, label }) => (
                <a key={label} href="#" className="footer__social-btn" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map(l => (
                <li key={l}><a href="#search">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="10" height="10" style={{ opacity: 0.4 }}>
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  {l}
                </a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Top Destinations</h4>
            <ul>
              {destinations.map(d => (
                <li key={d}><a href="#destinations">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="10" height="10" style={{ opacity: 0.4 }}>
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  {d}
                </a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact Us</h4>
            {contactItems.map(({ Icon, text }) => (
              <div className="footer__contact-item" key={text}>
                <div className="footer__contact-icon"><Icon /></div>
                <span style={{ whiteSpace: 'pre-line' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '28px 0 20px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <button
            onClick={() => onEnquire()}
            className="btn-orange"
            style={{ fontSize: '0.88rem' }}
          >
            Plan My Trip
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map(l => (
              <a key={l} href="#" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >{l}</a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Dreamway Key Travel and Tourism L.L.C. All rights reserved. Trade License No. XXXXXXXX
          </p>
        </div>
      </div>
    </footer>
  )
}
