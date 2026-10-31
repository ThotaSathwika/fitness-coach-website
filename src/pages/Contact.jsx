import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Flame, Dumbbell, HeartPulse, Salad, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { programs, coach } from '../data'

const goals = [['fat-loss', 'Lose fat', Flame], ['muscle-gain', 'Build muscle', Dumbbell], ['general-fitness', 'Get fit & healthy', HeartPulse], ['nutrition', 'Fix my nutrition', Salad]]

export default function Contact() {
  const [params] = useSearchParams()
  const [step, setStep] = useState(0)
  const [f, setF] = useState({
    goal: params.get('program') || '', plan: params.get('plan') || 'Hybrid', duration: params.get('duration') || '3',
    name: '', phone: '', email: '', age: '', gender: '', experience: 'Beginner', time: 'Morning', notes: '',
  })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const program = programs.find((p) => p.slug === f.goal)

  const submit = (e) => {
    e.preventDefault()
    const list = JSON.parse(localStorage.getItem('forge-signups') || '[]')
    localStorage.setItem('forge-signups', JSON.stringify([...list, { ...f, date: new Date().toISOString() }]))
    setStep(3)
  }

  return (
    <>
      <PageHeader eyebrow="Join FORGE" title="Let’s get started." sub="Answer three quick questions and I’ll personally reach out within 24 hours to book your free consultation." />
      <section className="container-x grid gap-12 pb-24 lg:grid-cols-[1fr_340px]">
        <div className="rounded-2xl border border-night-700 bg-night-900 p-6 md:p-10">
          {step < 3 && (
            <div className="mb-10 flex gap-2">{[0, 1, 2].map((i) => <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-volt-500' : 'bg-night-700'}`} />)}</div>
          )}

          {step === 0 && (
            <div>
              <h2 className="text-5xl">What’s your main goal?</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {goals.map(([k, l, Icon]) => (
                  <button key={k} onClick={() => setF({ ...f, goal: k, plan: programs.find((x) => x.slug === k).pricing.find((t) => t.popular).name })} className={`flex items-center gap-4 rounded-xl border p-5 text-left transition ${f.goal === k ? 'border-volt-500 bg-volt-500/10' : 'border-night-600 hover:border-white/40'}`}>
                    <Icon className={`h-8 w-8 ${f.goal === k ? 'text-volt-500' : 'text-white/50'}`} /><span className="text-lg font-semibold">{l}</span>
                  </button>
                ))}
              </div>
              <button disabled={!f.goal} onClick={() => setStep(1)} className="btn-volt mt-8 disabled:opacity-30">Next</button>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-5xl">Pick a membership</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {program.pricing.map((t) => (
                  <button key={t.name} onClick={() => setF({ ...f, plan: t.name })} className={`rounded-xl border p-5 text-left ${f.plan === t.name ? 'border-volt-500 bg-volt-500/10' : 'border-night-600'}`}>
                    <p className="font-display text-3xl">{t.name}</p><p className="text-sm text-white/55">₹{t.price.toLocaleString('en-IN')}/month</p>
                  </button>
                ))}
              </div>
              <label className="label mt-8">Commitment</label>
              <select className="input max-w-xs" value={f.duration} onChange={set('duration')}><option value="1">Monthly</option><option value="3">3 months (save 10%)</option><option value="6">6 months (save 20%)</option></select>
              <div className="mt-8 flex gap-3"><button onClick={() => setStep(0)} className="btn-line">Back</button><button onClick={() => setStep(2)} className="btn-volt">Next</button></div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={submit}>
              <h2 className="text-5xl">Tell me about you</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div><label className="label">Full name</label><input required className="input" value={f.name} onChange={set('name')} /></div>
                <div><label className="label">Phone (WhatsApp)</label><input required pattern="\d{10}" title="10 digit number" className="input" value={f.phone} onChange={set('phone')} /></div>
                <div><label className="label">Email</label><input required type="email" className="input" value={f.email} onChange={set('email')} /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="label">Age</label><input required type="number" min="14" max="90" className="input" value={f.age} onChange={set('age')} /></div>
                  <div><label className="label">Gender</label><select required className="input" value={f.gender} onChange={set('gender')}><option value="">—</option><option>Male</option><option>Female</option><option>Other</option></select></div>
                </div>
                <div><label className="label">Training experience</label><select className="input" value={f.experience} onChange={set('experience')}>{['Beginner', '6–12 months', '1–3 years', '3+ years'].map((o) => <option key={o}>{o}</option>)}</select></div>
                <div><label className="label">Preferred time</label><select className="input" value={f.time} onChange={set('time')}>{['Morning', 'Afternoon', 'Evening'].map((o) => <option key={o}>{o}</option>)}</select></div>
                <div className="sm:col-span-2"><label className="label">Injuries or anything I should know?</label><textarea rows={3} className="input" value={f.notes} onChange={set('notes')} /></div>
              </div>
              <div className="mt-8 flex gap-3"><button type="button" onClick={() => setStep(1)} className="btn-line">Back</button><button className="btn-volt flex-1">Submit & book free consult</button></div>
            </form>
          )}

          {step === 3 && (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-16 w-16 text-volt-500" />
              <h2 className="mt-6 text-6xl">You’re in, {f.name.split(' ')[0]}!</h2>
              <p className="mx-auto mt-4 max-w-md text-white/65">I’ll WhatsApp you on {f.phone} within 24 hours to schedule your free consultation for the <b className="text-white">{program?.name} – {f.plan}</b> plan.</p>
            </div>
          )}
        </div>

        <aside className="space-y-4">
          {[[Phone, coach.phone], [Mail, coach.email], [MapPin, coach.address]].map(([I, v]) => <div key={v} className="flex gap-3 rounded-xl border border-night-700 bg-night-900 p-5 text-sm"><I className="h-5 w-5 shrink-0 text-volt-500" />{v}</div>)}
          <iframe title="Studio" loading="lazy" className="h-64 w-full rounded-xl grayscale invert-[.9]" src="https://www.google.com/maps?q=Madhapur+Hyderabad&output=embed" />
          {program && step < 3 && <div className="rounded-xl border border-volt-500/40 bg-night-900 p-5 text-sm"><p className="label">Your selection</p><p className="font-display text-2xl">{program.name}</p><p className="text-white/60">{f.plan} · {f.duration === '1' ? 'Monthly' : `${f.duration} months`}</p></div>}
        </aside>
      </section>
    </>
  )
}
