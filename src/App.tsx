import { useEffect } from 'react'
import SocialLinks from './components/SocialLinks'
import './App.css'

function App() {
  useEffect(() => {
    document.title = 'Stephen Herrick - SDET & QA Professional'
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Stephen Herrick
          </h1>
          <p className="text-center text-slate-300 mt-2">SDET & QA Professional</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="animate-fadeIn">
            <SocialLinks />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-4 text-center text-slate-400 text-sm">
        <p>© {currentYear} stephenherrick.dev</p>
      </footer>
    </div>
  )
}

export default App
