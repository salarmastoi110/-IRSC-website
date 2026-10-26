/**
 * Consistent section header: eyebrow label, title, optional description.
 */
export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`heading reveal${center ? ' heading--center' : ''}`}>
      {eyebrow && <span className="heading__eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
