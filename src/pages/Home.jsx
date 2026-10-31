import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dumbbell, Apple, LineChart, MessageCircle, Star, Play } from 'lucide-react'
import Img from '../components/Img'
import ProgramCard from '../components/ProgramCard'
import BeforeAfter from '../components/BeforeAfter'
import { heroImg, programs, transformations, coach } from '../data'

function BmiCalculator() {
  const [h, setH] = useState(170)
  const [w, setW] = useState(72)
  const bmi = +(w / (h / 100) ** 2).toFixed(1)
  // Asian BMI cut-offs (used in India)
  const [label, color] = bmi < 18.5 ? ['Underweight', 'text-sky-400'] : bmi < 23 ? ['Healthy', 'text-volt-500'] : bmi < 25 ? ['Overweight', 'text-amber-400'] : ['Obese', 'text-red-400']
  return (
    <div className="rounded-xl border border-night-700 bg-night-900 p-8">
      <h3 className="text-4xl">Quick BMI Check</h3>
      <div className="mt-6 space-y-5">
        {[['Height', h, setH, 140, 210, 'cm'], ['Weight', w, setW, 40, 150, 'kg']].map(([l, v, set, min, max, unit]) => (
          <div key={l}><label className="label">{l}: <span className="text-white">{v} {unit}</span></label>
            <input type="range" min={min} max={max} value={v} onChange={(e) => set(+e.target.value)} className="w-full accent-volt-500" /></div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-2 rounded-lg bg-night-800 p-5">
        <div><p className="text-xs uppercase tracking-widest text-white/50">Your BMI</p><p className="font-display text-6xl leading-none">{bmi}</p></div>
        <p className={`font-display text-3xl ${color}`}>{label}</p>
      </div>
      <Link to="/contact" className="btn-volt mt-6 w-full">Get my personalised plan</Link>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Img src={heroImg} alt="Training at FORGE" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/85 to-night-950/30" />
        <div className="container-x relative pt-20">
          <p className="eyebrow animate-fadeUp">Personal training · Hyderabad & online</p>
          <h1 className="max-w-4xl animate-fadeUp text-7xl leading-[0.85] md:text-[9rem]" style={{ animationDelay: '.1s' }}>Forge the<br /><span className="text-volt-500">strongest</span> you.</h1>
          <p className="mt-6 max-w-lg animate-fadeUp text-lg text-white/70" style={{ animationDelay: '.2s' }}>Science-backed training and Indian-friendly nutrition from coach {coach.name}. No fads. No guesswork. Just results that last.</p>
          <div className="mt-9 flex animate-fadeUp flex-wrap gap-4" style={{ animationDelay: '.3s' }}>
            <Link to="/contact" className="btn-volt">Book Free Consultation</Link>
            <Link to="/programs" className="btn-line"><Play className="h-4 w-4" /> Explore Programs</Link>
          </div>
          <div className="mt-14 flex animate-fadeUp flex-wrap gap-12" style={{ animationDelay: '.4s' }}>
            {[['850+', 'Clients coached'], ['6,200 kg', 'Fat lost together'], ['4.9', 'Google rating']].map(([n, l]) => <div key={l}><p className="font-display text-5xl text-volt-500">{n}</p><p className="text-sm text-white/60">{l}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-night-700 bg-night-900">
        <div className="container-x grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {[[Dumbbell, 'Custom training', 'Built for your body, goal and schedule.'], [Apple, 'Real-food nutrition', 'Indian meals you already enjoy.'], [LineChart, 'Tracked progress', 'Weekly check-ins and body scans.'], [MessageCircle, 'Daily support', 'Direct WhatsApp access to your coach.']].map(([Icon, t, d]) => (
            <div key={t}><Icon className="h-9 w-9 text-volt-500" /><h3 className="mt-4 text-3xl">{t}</h3><p className="text-sm text-white/55">{d}</p></div>
          ))}
        </div>
      </section>

      <section className="container-x py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow">Programs</p><h2 className="text-6xl md:text-7xl">Pick your mission</h2></div>
          <Link to="/programs" className="btn-line">All programs</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{programs.map((p) => <ProgramCard key={p.slug} p={p} />)}</div>
      </section>

      <section className="bg-night-900 py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Real people. Real results.</p>
            <h2 className="text-6xl md:text-7xl">{transformations[0].result} in {transformations[0].weeks} weeks</h2>
            <p className="mt-5 text-xl text-white/70">“{transformations[0].quote}”</p>
            <p className="mt-4 font-semibold">— {transformations[0].name}, {transformations[0].age}</p>
            <div className="mt-6 flex gap-1 text-volt-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
            <Link to="/transformations" className="btn-volt mt-8">See all transformations</Link>
          </div>
          <div className="mx-auto w-full max-w-md"><BeforeAfter before={transformations[0].before} after={transformations[0].after} alt={transformations[0].name} /></div>
        </div>
      </section>

      <section className="container-x grid grid-cols-1 gap-12 py-24 lg:grid-cols-2">
        <div className="relative">
          <Img src={coach.img} alt={coach.name} className="h-full min-h-[420px] w-full rounded-xl object-cover" />
          <div className="absolute bottom-5 left-5 rounded-lg bg-volt-500 px-5 py-3 text-night-950"><p className="font-display text-3xl leading-none">10+ years</p><p className="text-xs font-bold uppercase">Coaching experience</p></div>
        </div>
        <div className="flex min-w-0 flex-col justify-center gap-8">
          <div>
            <p className="eyebrow">Meet your coach</p>
            <h2 className="text-6xl">Hi, I’m Arjun.</h2>
            <p className="mt-4 text-white/65">I went from an overweight engineering student to a national-level powerlifter. Now I help busy professionals build strength and lose fat — without giving up the food they love.</p>
            <Link to="/about" className="mt-6 inline-block font-semibold text-volt-500 underline underline-offset-4">Read my story →</Link>
          </div>
          <BmiCalculator />
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-volt-500 p-10 text-night-950 md:p-16">
          <h2 className="max-w-2xl text-6xl leading-none md:text-8xl">Your first session is on us.</h2>
          <p className="mt-4 max-w-md font-medium">Free 30-minute consultation: body assessment, goal mapping and a sample plan.</p>
          <Link to="/contact" className="btn mt-8 bg-night-950 text-white hover:bg-night-800">Claim free session</Link>
          <Dumbbell className="absolute -bottom-10 -right-10 h-72 w-72 rotate-12 opacity-10" />
        </div>
      </section>
    </>
  )
}
