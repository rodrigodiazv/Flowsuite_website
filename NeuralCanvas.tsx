'use client'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number; z: number
  vx: number; vy: number; vz: number
  radius: number; opacity: number
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let W = canvas.offsetWidth
    let H = canvas.offsetHeight
    canvas.width = W
    canvas.height = H

    const N = 90
    const MAX_DIST = 160
    const particles: Particle[] = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      z: Math.random() * 2 + 0.3,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      vz: (Math.random() - 0.5) * 0.01,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.2,
    }))

    let mouseX = W / 2, mouseY = H / 2
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    })

    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W
      canvas.height = H
    }
    window.addEventListener('resize', resize)

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, W, H)

      // Update
      particles.forEach(p => {
        p.x += p.vx * p.z
        p.y += p.vy * p.z
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        // Mouse repulsion
        const dx = p.x - mouseX, dy = p.y - mouseY
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 120) {
          p.vx += (dx / d) * 0.08
          p.vy += (dy / d) * 0.08
        }
        // Dampen
        p.vx *= 0.998
        p.vy *= 0.998
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.45
            const midZ = (a.z + b.z) / 2
            // Color shifts teal→purple based on position
            const hue = (a.x / W * 60) // 180 teal, 240 purple range
            const r = Math.floor(midZ * 0 + (1 - midZ) * 139)
            const g = Math.floor(midZ * 229 + (1 - midZ) * 92)
            const bl = Math.floor(midZ * 200 + (1 - midZ) * 246)
            ctx.strokeStyle = `rgba(${r},${g},${bl},${alpha})`
            ctx.lineWidth = midZ * 1.2
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      particles.forEach(p => {
        const isDeep = p.z > 1.5
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * p.z, 0, Math.PI * 2)
        if (isDeep) {
          ctx.fillStyle = `rgba(0, 229, 200, ${p.opacity * p.z})`
          // Glow
          ctx.shadowColor = '#00E5C8'
          ctx.shadowBlur = 8 * p.z
        } else {
          ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`
          ctx.shadowColor = '#8B5CF6'
          ctx.shadowBlur = 6
        }
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-70"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
