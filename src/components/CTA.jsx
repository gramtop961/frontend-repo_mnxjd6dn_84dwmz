import React from 'react'

const CTA = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-cyan-400/5 to-transparent p-10 text-center backdrop-blur-md">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Bring Nature to Your Screen</h2>
          <p className="mx-auto mt-3 max-w-2xl text-cyan-100/85">
            Perfect for wellness spaces, studios, and personal relaxation. Embed the ocean vibe into your website or display.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-cyan-100">
              Get Started
            </a>
            <a href="#" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10">
              See More Scenes
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
