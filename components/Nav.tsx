// Server Component — scroll class toggling handled by ClientInit
export function Nav() {
  return (
    <nav id="nav">
      <a className="nav-logo" href="#">
        <span className="sun-dot" />
        Araw
      </a>
      <ul className="nav-links">
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#download" className="nav-dl">Download free ↓</a></li>
      </ul>
    </nav>
  )
}
