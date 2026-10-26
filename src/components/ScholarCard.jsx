export default function ScholarCard({ scholar }) {
  const { name, role, institution, country, initials, avatarStyle, bio, tags, publications, citations } =
    scholar

  return (
    <article className="card card--hover scholar-card reveal">
      <div className="scholar-card__top">
        <span className={`scholar-card__avatar${avatarStyle === 'gold' ? ' scholar-card__avatar--gold' : ''}`}>
          {initials}
        </span>
        <div>
          <h3>{name}</h3>
          <p className="scholar-card__role">{role}</p>
        </div>
      </div>

      <p className="scholar-card__bio">{bio}</p>

      <div className="scholar-card__tags">
        {tags.map((tag) => (
          <span key={tag} className="badge badge--navy">
            {tag}
          </span>
        ))}
      </div>

      <div className="scholar-card__meta">
        <span>
          🏛 {institution} · {country}
        </span>
        <span title="Publications / citations">
          📄 {publications} · ⭐ {citations}
        </span>
      </div>
    </article>
  )
}
