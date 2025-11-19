import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-cyan-500"></div>
            <span className="text-sm font-semibold tracking-wide text-white">Ocean Nature</span>
          </div>
          <nav className="hidden gap-6 text-sm text-cyan-100/80 sm:flex">
            <a href="#explore" className="hover:text-white">Explore</a>
            <a href="#about" className="hover:text-white">About</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950 py-8 text-center text-cyan-100/60">
        <p>Made with love for the ocean.</p>
      </footer>
    </div>
  )
}

export default App
