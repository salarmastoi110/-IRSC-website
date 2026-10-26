import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="newsletter reveal">
          <div>
            <h2>The IRSC Dispatch</h2>
            <p>
              Monthly digest of new member research, open grants, upcoming events, and one
              “idea worth stealing” from our working groups. 22,000 scholars read it — no spam,
              ever.
            </p>
          </div>

          {submitted ? (
            <p className="newsletter__success" role="status">
              ✓ You’re on the list! Check your inbox to confirm {email}.
            </p>
          ) : (
            <div>
              <form className="newsletter__form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="your.name@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                  required
                />
                <button type="submit" className="btn btn--primary">
                  Subscribe
                </button>
              </form>
              <p className="newsletter__note">Free · Unsubscribe anytime · We never share your address</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
