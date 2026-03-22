// Server Component — CSS-only mockups matching the real Araw app UI

const screens = [
  {
    step: 1,
    label: 'Goals',
    content: (
      <div className="mock-reading">
        <p className="mock-reading-text">
          Build a daily morning ritual that keeps me grounded.
          {'\n\n'}
          Ship one meaningful project this quarter.
          {'\n\n'}
          Exercise 3× per week — no excuses.
          {'\n\n'}
          Read 20 pages every day.
        </p>
        <div className="mock-btn-wrap">
          <span className="mock-done-btn">Done Reading</span>
        </div>
      </div>
    ),
  },
  {
    step: 2,
    label: 'Affirmations',
    content: (
      <div className="mock-reading">
        <p className="mock-reading-text centered">
          I am capable of creating something that matters.
          {'\n\n'}
          I trust the process, even when progress feels slow.
          {'\n\n'}
          Today, I choose focus over distraction.
        </p>
        <div className="mock-btn-wrap">
          <span className="mock-done-btn">Done Reading</span>
        </div>
      </div>
    ),
  },
  {
    step: 3,
    label: 'Visualize',
    content: (
      <div className="mock-reading">
        <p className="mock-reading-text centered">
          Close your eyes. See the day going exactly as you intended.
          {'\n\n'}
          What does it look like when you finish the one thing that matters most?
        </p>
        <div className="mock-btn-wrap">
          <span className="mock-done-btn">Done Reading</span>
        </div>
      </div>
    ),
  },
  {
    step: 4,
    label: 'Freewrite',
    content: (
      <div className="mock-stream">
        <div className="mock-textarea">
          <span className="mock-textarea-content">
            Feeling a bit scattered this morning but the coffee is helping. I keep thinking about
            the landing page — it&apos;s almost there. Need to remember to call back about...
          </span>
          <span className="mock-caret" />
        </div>
        <div className="mock-btn-wrap">
          <span className="mock-timer">5:00</span>
          <span className="mock-done-btn">Continue</span>
        </div>
      </div>
    ),
  },
  {
    step: 5,
    label: 'One Action',
    content: (
      <div className="mock-answer">
        <p className="mock-question">
          What is the ONE most important thing I must do today to move closer to what I want?
        </p>
        <div className="mock-answer-input">
          Finish and ship the Araw landing page.
          <span className="mock-caret" />
        </div>
        <div className="mock-btn-wrap">
          <span className="mock-done-btn">Complete Session</span>
        </div>
      </div>
    ),
  },
]

function MockWindow({
  screen,
  index,
}: {
  screen: (typeof screens)[number]
  index: number
}) {
  return (
    <div className="mock-window reveal" style={{ ['--i' as string]: index }}>
      {/* Title bar */}
      <div className="mock-titlebar">
        <div className="mock-traffic">
          <span className="mock-tl" style={{ background: '#ff5f57' }} />
          <span className="mock-tl" style={{ background: '#ffbd2e' }} />
          <span className="mock-tl" style={{ background: '#28c940' }} />
        </div>
      </div>

      {/* App content */}
      <div className="mock-app-body">
        {screen.content}
      </div>

      {/* Progress dots */}
      <div className="mock-progress">
        {[1, 2, 3, 4, 5].map((s) => (
          <span
            key={s}
            className={`mock-dot${s <= screen.step ? ' done' : ''}${s === screen.step ? ' current' : ''}`}
          />
        ))}
      </div>

      {/* Step label */}
      <div className="mock-step-label">
        Step {screen.step} · {screen.label}
      </div>
    </div>
  )
}

export function AppPreviewSection() {
  return (
    <section className="preview-section">
      <div className="preview-header reveal">
        <p className="preview-label">A peek inside</p>
        <h2 className="preview-heading">
          Five minutes.
          <br />
          This is what they look like.
        </h2>
        <p className="preview-sub">
          Each morning, Araw walks you through five focused steps — one screen at a time.
        </p>
      </div>

      <div className="preview-track-wrap">
        <div className="preview-fade-left" />
        <div className="preview-track reveal-stagger">
          {screens.map((s, i) => (
            <MockWindow key={s.step} screen={s} index={i} />
          ))}
        </div>
        <div className="preview-fade-right" />
      </div>
    </section>
  )
}
