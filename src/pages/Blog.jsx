import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Img from '../components/Img'
import { posts } from '../data'

export function Blog() {
  return (
    <>
      <PageHeader eyebrow="Tips & articles" title="Train smarter" sub="Practical advice on training, nutrition and mindset." />
      <section className="container-x grid gap-8 pb-24 md:grid-cols-3">
        {posts.map((p) => (
          <Link key={p.slug} to={`/blog/${p.slug}`} className="group overflow-hidden rounded-xl border border-night-700 bg-night-900">
            <div className="h-56 overflow-hidden"><Img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /></div>
            <div className="p-6">
              <div className="flex gap-3 text-xs font-semibold uppercase"><span className="text-volt-500">{p.tag}</span><span className="flex items-center gap-1 text-white/45"><Clock className="h-3 w-3" />{p.read}</span></div>
              <h3 className="mt-3 text-3xl leading-tight group-hover:text-volt-500">{p.title}</h3>
            </div>
          </Link>
        ))}
      </section>
    </>
  )
}

export function Post() {
  const { slug } = useParams()
  const p = posts.find((x) => x.slug === slug)
  if (!p) return <p className="py-40 text-center">Article not found.</p>
  return (
    <article className="container-x max-w-3xl pb-24 pt-32">
      <Link to="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 hover:text-volt-500"><ArrowLeft className="h-4 w-4" /> All articles</Link>
      <p className="eyebrow">{p.tag} · {p.read} read</p>
      <h1 className="text-6xl leading-none md:text-7xl">{p.title}</h1>
      <Img src={p.img} alt={p.title} className="my-10 h-80 w-full rounded-xl object-cover" />
      <div className="space-y-5 text-lg leading-relaxed text-white/75">{p.body.map((para, i) => <p key={i}>{para}</p>)}</div>
      <div className="mt-12 rounded-xl border border-volt-500/40 bg-night-900 p-8"><h3 className="text-4xl">Want a plan built for you?</h3><Link to="/contact" className="btn-volt mt-4">Book a free consultation</Link></div>
    </article>
  )
}
