import { useState } from 'react'
import Img from './Img'

// Drag the slider to compare before & after photos
export default function BeforeAfter({ before, after, alt }) {
  const [pos, setPos] = useState(50)
  return (
    <div className="relative aspect-[4/5] select-none overflow-hidden rounded-xl bg-night-800">
      <Img src={after} alt={`${alt} after`} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Img src={before} alt={`${alt} before`} className="h-full w-full object-cover grayscale" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-volt-500" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 grid h-10 w-10 -translate-x-[18px] -translate-y-1/2 place-items-center rounded-full bg-volt-500 text-xs font-bold text-night-950">⇆</span>
      </div>
      <span className="absolute left-3 top-3 rounded bg-night-950/80 px-2 py-1 text-xs font-bold uppercase">Before</span>
      <span className="absolute right-3 top-3 rounded bg-volt-500 px-2 py-1 text-xs font-bold uppercase text-night-950">After</span>
      <input type="range" min="0" max="100" value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Compare before and after" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
    </div>
  )
}
