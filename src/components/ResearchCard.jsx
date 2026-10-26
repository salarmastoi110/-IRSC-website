const domainBadge = {
  'Life Sciences': 'badge--teal',
  Technology: 'badge--violet',
  Climate: 'badge--gold',
  'Social Sciences': 'badge--rose',
  'Physical Sciences': 'badge--navy',
}

export default function ResearchCard({ project }) {
  const { title, domain, lead, partners, progress, status, summary } = project

  return (
    <article className="card card--hover research-card reveal">
      <div className="research-card__banner" aria-hidden="true" />
      <span className={`badge ${domainBadge[domain] || 'badge--navy'}`}>{domain}</span>
      <h3>{title}</h3>
      <p>{summary}</p>

      <div>
        <div className="progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="research-card__foot">
        <span>👤 {lead}</span>
        <span>
          {partners} partners · {status}
        </span>
      </div>
    </article>
  )
}
