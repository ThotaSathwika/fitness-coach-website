import { Link } from 'react-router-dom'
import { Zap, Instagram, Youtube } from 'lucide-react'
import { coach, programs } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-night-700 bg-night-900">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="flex items-center gap-2 font-display text-4xl"><Zap className="fill-volt-500 text-volt-500" /> FORGE</p>
          <p className="mt-3 max-w-sm text-white/55">Science-based coaching by {coach.name}. Stronger body, sharper mind, habits that last.</p>
          <div className="mt-5 flex gap-3">{[Instagram, Youtube].map((I, i) => <a key={i} href="#" className="rounded-md border border-night-600 p-2.5 hover:border-volt-500 hover:text-volt-500"><I className="h-4 w-4" /></a>)}</div>
        </div>
        <div><h4 className="mb-4 font-display text-2xl">Programs</h4><ul className="space-y-2 text-sm text-white/55">{programs.map((p) => <li key={p.slug}><Link to={`/programs/${p.slug}`} className="hover:text-volt-500">{p.name}</Link></li>)}</ul></div>
        <div><h4 className="mb-4 font-display text-2xl">Contact</h4><ul className="space-y-2 text-sm text-white/55"><li>{coach.phone}</li><li>{coach.email}</li><li>{coach.address}</li></ul></div>
      </div>
      <p className="border-t border-night-700 py-5 text-center text-xs text-white/35">© {new Date().getFullYear()} FORGE with Arjun Rao. Results vary from person to person.</p>
    </footer>
  )
}
