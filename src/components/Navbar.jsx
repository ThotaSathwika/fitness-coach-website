import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'

const links = [['/', 'Home'], ['/programs', 'Programs'], ['/transformations', 'Transformations'], ['/about', 'About'], ['/blog', 'Tips'], ['/contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { const f = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f) }, [])
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled || open ? 'border-b border-night-700 bg-night-950/95 backdrop-blur' : ''}`}>
      <nav className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-3xl tracking-wider"><Zap className="h-6 w-6 fill-volt-500 text-volt-500" />FORGE</Link>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `text-sm font-medium uppercase tracking-wider transition hover:text-volt-500 ${isActive ? 'text-volt-500' : 'text-white/80'}`}>{l}</NavLink>)}
        </div>
        <Link to="/contact" className="btn-volt hidden !px-5 !py-2.5 md:inline-flex">Start Now</Link>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="container-x flex flex-col gap-4 pb-8 lg:hidden">{links.map(([to, l]) => <Link key={to} to={to} className="font-display text-4xl">{l}</Link>)}<Link to="/contact" className="btn-volt mt-2">Start Now</Link></div>}
    </header>
  )
}
