import { useEffect, useState } from 'react'
import SocialLinks from './components/SocialLinks'
import './App.css'

function App() {
  useEffect(() => {
    document.title = 'Stephen Herrick - SDET & QA Professional'
  }, [])

  const currentYear = new Date().getFullYear()
  const [command, setCommand] = useState('npm run test')
  const [hasRun, setHasRun] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'Running browser checks...'
  ])

  const runFakeTests = () => {
    if (hasRun) return

    const results: string[] = []
    const title = document.title
    const heading = document.querySelector('h1')?.textContent?.trim() ?? ''
    const socialLinks = document.querySelectorAll('a[target="_blank"]').length
    const footer = document.querySelector('footer')?.textContent ?? ''

    results.push(`✓ Title check: ${title === 'Stephen Herrick - SDET & QA Professional' ? 'passed' : 'failed'}`)
    results.push(`✓ Heading check: ${heading.includes('Stephen Herrick') ? 'passed' : 'failed'}`)
    results.push(`✓ Link check: ${socialLinks === 4 ? 'passed' : 'failed'}`)
    results.push(`✓ Footer check: ${footer.includes(String(currentYear)) ? 'passed' : 'failed'}`)

    setHasRun(true)
    setTerminalOutput((prev) => [...prev, ...results, 'All browser checks passed'])
  }

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
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-10">
          <div className="animate-fadeIn">
            <SocialLinks />
          </div>

          <section
            data-testid="fake-terminal"
            className="overflow-hidden rounded-xl border border-cyan-500/30 bg-slate-950/80 shadow-2xl shadow-cyan-950/30"
          >
            <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs uppercase tracking-[0.3em] text-slate-400">terminal</span>
            </div>

            <div className="space-y-3 p-4 font-mono text-sm text-cyan-100">
              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <input
                  aria-label="Terminal command"
                  className="w-full bg-transparent outline-none placeholder:text-slate-600"
                  placeholder="Enter command"
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                />
                <button
                  type="button"
                  disabled={hasRun}
                  className="rounded bg-cyan-600 px-3 py-1 text-xs font-semibold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:bg-slate-600"
                  onClick={runFakeTests}
                >
                  Run
                </button>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
                {terminalOutput.map((line, index) => (
                  <div key={`${line}-${index}`} className="whitespace-pre-wrap text-slate-300">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </section>
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
