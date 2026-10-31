import { Award } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Img from '../components/Img'
import { coach, certifications } from '../data'

const timeline = [
  ['2012', 'Weighed 98 kg as a B.Tech student. Walked into a gym for the first time.'],
  ['2015', 'Lost 26 kg, competed in my first state powerlifting meet.'],
  ['2016', 'Left my IT job to study sports science and start coaching.'],
  ['2019', 'Opened the FORGE studio in Madhapur.'],
  ['2023', 'Launched online coaching — now training clients in 14 countries.'],
]

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About the coach" title={`Coach ${coach.name}`} sub="Strength coach, nutrition nerd and former software engineer." />
      <section className="container-x grid gap-14 pb-20 lg:grid-cols-2">
        <Img src={coach.img} alt={coach.name} className="h-[560px] w-full rounded-xl object-cover" />
        <div className="space-y-5 text-white/70">
          <h2 className="text-5xl text-white">I know what it’s like to start from zero.</h2>
          <p>Ten years ago I was an overweight engineering student who got out of breath climbing stairs. A friend dragged me to the gym — and it changed everything. Not just my body, but my confidence, focus and energy.</p>
          <p>Since then I’ve studied sports science, competed in national powerlifting and coached more than 850 people — doctors, techies, new mothers and retirees. My approach is simple: train with intent, eat real food and build habits you can keep for life.</p>
          <p className="text-white">My promise: you’ll never get a cookie-cutter plan or a crash diet from me.</p>
          <div className="grid grid-cols-3 gap-3 pt-4 text-center">
            {[['850+', 'Clients'], ['10 yrs', 'Coaching'], ['220 kg', 'Deadlift PR']].map(([n, l]) => <div key={l} className="rounded-lg border border-night-700 p-4"><p className="font-display text-4xl text-volt-500">{n}</p><p className="text-xs uppercase">{l}</p></div>)}
          </div>
        </div>
      </section>
      <section className="border-y border-night-700 bg-night-900 py-20">
        <div className="container-x">
          <h2 className="mb-10 text-6xl">Certifications</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {certifications.map(([c, d]) => <div key={c} className="rounded-xl border border-night-700 bg-night-800 p-6"><Award className="h-8 w-8 text-volt-500" /><p className="mt-4 font-display text-2xl">{c}</p><p className="text-sm text-white/55">{d}</p></div>)}
          </div>
        </div>
      </section>
      <section className="container-x max-w-4xl py-20">
        <h2 className="mb-12 text-6xl">My story</h2>
        <ol className="relative space-y-10 border-l-2 border-night-700 pl-8">
          {timeline.map(([y, t]) => (
            <li key={y} className="relative"><span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-night-950 bg-volt-500" />
              <p className="font-display text-4xl text-volt-500">{y}</p><p className="text-white/70">{t}</p></li>
          ))}
        </ol>
      </section>
    </>
  )
}
