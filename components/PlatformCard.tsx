'use client'

import { usePostHog } from 'posthog-js/react'

interface PlatformCardProps {
  os: string
  name: string
  ext: string
  platform: string
  index: number
}

export function PlatformCard({ os, name, ext, platform, index }: PlatformCardProps) {
  const posthog = usePostHog()

  const handleClick = () => {
    posthog?.capture('download_clicked', { platform })
  }

  return (
    <a
      href="https://github.com/lawlozano93/araw/releases/latest"
      className="platform-card reveal"
      style={{ ['--i' as string]: index }}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <div className="platform-os">{os}</div>
      <div className="platform-name">{name}</div>
      <div className="platform-ext">
        <span>{ext}</span>
        <span className="dl-arrow">↓</span>
      </div>
    </a>
  )
}
