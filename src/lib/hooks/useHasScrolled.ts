import { useEffect, useState } from 'react'

const OFFSET = 120

const useHasScrolled = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > OFFSET) setScrolled(true)
      else setScrolled(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrolled }
}

export default useHasScrolled
