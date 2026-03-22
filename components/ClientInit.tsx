'use client'

import { useEffect } from 'react'
import { usePostHog } from 'posthog-js/react'

export function ClientInit() {
  const posthog = usePostHog()

  useEffect(() => {
    // Nav scroll effect
    const nav = document.getElementById('nav')
    if (nav) {
      const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40)
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll() // run once on mount
    }

    // Scroll reveal via IntersectionObserver
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => observer.observe(el))

    // PostHog: hero CTA
    const heroCta = document.querySelector<HTMLElement>('.hero-ctas .btn-primary')
    const heroHandler = () => posthog?.capture('download_clicked', { platform: 'hero_cta' })
    heroCta?.addEventListener('click', heroHandler)

    // Sticky scroll: lock section, advance through steps, then release
    const track = document.querySelector<HTMLElement>('.preview-track')
    const section = document.querySelector<HTMLElement>('.preview-section')
    const stickyEl = document.querySelector<HTMLElement>('.preview-sticky')
    const cards = document.querySelectorAll<HTMLElement>('.mock-card')

    const onStickyScroll = () => {
      if (!track || !section || !stickyEl || cards.length === 0) return

      const rect = section.getBoundingClientRect()
      const stickyH = stickyEl.offsetHeight
      const scrollableDistance = section.offsetHeight - stickyH

      if (scrollableDistance <= 0) return

      // How far we've scrolled into the section (0 at top, scrollableDistance at bottom)
      const scrolled = Math.max(0, -rect.top)
      const progress = Math.min(1, scrolled / scrollableDistance)

      // Scroll track horizontally
      const maxScroll = track.scrollWidth - track.clientWidth
      if (maxScroll > 0) {
        track.style.scrollBehavior = 'auto'
        track.scrollLeft = progress * maxScroll
      }

      // Highlight active card
      const stepIndex = Math.min(cards.length - 1, Math.floor(progress * cards.length))
      cards.forEach((card, i) => {
        card.classList.toggle('active', i === stepIndex)
      })
    }

    window.addEventListener('scroll', onStickyScroll, { passive: true })
    // Run once on mount
    onStickyScroll()

    return () => {
      window.removeEventListener('scroll', onStickyScroll)
      observer.disconnect()
      heroCta?.removeEventListener('click', heroHandler)
    }
  }, [posthog])

  return null
}
