// Server Component
export function WhatSection() {
  return (
    <section id="what">
      <div className="what-section">
        <div className="reveal">
          <p className="what-label">The name</p>
          <h2 className="what-heading">Sun. Day. Both.</h2>
          <p className="what-body">
            In Filipino, <em>araw</em> means both the sun and the day itself — a reminder that
            every morning is a new light.
            <br />
            <br />
            Araw is a free, open-source, local-first journaling app. It guides you through a
            short morning ritual so you begin each day clear, grounded, and focused on what
            actually matters.
          </p>
        </div>

        <div className="etymology-card reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="etymology-word">araw</div>
          <div className="etymology-roman">/ ah·rao / · Filipino</div>
          <ul className="etymology-defs">
            <li>
              <span className="num">1.</span> The sun. The light that begins the day.
            </li>
            <li>
              <span className="num">2.</span> The day itself. A unit of intention.
            </li>
            <li>
              <span className="num">3.</span> (colloquial) A fresh start.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
