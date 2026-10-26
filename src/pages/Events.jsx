import EventCard from '../components/EventCard.jsx'
import Newsletter from '../components/Newsletter.jsx'
import { events } from '../data/opportunities.js'

export default function Events() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Events &amp; Convenings</h1>
          <p>
            From the Global Assembly to weekly method clinics — the community is always meeting.
            Virtual attendance is free for members, always.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
