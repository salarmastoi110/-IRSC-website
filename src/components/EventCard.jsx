export default function EventCard({ event }) {
  const { title, date, fullDate, location, format, type, badge, summary } = event

  return (
    <article className="card card--hover event-card reveal">
      <div className="event-card__date">
        <span className="month">{date.month}</span>
        <span className="day">{date.day}</span>
      </div>
      <div>
        <span className={`badge badge--${badge}`}>{type}</span>
        <h3 style={{ marginTop: 10 }}>{title}</h3>
        <p>{summary}</p>
        <div className="event-card__meta">
          <span>🗓 {fullDate}</span>
          <span>📍 {location}</span>
          <span>🎥 {format}</span>
        </div>
      </div>
    </article>
  )
}
