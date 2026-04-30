'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  z: number
  pz: number
  size: number
  opacity: number
  color: string
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrame: number
    const STAR_COUNT = 320
    const stars: Star[] = []

    const colors = [
      '#e8eaf6', '#c5cae9', '#7eb8f7', '#a78bfa', '#c9a84c',
      '#b3bef8', '#d4e4ff'
    ]

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initStars = () => {
      stars.length = 0
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * canvas.width,
          pz: 0,
          size: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    let scrollY = 0
    const handleScroll = () => { scrollY = window.scrollY }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 5, 13, 0.18)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const cx = canvas.width / 2
      const cy = canvas.height / 2

      for (const s of stars) {
        s.pz = s.z
        s.z -= 0.6

        if (s.z <= 0) {
          s.x = Math.random() * canvas.width - cx
          s.y = Math.random() * canvas.height - cy
          s.z = canvas.width
          s.pz = s.z
        }

        const sx = (s.x / s.z) * canvas.width + cx
        const sy = (s.y / s.z) * canvas.height + cy

        const size = Math.max(0.1, (1 - s.z / canvas.width) * s.size * 3)
        const alpha = Math.min(1, (1 - s.z / canvas.width) * s.opacity * 1.8)

        // Draw star dot
        ctx.beginPath()
        ctx.arc(sx, sy, size, 0, Math.PI * 2)
        ctx.fillStyle = s.color + Math.floor(alpha * 255).toString(16).padStart(2, '0')
        ctx.fill()
      }

      animFrame = requestAnimationFrame(draw)
    }

    resize()
    initStars()
    draw()

    window.addEventListener('resize', () => { resize(); initStars() })

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="starfield"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  )
}
