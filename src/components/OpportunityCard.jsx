const typeClass = {
  Grant: 'opp-card--grant',
  Fellowship: 'opp-card--fellowship',
  'Call for Papers': 'opp-card--call',
  Award: '',
}

const typeBadge = {
  Grant: 'badge--violet',
  Fellowship: 'badge--teal',
  'Call for Papers': 'badge--rose',
  Award: 'badge--gold',
}

export default function OpportunityCard({ opportunity }) {
  const { title, org, type, deadline, funding, location, summary } = opportunity

  return (
    <article className={`card card--hover opp-card reveal ${typeClass[type] || ''}`}>
      <div className="opp-card__head">
        <div>
          <h3>{title}</h3>
          <p className="opp-card__org">{org}</p>
        </div>
        <span className={`badge ${typeBadge[type] || 'badge--navy'}`}>{type}</span>
      </div>

      <p>{summary}</p>

      <div className="opp-card__details">
        <span>
          ⏳ <strong>Deadline:</strong> {deadline}
        </span>
        <span>
          💵 <strong>Funding:</strong> {funding}
        </span>
        <span>
          📍 {location}
        </span>
      </div>
    </article>
  )
}
