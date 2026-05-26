import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const trailX  = useSpring(cursorX, { stiffness: 100, damping: 22, mass: 0.5 })
  const trailY  = useSpring(cursorY, { stiffness: 100, damping: 22, mass: 0.5 })

  const [hovered, setHovered] = useState(false)
  const [hidden,  setHidden]  = useState(true)

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setHidden(false)
    }
    const enter = () => setHidden(false)
    const leave = () => setHidden(true)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseenter', enter)
    document.addEventListener('mouseleave', leave)

    const interactives = document.querySelectorAll(
      'a, button, [data-cursor="hover"], .service-card, .portfolio-card'
    )
    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseenter', enter)
      document.removeEventListener('mouseleave', leave)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
        animate={{
          width:  hovered ? 20 : 10,
          height: hovered ? 20 : 10,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: '#06B6D4',
        }} />
      </motion.div>

      {/* Trail ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9998,
          borderRadius: '50%',
          border: '1px solid rgba(6,182,212,0.35)',
        }}
        animate={{
          width:  hovered ? 56 : 36,
          height: hovered ? 56 : 36,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
