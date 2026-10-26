import { useState } from 'react'

const contactInfo = [
  {
    icon: '✉️',
    title: 'General enquiries',
    lines: ['hello@irsc.community', 'Replies within 2 working days'],
  },
  {
    icon: '🧑‍🎓',
    title: 'Membership desk',
    lines: ['join@irsc.community', 'Applications reviewed monthly'],
  },
  {
    icon: '🏛',
    title: 'Secretariat',
    lines: ['IRSC House, 14 Bishop Lushington Road', 'Nairobi, Kenya · +254 20 555 0134'],
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: 'General enquiry', message: '' })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact &amp; Membership</h1>
          <p>
            Questions about joining, collaborating, or attending the Global Assembly? Write to
            us — a real scholar (or staff member) reads every message.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            {contactInfo.map((item) => (
              <div key={item.title} className="contact-info__item">
                <span className="contact-info__icon">{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            <hr className="divider" />

            <p className="small text-muted">
              Already a member? Use the member portal for node-specific requests, or tag
              <strong> #IRSC</strong> on your preferred academic network.
            </p>
          </div>

          <form className="card contact-form reveal" onSubmit={handleSubmit}>
            {sent && (
              <div className="form-success" role="status">
                ✓ Thank you, {form.name || 'friend'}! Your message is on its way to the secretariat.
              </div>
            )}

            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" value={form.name} onChange={update('name')} placeholder="Dr. Jane Doe" required />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={update('email')}
                placeholder="jane@university.edu"
                required
              />
            </div>

            <div className="field field--full">
              <label htmlFor="subject">Subject</label>
              <select id="subject" value={form.subject} onChange={update('subject')}>
                <option>General enquiry</option>
                <option>Membership application</option>
                <option>Propose a collaboration</option>
                <option>Press &amp; media</option>
              </select>
            </div>

            <div className="field field--full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                value={form.message}
                onChange={update('message')}
                placeholder="Tell us about your work and what you're looking for..."
                required
              />
            </div>

            <div className="field--full">
              <button type="submit" className="btn btn--dark">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
