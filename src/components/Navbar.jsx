import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Flights', href: '/#search' },
  { label: 'Hotels', href: '/#search' },
  { label: 'Tour Packages', href: '/#packages' },
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Visa Services', href: '/#visa' },
  { label: 'Cruises', href: '/#services' },
  { label: 'Hajj & Umrah', href: '/hajj-umrah', isRoute: true },
]

export default function Navbar({ onEnquire }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar__inner">
          <Link to="/" aria-label="Dreamway Key Home">
            <img src="/logo.png" alt="Dreamway Key Travel and Tourism" className="navbar__logo" />
          </Link>
          <div className="navbar__links">
            {links.map(l =>
              l.isRoute ? (
                <Link
                  key={l.label}
                  to={l.href}
                  style={location.pathname === l.href ? { color: 'var(--orange)', background: 'var(--orange-light)' } : {}}
                >
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.href}>{l.label}</a>
              )
            )}
          </div>
          <div className="navbar__right">
            <button className="btn-orange" onClick={() => onEnquire()}>
              Enquire Now
            </button>
            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}} />
              <span style={menuOpen ? { opacity: 0 } : {}} />
              <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}} />
            </button>
          </div>
        </div>
      </nav>
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        {links.map(l =>
          l.isRoute ? (
            <Link key={l.label} to={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ) : (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          )
        )}
        <button className="btn-orange" onClick={() => { onEnquire(); setMenuOpen(false) }}>
          Enquire Now
        </button>
      </div>
    </>
  )
}
