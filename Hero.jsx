import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '../hooks/useMousePosition'
import styles from './Hero.module.css'

const FADE_UP = (delay = 0) => ({
  initial:   { opacity: 0, y: 30 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  const heroRef   = useRef(null)
  const canvasRef = useRef(null)
  const { normalized } = useMousePosition(heroRef)

  /* ── Particle Canvas ── */
  useEffect(() => {
    const canvas  = canvasRef.current
    if (!canvas) return
    const ctx     = canvas.getContext('2d')
    let W, H, particles = [], animId

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let mxLocal = 0, myLocal = 0
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mxLocal = e.clientX - r.left
      myLocal = e.clientY - r.top
    }
    canvas.addEventListener('mousemove', onMove)

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x  = Math.random() * W
        this.y  = Math.random() * H
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.r  = Math.random() * 2 + 0.5
        this.a  = Math.random() * 0.45 + 0.1
        this.c  = Math.random() > 0.5 ? '37,99,235' : '6,182,212'
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        const dx = mxLocal - this.x, dy = myLocal - this.y
        const dist = Math.hypot(dx, dy)
        if (dist < 150) { this.x -= (dx / dist) * 0.6; this.y -= (dy / dist) * 0.6 }
        if (this.x < 0 || this.x > W) this.vx *= -1
        if (this.y < 0 || this.y > H) this.vy *= -1
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.c},${this.a})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle())

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach((p) => { p.update(); p.draw() })
      // connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d  = Math.hypot(dx, dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(37,99,235,${0.12 * (1 - d / 120)})`
            ctx.lineWidth   = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMove)
    }
  }, [])

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      {/* Background layers */}
      <div className={styles.bg}>
        <div className={styles.grid} />
        <motion.div
          className={styles.glow1}
          animate={{
            x: normalized.x * 30,
            y: normalized.y * 20,
          }}
          transition={{ type: 'spring', stiffness: 40, damping: 30 }}
        />
        <motion.div
          className={styles.glow2}
          animate={{
            x: normalized.x * -20,
            y: normalized.y * -15,
          }}
          transition={{ type: 'spring', stiffness: 30, damping: 30 }}
        />
        <canvas ref={canvasRef} className={styles.canvas} />
      </div>

      {/* Content */}
      <motion.div
        className={styles.content}
        animate={{
          x: normalized.x * 8,
          y: normalized.y * 5,
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 30 }}
      >
        <motion.div className={styles.badge} {...FADE_UP(0.2)}>
          <span className={styles.badgeDot} />
          Premium Web Design Agency
        </motion.div>

        <motion.h1 className={styles.h1} {...FADE_UP(0.4)}>
          We Create<br />
          <span className="gradient-text">Digital Experiences</span><br />
          That Feel Impossible.
        </motion.h1>

        <motion.p className={styles.sub} {...FADE_UP(0.6)}>
          We design modern, high-converting websites and digital experiences that help
          businesses stand out globally and grow with confidence.
        </motion.p>

        <motion.div className={styles.btns} {...FADE_UP(0.8)}>
          <button
            className="btn-primary"
            onClick={() => scrollTo('#contact')}
          >
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          <button
            className="btn-ghost"
            onClick={() => scrollTo('#portfolio')}
          >
            View Our Work
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}
