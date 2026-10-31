import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import Img from './Img'
import { rupee } from '../data'

export default function ProgramCard({ p }) {
  return (
    <Link to={`/programs/${p.slug}`} className="group relative flex h-[440px] flex-col justify-end overflow-hidden rounded-xl border border-night-700">
      <Img src={p.img} alt={p.name} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      <div className={`absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/70 ${p.color} to-transparent`} />
      <div className="relative p-6">
        <div className="mb-3 flex gap-4 text-xs font-semibold uppercase text-white/70"><span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{p.weeks} weeks</span><span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.sessions}</span></div>
        <h3 className="text-4xl">{p.name}</h3>
        <p className="mt-2 text-sm text-white/70">{p.short}</p>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-sm">From <b className="text-volt-500">{rupee(p.pricing[0].price)}</b>/mo</span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-volt-500 text-night-950 transition group-hover:rotate-[-45deg]"><ArrowRight className="h-5 w-5" /></span>
        </div>
      </div>
    </Link>
  )
}
