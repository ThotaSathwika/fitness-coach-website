import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Check, ArrowLeft, Calendar, Clock, Gauge } from 'lucide-react'
import Img from '../components/Img'
import { programs, rupee } from '../data'

const durations = [['1', 'Monthly', 0], ['3', '3 months', 10], ['6', '6 months', 20]]

export default function ProgramDetail() {
  const { slug } = useParams()
  const p = programs.find((x) => x.slug === slug)
  const [dur, setDur] = useState('3')
  if (!p) return <div className="py-40 text-center"><p>Program not found.</p><Link to="/programs" className="btn-volt mt-6">All programs</Link></div>
  const discount = durations.find((d) => d[0] === dur)[2]
  const priceFor = (base) => Math.round((base * (1 - discount / 100)) / 10) * 10

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-16">
        <Img src={p.img} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/70 to-night-950/30" />
        <div className="container-x relative">
          <Link to="/programs" className="mb-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-volt-500"><ArrowLeft className="h-4 w-4" /> All programs</Link>
          <h1 className="text-7xl leading-none md:text-9xl">{p.name}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/75">{p.short}</p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm font-semibold uppercase">
            {[[Calendar, `${p.weeks} weeks`], [Clock, p.sessions], [Gauge, p.level]].map(([I, t]) => <span key={t} className="flex items-center gap-2"><I className="h-4 w-4 text-volt-500" />{t}</span>)}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-14 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-5xl">What’s included</h2>
          <ul className="mt-6 space-y-4">{p.features.map((f) => <li key={f} className="flex items-center gap-3 text-lg"><span className="rounded-full bg-volt-500 p-1 text-night-950"><Check className="h-4 w-4" /></span>{f}</li>)}</ul>
        </div>
        <div>
          <h2 className="text-5xl">Sample week</h2>
          <div className="mt-6 divide-y divide-night-700 rounded-xl border border-night-700">
            {p.schedule.map(([d, w]) => <div key={d} className="flex items-center gap-6 p-5"><span className="w-20 font-display text-3xl text-volt-500">{d}</span><span>{w}</span></div>)}
          </div>
        </div>
      </section>

      <section className="border-t border-night-700 bg-night-900 py-20">
        <div className="container-x">
          <div className="mb-10 text-center"><p className="eyebrow">Pricing</p><h2 className="text-6xl">Choose your plan</h2></div>
          <div className="mx-auto mb-12 flex w-fit gap-1 rounded-lg bg-night-800 p-1">
            {durations.map(([k, l, off]) => (
              <button key={k} onClick={() => setDur(k)} className={`rounded-md px-5 py-2.5 text-sm font-semibold transition ${dur === k ? 'bg-volt-500 text-night-950' : 'text-white/70'}`}>{l}{off > 0 && <span className="ml-1 text-xs">(-{off}%)</span>}</button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {p.pricing.map((t) => (
              <div key={t.name} className={`relative rounded-xl border p-8 ${t.popular ? 'border-volt-500 bg-night-800 shadow-[0_0_60px_-15px_rgba(198,255,61,.4)]' : 'border-night-700'}`}>
                {t.popular && <span className="absolute -top-3 left-8 rounded bg-volt-500 px-3 py-1 text-xs font-bold uppercase text-night-950">Most popular</span>}
                <h3 className="text-4xl">{t.name}</h3>
                <p className="mt-4"><span className="font-display text-6xl">{rupee(priceFor(t.price))}</span><span className="text-white/50"> /{t.period}</span></p>
                {discount > 0 && <p className="text-sm text-white/40 line-through">{rupee(t.price)}</p>}
                <ul className="my-8 space-y-3">{t.perks.map((k) => <li key={k} className="flex gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-volt-500" />{k}</li>)}</ul>
                <Link to={`/contact?program=${p.slug}&plan=${t.name}&duration=${dur}`} className={t.popular ? 'btn-volt w-full' : 'btn-line w-full'}>Join {t.name}</Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-white/40">All plans include a free 30-minute consultation. Cancel anytime on monthly plans.</p>
        </div>
      </section>
    </>
  )
}
