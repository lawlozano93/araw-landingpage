// Server Component
export function DownloadSection() {
  return (
    <section id="download" className="download-section">
      <div className="download-inner">
        <p className="download-label reveal">Get started</p>
        <h2 className="download-heading reveal">Download Araw</h2>
        <p className="download-sub reveal">Free. Always will be.</p>

        <div className="download-cta reveal">
          <a
            href="https://github.com/lawlozano93/araw/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download from GitHub <span className="arrow">→</span>
          </a>
          <p className="download-platforms">
            Available for macOS (Apple Silicon &amp; Intel) and Windows.
          </p>
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
