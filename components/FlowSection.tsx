// Server Component
const steps = [
  {
    num: '01',
    icon: '🎯',
    name: 'Review Goals',
    desc: 'Stay aligned with what matters. See your goals. Every. Single. Morning.',
  },
  {
    num: '02',
    icon: '🧠',
    name: 'Recite Affirmations',
    desc: 'Prime your mindset before the world gets loud.',
  },
  {
    num: '03',
    icon: '👁',
    name: 'Visualize',
    desc: 'Build the mental image of success before you start building the real thing.',
  },
  {
    num: '04',
    icon: '✍️',
    name: 'Freewrite',
    desc: 'Clear the noise. Empty the inbox in your head.',
  },
  {
    num: '05',
    icon: '💡',
    name: 'One Action',
    desc: "Define the single most important thing you'll do today. Then close the app and go do it.",
  },
]

export function FlowSection() {
  return (
    <section id="how-it-works" className="flow-section">
      <div className="flow-inner">
        <p className="flow-label reveal">The morning flow</p>
        <h2 className="flow-heading reveal">
          Five steps.
          <br />
          Five minutes.
        </h2>
        <p className="flow-sub reveal">
          A guided ritual that takes you from asleep to intentional — every morning.
        </p>

        <div className="flow-steps reveal-stagger">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="flow-step reveal"
              style={{ ['--i' as string]: i }}
            >
              <div className="step-num">{step.num}</div>
              <span className="step-icon">{step.icon}</span>
              <div className="step-name">{step.name}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
