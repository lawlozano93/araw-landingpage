// Server Component
export function Hero() {
  return (
    <section className="hero">
      <svg
        className="hero-rings"
        width="700"
        height="700"
        viewBox="-350 -350 700 700"
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
        }}
      >
        <circle cx="0" cy="0" />
        <circle cx="0" cy="0" />
        <circle cx="0" cy="0" />
        <circle cx="0" cy="0" />
      </svg>

      <p className="hero-kicker">
        Filipino · <em>ah·rao</em> · n.
      </p>
      <div className="hero-sun">☀️</div>
      <h1 className="hero-title">Araw</h1>
      <p className="hero-tagline">Start your day with intention.</p>
      <p className="hero-subline">
        <span>No accounts</span>
        <span>No cloud</span>
        <span>Just you</span>
      </p>
      <div className="hero-ctas">
        <a href="#download" className="btn-primary">
          Download free <span className="arrow">→</span>
        </a>
        <a
          href="https://github.com/lawlozano93/araw"
          className="btn-ghost"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source ↗
        </a>
      </div>
    </section>
  )
}
