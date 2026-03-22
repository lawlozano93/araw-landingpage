// Server Component — combined morning flow + app preview

const screens = [
  {
    step: 1,
    num: '01',
    name: 'Review Goals',
    desc: 'Stay aligned with what matters. See your goals. Every. Single. Morning.',
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
    num: '02',
    name: 'Recite Affirmations',
    desc: 'Prime your mindset before the world gets loud.',
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
    num: '03',
    name: 'Visualize',
    desc: 'Build the mental image of success before you start building the real thing.',
    content: (
      <div className="mock-reading">
        <p className="mock-reading-text centered">
          I wake up at 6am. I exercise before the world gets loud.
          {'\n\n'}
          I sit down focused, ship the work that matters, and close my laptop by 5.
          {'\n\n'}
          I am present with the people I love. I sleep deeply.
        </p>
        <div className="mock-btn-wrap">
          <span className="mock-done-btn">Done Reading</span>
        </div>
      </div>
    ),
  },
  {
    step: 4,
    num: '04',
    name: 'Freewrite',
    desc: 'Clear the noise. Empty the inbox in your head.',
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
    num: '05',
    name: 'One Action',
    desc: "Define the single most important thing you'll do today. Then close the app and go do it.",
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
    <div className="mock-card reveal" style={{ ['--i' as string]: index }}>
      <div className="mock-window">
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
      </div>

      {/* Step info below window */}
      <div className="mock-info">
        <span className="mock-info-num">{screen.num}</span>
        <span className="mock-info-name">{screen.name}</span>
        <p className="mock-info-desc">{screen.desc}</p>
      </div>
    </div>
  )
}

export function AppPreviewSection() {
  return (
    <section id="how-it-works" className="preview-section">
      <div className="preview-sticky">
        <div className="preview-header reveal">
          <p className="preview-label">The morning flow</p>
          <h2 className="preview-heading">
            Five steps.
            <br />
            Five minutes.
          </h2>
          <p className="preview-sub">
            A guided ritual that takes you from asleep to intentional — every morning.
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
      </div>
    </section>
  )
}
