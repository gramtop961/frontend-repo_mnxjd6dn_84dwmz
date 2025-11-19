import React from 'react'

const features = [
  {
    title: 'Wave Physics',
    desc: 'Smooth, lifelike motion evokes real ocean dynamics for a deeply calming effect.',
  },
  {
    title: 'Ambient Sound Ready',
    desc: 'Pair it with gentle ocean audio for a multisensory retreat.',
  },
  {
    title: 'Responsive & Lightweight',
    desc: 'Optimized visuals that adapt beautifully across devices and screens.',
  },
]

const Features = () => {
  return (
    <section id="explore" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Crafted for Tranquility</h2>
          <p className="mx-auto mt-3 max-w-2xl text-cyan-100/80">
            Designed with natures rhythm in mind, this experience blends art and technology to help you unwind.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-cyan-300/20 bg-white/5 p-6 text-left text-cyan-100 shadow-lg shadow-cyan-500/5">
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-cyan-100/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
