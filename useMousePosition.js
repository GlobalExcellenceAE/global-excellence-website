import { useState, useEffect, useRef } from 'react'

export function useMousePosition(elementRef = null) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [normalized, setNormalized] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const target = elementRef?.current ?? window

    function handleMove(e) {
      const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0
      const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0

      setPosition({ x: clientX, y: clientY })

      if (elementRef?.current) {
        const rect = elementRef.current.getBoundingClientRect()
        setNormalized({
          x: ((clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((clientY - rect.top) / rect.height - 0.5) * 2,
        })
      } else {
        setNormalized({
          x: (clientX / window.innerWidth - 0.5) * 2,
          y: (clientY / window.innerHeight - 0.5) * 2,
        })
      }
    }

    target.addEventListener('mousemove', handleMove, { passive: true })
    return () => target.removeEventListener('mousemove', handleMove)
  }, [elementRef])

  return { position, normalized }
}
