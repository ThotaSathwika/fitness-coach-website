export default function PageHeader({ eyebrow, title, sub }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-volt-500/10 blur-3xl" />
      <div className="container-x relative animate-fadeUp">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-6xl leading-none md:text-8xl">{title}</h1>
        {sub && <p className="mt-5 max-w-2xl text-lg text-white/60">{sub}</p>}
      </div>
    </section>
  )
}
