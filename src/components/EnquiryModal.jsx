import { useState } from 'react'

const SendIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
  </svg>
)

export default function EnquiryModal({ isOpen, onClose, initialData }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    destination: initialData?.destination || initialData?.package || '',
    date: '',
    duration: '5-6 Nights',
    adults: '2',
    children: '0',
    infants: '0',
    hotelCategory: 'Deluxe',
    mealPlan: 'Breakfast',
    addons: [],
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const toggleAddon = (a) => {
    set('addons', form.addons.includes(a)
      ? form.addons.filter(x => x !== a)
      : [...form.addons, a]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal__header">
          <div>
            <h2>Plan Your Dream Trip</h2>
            <p>Fill in the details and our experts will get back within 2 hours.</p>
          </div>
          <button className="modal__close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div style={{ padding: '60px 32px', textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--orange-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <svg viewBox="0 0 24 24" fill="var(--orange)" width="30" height="30">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--gray-800)', marginBottom: 12 }}>
              Enquiry Received!
            </h3>
            <p style={{ color: 'var(--gray-500)', marginBottom: 28 }}>
              Thank you, <strong>{form.name}</strong>! Our travel expert will contact you at <strong>{form.phone}</strong> within 2 hours to craft your perfect journey.
            </p>
            <button className="btn-orange" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="modal__body">
              <div className="modal__grid">
                <div className="modal__section-title">Personal Details</div>
                <div className="modal__field">
                  <label>Full Name *</label>
                  <input required placeholder="Your full name" value={form.name} onChange={e => set('name', e.target.value)} />
                </div>
                <div className="modal__field">
                  <label>Phone Number *</label>
                  <input required placeholder="+971 XX XXX XXXX" value={form.phone} onChange={e => set('phone', e.target.value)} />
                </div>
                <div className="modal__field">
                  <label>Email Address</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
                </div>
                <div className="modal__field">
                  <label>Destination / Package</label>
                  <input placeholder="Where do you want to go?" value={form.destination} onChange={e => set('destination', e.target.value)} />
                </div>

                <div className="modal__section-title">Trip Details</div>
                <div className="modal__field">
                  <label>Departure Date</label>
                  <input type="date" value={form.date} onChange={e => set('date', e.target.value)} />
                </div>
                <div className="modal__field">
                  <label>Duration</label>
                  <select value={form.duration} onChange={e => set('duration', e.target.value)}>
                    {['2-3 Nights','4-5 Nights','5-6 Nights','7-9 Nights','10-12 Nights','13-15 Nights','15+ Nights'].map(d =>
                      <option key={d}>{d}</option>
                    )}
                  </select>
                </div>
              </div>

              <div className="modal__grid modal__grid--3">
                <div className="modal__section-title">Travelers</div>
                <div className="modal__field">
                  <label>Adults</label>
                  <select value={form.adults} onChange={e => set('adults', e.target.value)}>
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n}>{n}</option>)}
                  </select>
                </div>
                <div className="modal__field">
                  <label>Children (2–11)</label>
                  <select value={form.children} onChange={e => set('children', e.target.value)}>
                    {[0,1,2,3,4,5].map(n => <option key={n}>{n}</option>)}
                  </select>
                </div>
                <div className="modal__field">
                  <label>Infants (&lt;2)</label>
                  <select value={form.infants} onChange={e => set('infants', e.target.value)}>
                    {[0,1,2,3].map(n => <option key={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              <div className="modal__grid">
                <div className="modal__section-title">Preferences</div>
                <div className="modal__field">
                  <label>Hotel Category</label>
                  <select value={form.hotelCategory} onChange={e => set('hotelCategory', e.target.value)}>
                    {['Standard (3-Star)','Deluxe (4-Star)','Premium (5-Star)','Luxury / Resort'].map(h => <option key={h}>{h}</option>)}
                  </select>
                </div>
                <div className="modal__field">
                  <label>Meal Plan</label>
                  <select value={form.mealPlan} onChange={e => set('mealPlan', e.target.value)}>
                    {['No Meals','Breakfast Only','Half Board','Full Board','All Inclusive'].map(m => <option key={m}>{m}</option>)}
                  </select>
                </div>
                <div className="modal__section-title">Add-On Services</div>
                <div className="modal__addons">
                  {['Flight Tickets','Visa Assistance','Travel Insurance','Airport Transfers','Guided Tours','Honeymoon Special'].map(a => (
                    <label className="modal__addon" key={a}>
                      <input
                        type="checkbox"
                        checked={form.addons.includes(a)}
                        onChange={() => toggleAddon(a)}
                      />
                      {a}
                    </label>
                  ))}
                </div>
                <div className="modal__field full">
                  <label>Special Requests / Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Any specific requirements, dietary needs, accessibility needs, or special occasions..."
                    value={form.notes}
                    onChange={e => set('notes', e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="modal__footer">
              <button type="button" className="modal__cancel" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn-orange">
                Submit Enquiry
                <SendIcon />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
