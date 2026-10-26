import { journalAbbrev } from '../data/publications.js'

export default function PublicationCard({ publication }) {
  const { title, authors, journal, year, type, badge, doi, citations } = publication

  return (
    <article className="card card--hover publication-card reveal">
      <span className="publication-card__journal" aria-hidden="true">
        {journalAbbrev(journal)}
      </span>
      <div>
        <span className={`badge badge--${badge}`}>{type}</span>
        <h3 style={{ marginTop: 10 }}>{title}</h3>
        <p className="publication-card__meta">
          {authors} — <em>{journal}</em>, {year}
        </p>
        <p className="small text-muted" style={{ marginBottom: 10 }}>DOI: {doi}</p>
        <span className="small" style={{ fontWeight: 600, color: 'var(--ink-700)' }}>
          ⭐ {citations} citations
        </span>
      </div>
    </article>
  )
}
