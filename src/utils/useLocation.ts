import { useEffect, useState } from 'react'

export function useLocation(): string {
  const [location, setLocation] = useState(typeof window !== 'undefined' ? window.location.pathname : '/')

  useEffect(() => {
    setLocation(window.location.pathname)
  }, [])

  return location
}
