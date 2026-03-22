// Server Component

const screens = [
  {
    step: '01',
    label: 'Goals',
    icon: '🎯',
    title: 'Review your goals',
    content: (
      <div className="win-goals">
        <p className="win-prompt">What are you working towards?</p>
        <ul className="win-goal-list">
          {[
            'Build a daily morning ritual',
            'Ship one meaningful project this quarter',
            'Exercise 3× per week',
            'Read 20 pages every day',
          ].map((g) => (
            <li key={g} className="win-goal-item">
              <span className="win-goal-dot" />
              {g}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    step: '02',
    label: 'Affirmations',
    icon: '🧠',
    title: 'Prime your mindset',
    content: (
      <div className="win-affirmation">
        <span className="win-quote-mark">"</span>
        <p className="win-quote-text">
          I am capable of creating
          <br />
          something that matters.
        </p>
        <p className="win-quote-attr">— your affirmation</p>
        <div className="win-affirmation-dots">
          <span className="aff-dot active" />
          <span className="aff-dot" />
          <span className="aff-dot" />
        </div>
      </div>
    ),
  },
  {
    step: '03',
    label: 'Visualize',
    icon: '👁',
    title: 'See it before it happens',
    content: (
      <div className="win-visualize">
        <p className="win-prompt">
          Close your eyes. Imagine the day going exactly as you intended...
        </p>
        <div className="win-textarea-mock">
          <span className="win-textarea-text">
            I see myself calm and focused, finishing the work early.
            The afternoon is clear. I feel proud of what I shipped...
          </span>
          <span className="win-cursor" />
        </div>
      </div>
    ),
  },
  {
    step: '04',
    label: 'Freewrite',
    icon: '✍️',
    title: 'Empty your head',
    content: (
      <div className="win-freewrite">
        <p className="win-prompt">Write whatever comes to mind. No judgment.</p>
        <div className="win-textarea-mock freewrite">
          <span className="win-textarea-text">
            Feeling a bit scattered this morning but the coffee is helping.
            I keep thinking about the landing page — it&apos;s almost there.
            Need to remember to call back...
          </span>
          <span className="win-cursor" />
        </div>
      </div>
    ),
  },
  {
    step: '05',
    label: 'One Action',
    icon: '💡',
    title: 'Define the one thing',
    content: (
      <div className="win-oneaction">
        <p className="win-prompt">What is the single most important thing you&apos;ll do today?</p>
        <div className="win-action-input">
          Finish and publish the Araw landing page.
          <span className="win-cursor" />
        </div>
        <div className="win-action-btn">Close and go do it →</div>
      </div>
    ),
  },
]

function AppWindow({
  screen,
  index,
}: {
  screen: (typeof screens)[number]
  index: number
}) {
  return (
    <div className="app-window reveal" style={{ ['--i' as string]: index }}>
      {/* macOS chrome */}
      <div className="window-chrome">
        <div className="traffic-lights">
          <span className="tl tl-red" />
          <span className="tl tl-yellow" />
          <span className="tl tl-green" />
        </div>
        <span className="window-title-bar">Araw — step {screen.step} of 5</span>
      </div>

      {/* Window body */}
      <div className="window-body">
        {/* Sidebar */}
        <div className="win-sidebar">
          {screens.map((s) => (
            <div
              key={s.step}
              className={`win-sidebar-step${s.step === screen.step ? ' active' : ''}`}
            >
              <span className="win-step-icon">{s.icon}</span>
              <span className="win-step-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="win-content">
          <p className="win-content-title">{screen.title}</p>
          {screen.content}
        </div>
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
            <AppWindow key={s.step} screen={s} index={i} />
          ))}
        </div>
        <div className="preview-fade-right" />
      </div>
    </section>
  )
}
