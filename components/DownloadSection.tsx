// Server Component — PlatformCard is a Client Component for click tracking
import { PlatformCard } from './PlatformCard'

const platforms = [
  { os: 'macOS', name: 'Apple Silicon', ext: '.dmg', platform: 'apple_silicon' },
  { os: 'macOS', name: 'Intel', ext: '.dmg', platform: 'intel_mac' },
  { os: 'Windows', name: '10 / 11', ext: '.msi', platform: 'windows' },
]

export function DownloadSection() {
  return (
    <section id="download" className="download-section">
      <div className="download-inner">
        <p className="download-label reveal">Get started</p>
        <h2 className="download-heading reveal">Download Araw</h2>
        <p className="download-sub reveal">Free. Always will be.</p>

        <div className="version-badge reveal">
          <span className="version-dot" />
          Latest: v0.1.6 · March 2026
        </div>

        <div className="platform-grid reveal-stagger">
          {platforms.map((p, i) => (
            <PlatformCard
              key={p.platform}
              os={p.os}
              name={p.name}
              ext={p.ext}
              platform={p.platform}
              index={i}
            />
          ))}
        </div>

        <div className="install-note reveal">
          <strong>⚠ Installation note</strong>
          Araw is unsigned — macOS will flag it as &ldquo;damaged.&rdquo; Fix it by running{' '}
          <code className="install-code">xattr -cr /Applications/Araw.app</code> in Terminal
          after moving it to Applications. On Windows, click{' '}
          <em>More info → Run anyway</em> in SmartScreen.
          <br />
          <br />
          Running into problems?{' '}
          <a
            href="https://github.com/lawlozano93/araw/issues"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--ink)', textUnderlineOffset: '3px' }}
          >
            Open a GitHub issue →
          </a>
        </div>
      </div>
    </section>
  )
}
