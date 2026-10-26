/**
 * Statistic display used in the home stats band and page sections.
 */
export default function StatCard({ value, label, icon }) {
  return (
    <div className="stat-card" style={{ textAlign: 'center', padding: '0 16px' }}>
      {icon && (
        <div style={{ fontSize: '1.5rem', marginBottom: 8 }} aria-hidden="true">
          {icon}
        </div>
      )}
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.1rem',
          fontWeight: 700,
          color: 'var(--ink-900)',
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: '0.88rem', color: 'var(--ink-500)', marginTop: 6 }}>{label}</div>
    </div>
  )
}
