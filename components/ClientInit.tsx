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

    return () => {
      window.removeEventListener('scroll', () => {})
      observer.disconnect()
      heroCta?.removeEventListener('click', heroHandler)
    }
  }, [posthog])

  return null
}
