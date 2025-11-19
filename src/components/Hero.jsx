import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950">
      {/* 3D Ocean Animation */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to blend content with the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950"></div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-16 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200 backdrop-blur-sm">
          Ocean • Nature • Relaxation
        </span>
        <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-md sm:text-5xl md:text-6xl">
          Dive into the Calm of the Digital Ocean
        </h1>
        <p className="mt-4 max-w-2xl text-cyan-100/90">
          A serene exploration of waves, light, and motion. Breathe in, slow down, and immerse yourself in natures rhythm.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#explore"
            className="group inline-flex items-center rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Explore the Shore
            <svg className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-xl border border-cyan-300/30 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 backdrop-blur-md transition hover:bg-white/10"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
