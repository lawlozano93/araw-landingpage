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

    // Auto-scroll preview track on smaller screens as user scrolls past section
    const track = document.querySelector<HTMLElement>('.preview-track')
    const section = document.querySelector<HTMLElement>('.preview-section')
    let autoScrollEnabled = true

    const onTrackInteract = () => { autoScrollEnabled = false }
    track?.addEventListener('pointerdown', onTrackInteract)
    track?.addEventListener('wheel', onTrackInteract, { passive: true })

    const onPageScroll = () => {
      if (!track || !section || !autoScrollEnabled) return
      if (window.innerWidth >= 1200) return // all visible, no need

      const rect = section.getBoundingClientRect()
      const sectionH = section.offsetHeight
      const viewH = window.innerHeight

      // Progress: 0 when section top enters viewport, 1 when section bottom leaves
      const scrollStart = rect.top + viewH * 0.3
      const scrollEnd = rect.bottom - viewH * 0.5
      const range = scrollEnd - scrollStart

      if (range <= 0) return

      const progress = Math.max(0, Math.min(1, (viewH - scrollStart) / range))
      const maxScroll = track.scrollWidth - track.clientWidth

      if (maxScroll > 0) {
        track.scrollLeft = progress * maxScroll
      }
    }

    window.addEventListener('scroll', onPageScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onPageScroll)
      track?.removeEventListener('pointerdown', onTrackInteract)
      track?.removeEventListener('wheel', onTrackInteract)
      observer.disconnect()
      heroCta?.removeEventListener('click', heroHandler)
    }
  }, [posthog])

  return null
}
