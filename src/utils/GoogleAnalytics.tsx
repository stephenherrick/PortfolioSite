import { useEffect } from 'react'
import { useLocation } from './useLocation'

interface GoogleAnalyticsProps {
  children: React.ReactNode
}

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

// Extend ImportMeta for Vite environment variables
declare global {
  interface ImportMeta {
    env: {
      VITE_GA_MEASUREMENT_ID: string
    }
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXX'

export default function GoogleAnalytics({ children }: GoogleAnalyticsProps) {
  const location = useLocation()

  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(..._args: any[]) {
      window.dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', MEASUREMENT_ID)

    ;(window as any).gtag = gtag
  }, [])

  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: location,
      })
    }
  }, [location])

  return <>{children}</>
}
