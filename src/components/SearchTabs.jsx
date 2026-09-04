import { useState } from 'react'

const tabs = [
  {
    id: 'flights', label: 'Flights',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    )
  },
  {
    id: 'hotels', label: 'Hotels',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
      </svg>
    )
  },
  {
    id: 'packages', label: 'Tour Packages',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    )
  },
  {
    id: 'visa', label: 'Visa',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
      </svg>
    )
  },
]

export default function SearchTabs() {
  const [active, setActive] = useState('flights')
  const [tripType, setTripType] = useState('roundtrip')

  return (
    <section className="search-section" id="search">
      <div className="container">
        <div className="search-card">
          <div className="search-tabs">
            {tabs.map(t => (
              <button
                key={t.id}
                className={`search-tab${active === t.id ? ' active' : ''}`}
                onClick={() => setActive(t.id)}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </div>
          <div className="search-body">
            {active === 'flights' && (
              <>
                <div className="trip-type-row">
                  {['oneway', 'roundtrip', 'multicity'].map(t => (
                    <label className="radio-option" key={t}>
                      <input type="radio" name="trip" value={t} checked={tripType === t} onChange={() => setTripType(t)} />
                      {t === 'oneway' ? 'One Way' : t === 'roundtrip' ? 'Round Trip' : 'Multi City'}
                    </label>
                  ))}
                </div>
                <div className="search-form search-form--flights">
                  <div className="form-group">
                    <label>From</label>
                    <input type="text" placeholder="City or Airport" />
                  </div>
                  <div className="form-group">
                    <label>To</label>
                    <input type="text" placeholder="City or Airport" />
                  </div>
                  <div className="form-group">
                    <label>Departure</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Passengers & Class</label>
                    <select>
                      <option>1 Adult · Economy</option>
                      <option>2 Adults · Economy</option>
                      <option>1 Adult · Business</option>
                      <option>2 Adults · Business</option>
                    </select>
                  </div>
                  <button className="search-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                    Search
                  </button>
                </div>
              </>
            )}
            {active === 'hotels' && (
              <div className="search-form search-form--hotels">
                <div className="form-group">
                  <label>Destination</label>
                  <input type="text" placeholder="City, hotel or landmark" />
                </div>
                <div className="form-group">
                  <label>Check In</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Check Out</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Guests & Rooms</label>
                  <select>
                    <option>2 Guests · 1 Room</option>
                    <option>3 Guests · 1 Room</option>
                    <option>4 Guests · 2 Rooms</option>
                  </select>
                </div>
                <button className="search-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                  Search Hotels
                </button>
              </div>
            )}
            {active === 'packages' && (
              <div className="search-form search-form--packages">
                <div className="form-group">
                  <label>Destination</label>
                  <input type="text" placeholder="Where do you want to go?" />
                </div>
                <div className="form-group">
                  <label>Travel Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Duration</label>
                  <select>
                    <option>3-4 Nights</option>
                    <option>5-6 Nights</option>
                    <option>7-9 Nights</option>
                    <option>10+ Nights</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Travelers</label>
                  <select>
                    <option>2 Adults</option>
                    <option>2 Adults + 1 Child</option>
                    <option>4 Adults</option>
                    <option>Group (8+)</option>
                  </select>
                </div>
                <button className="search-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                  Find Packages
                </button>
              </div>
            )}
            {active === 'visa' && (
              <div className="search-form search-form--visa">
                <div className="form-group">
                  <label>Visa Type</label>
                  <select>
                    <option>UAE Tourist Visa</option>
                    <option>UAE Visit Visa</option>
                    <option>Worldwide Visa</option>
                    <option>Schengen Visa</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Nationality</label>
                  <input type="text" placeholder="Your country" />
                </div>
                <div className="form-group">
                  <label>Destination Country</label>
                  <input type="text" placeholder="Travelling to" />
                </div>
                <div className="form-group">
                  <label>Travel Date</label>
                  <input type="date" />
                </div>
                <button className="search-btn">
                  Check Visa
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
