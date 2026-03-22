import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { WhatSection } from '@/components/WhatSection'
import { Divider } from '@/components/Divider'
import { AppPreviewSection } from '@/components/AppPreviewSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { DownloadSection } from '@/components/DownloadSection'
import { HimoSection } from '@/components/HimoSection'
import { Footer } from '@/components/Footer'
import { ClientInit } from '@/components/ClientInit'

export default function Home() {
  return (
    <>
      {/* ClientInit: null-render client component that attaches nav scroll,
          IntersectionObserver reveals, and PostHog hero CTA tracking */}
      <ClientInit />

      <Nav />
      <Hero />
      <WhatSection />
      <Divider />
      <AppPreviewSection />
      <FeaturesSection />
      <Divider />
      <DownloadSection />
      <HimoSection />
      <Footer />
    </>
  )
}
