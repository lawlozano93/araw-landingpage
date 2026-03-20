// Server Component
const links = [
  { label: 'GitHub', href: 'https://github.com/lawlozano93/araw' },
  { label: 'Issues', href: 'https://github.com/lawlozano93/araw/issues' },
  {
    label: 'Architecture',
    href: 'https://github.com/lawlozano93/araw/blob/main/ARCHITECTURE.md',
  },
  { label: 'himo.site', href: 'https://himo.site' },
]

export function Footer() {
  return (
    <footer>
      <a className="footer-logo" href="#">
        ☀️ Araw
      </a>
      <ul className="footer-links">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="footer-copy">MIT © Lawrrence Lozano · 2026</p>
    </footer>
  )
}
