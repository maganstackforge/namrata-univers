import { useState, useEffect } from 'react'

export default function useScaleOnScroll() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (scrolled > 50) {
        setScale(0.85) // bottom scale
      } else {
        setScale(1)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scale
}
