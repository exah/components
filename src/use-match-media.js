import { useEffect, useState } from 'react'

export function useMatchMedia (mediaQuery) {
  const [ isMatched, setMatched ] = useState(false)

  useEffect(() => {
    if (mediaQuery) {
      const mql = window.matchMedia(mediaQuery)
      const listener = () => setMatched(mql.matches)

      listener()
      mql.addListener(listener)
      return () => mql.removeListener(listener)
    }
  }, [mediaQuery])

  return isMatched
}
