import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Quote } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import BeforeAfter from '../components/BeforeAfter'
import { transformations, programs } from '../data'

export default function Transformations() {
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? transformations : transformations.filter((t) => t.program === filter)
  const used = programs.filter((p) => transformations.some((t) => t.program === p.slug))

  return (
    <>
      <PageHeader eyebrow="Transformations" title="Proof, not promises." sub="Drag the slider on each photo to see the change. Shared with permission from our clients." />
      <section className="container-x pb-24">
        <div className="mb-10 flex flex-wrap gap-2">
          {[['all', 'All'], ...used.map((p) => [p.slug, p.name])].map(([k, l]) => (
            <button key={k} onClick={() => setFilter(k)} className={`rounded-md px-4 py-2 text-sm font-semibold uppercase transition ${filter === k ? 'bg-volt-500 text-night-950' : 'border border-night-600 text-white/70 hover:border-volt-500'}`}>{l}</button>
          ))}
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {list.map((t) => (
            <article key={t.name} className="grid gap-6 rounded-xl border border-night-700 bg-night-900 p-5 sm:grid-cols-2">
              <BeforeAfter before={t.before} after={t.after} alt={t.name} />
              <div className="flex flex-col">
                <p className="font-display text-6xl leading-none text-volt-500">{t.result}</p>
                <p className="text-sm uppercase tracking-wider text-white/50">in {t.weeks} weeks</p>
                <Quote className="mt-6 h-6 w-6 text-volt-500" />
                <p className="mt-2 text-white/75">{t.quote}</p>
                <p className="mt-auto pt-5 font-semibold">{t.name}, {t.age}</p>
                <p className="text-xs text-white/45">{programs.find((p) => p.slug === t.program)?.name}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center"><Link to="/contact" className="btn-volt">Start your transformation</Link></div>
      </section>
    </>
  )
}
