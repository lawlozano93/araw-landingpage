// Server Component
const features = [
  {
    icon: '📂',
    name: '100% local',
    desc: (
      <>
        All your data lives on your machine as plain Markdown files in{' '}
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
          ~/Documents/Araw
        </code>
        . You own it.
      </>
    ),
  },
  {
    icon: '🔄',
    name: 'Obsidian sync',
    desc: 'Point your vault to Google Drive, Dropbox, or OneDrive to sync across devices. Your way.',
  },
  {
    icon: '🌙',
    name: 'Dark mode',
    desc: 'Automatic light/dark theme. Gentle on the eyes before the coffee kicks in.',
  },
  {
    icon: '⌨️',
    name: 'Keyboard-first',
    desc: 'Complete your entire morning session without touching the mouse. Flow state intact.',
  },
  {
    icon: '🖥️',
    name: 'Tray app',
    desc: 'Lives quietly in your menu bar. One click to open. Zero friction to start.',
  },
  {
    icon: '🆓',
    name: 'Free forever',
    desc: 'No subscriptions. No accounts. No upsells. MIT licensed. Open source.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <p className="features-label reveal">Why Araw</p>
      <h2 className="features-heading reveal">
        No BS.
        <br />
        Just intention.
      </h2>

      <div className="features-grid reveal-stagger">
        {features.map((f, i) => (
          <div
            key={f.name}
            className="feature-cell reveal"
            style={{ ['--i' as string]: i }}
          >
            <div className="feature-icon-wrap">{f.icon}</div>
            <div className="feature-name">{f.name}</div>
            <div className="feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
