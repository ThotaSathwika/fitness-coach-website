import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ProgramCard from '../components/ProgramCard'
import { programs } from '../data'

export default function Programs() {
  const nutrition = programs.find((p) => p.slug === 'nutrition')
  return (
    <>
      <PageHeader eyebrow="Training programs" title="Programs built to deliver" sub="Every plan is personalised after your assessment. Choose a starting point — we’ll tailor the rest." />
      <section className="container-x pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{programs.filter((p) => p.slug !== 'nutrition').map((p) => <ProgramCard key={p.slug} p={p} />)}</div>
      </section>
      <section className="border-y border-night-700 bg-night-900 py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Nutrition plans</p>
            <h2 className="text-6xl">Eat for your goal — the Indian way.</h2>
            <p className="mt-4 text-white/65">{nutrition.short} Every plan uses foods from your own kitchen: dal, roti, rice, paneer, eggs, chicken — adjusted to your goal and taste.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">{nutrition.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-volt-500" />{f}</li>)}</ul>
            <Link to="/programs/nutrition" className="btn-volt mt-8">View nutrition plans</Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[['Breakfast', 'Moong dal chilla + curd', '28 g'], ['Lunch', 'Chicken curry, rice, salad', '42 g'], ['Snack', 'Roasted chana + buttermilk', '14 g'], ['Dinner', 'Paneer bhurji + 2 roti', '32 g'], ['Pre-workout', 'Banana + black coffee', '2 g'], ['Total', 'Daily protein', '118 g']].map(([m, d, p]) => (
              <div key={m} className={`rounded-lg p-4 ${m === 'Total' ? 'bg-volt-500 text-night-950' : 'border border-night-700 bg-night-800'}`}>
                <p className="text-xs font-bold uppercase opacity-60">{m}</p><p className="mt-1 text-sm">{d}</p><p className="mt-2 font-display text-3xl">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
