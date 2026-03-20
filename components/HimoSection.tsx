// Server Component
const stack = [
  'React 19 + TypeScript',
  'Tauri v2 (Rust)',
  'Local filesystem',
  'Plain Markdown',
  'Amatic SC + Lora',
  'MIT License',
]

export function HimoSection() {
  return (
    <section className="himo-section">
      <div className="himo-text reveal">
        <p className="himo-label">Part of himo.site</p>
        <h2 className="himo-heading">
          Built things.
          <br />
          Shipped small.
        </h2>
        <p className="himo-body">
          Araw is one app under Himo — a growing collection of focused tools built for
          intentional living and working. No platform lock-in. No growth-hacking. Just
          software that respects your time.
        </p>
        <a
          href="https://himo.site"
          className="himo-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore himo.site →
        </a>
      </div>

      <div className="himo-stack reveal" style={{ transitionDelay: '0.15s' }}>
        {stack.map((item) => (
          <div key={item} className="stack-pill">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
