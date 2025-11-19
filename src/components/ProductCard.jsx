import { useState } from 'react'
import { Badge } from './Badges'

export default function ProductCard({ title, price, img, badge, highlight }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative bg-white rounded-[20px] border-[4px] ${
        highlight ? 'border-[#00FF57]' : 'border-black'
      } shadow-[12px_12px_0_#000] p-4 sm:p-5 transition-transform will-change-transform ${
        hovered ? '-translate-y-1' : 'translate-y-0'
      }`}
    >
      {badge && (
        <div className="absolute -top-3 -left-3">
          <Badge type={badge} />
        </div>
      )}

      {/* playful corner accents */}
      <span className="pointer-events-none absolute -top-2 right-4 h-2 w-8 bg-[#1F4EFF] border-2 border-black rounded-[6px] rotate-2 opacity-80"></span>
      <span className="pointer-events-none absolute -bottom-2 left-5 h-2 w-6 bg-[#FF8A00] border-2 border-black rounded-[6px] -rotate-3 opacity-80"></span>

      <div className="aspect-[4/3] bg-neutral-100 rounded-[12px] border-2 border-black flex items-center justify-center overflow-hidden">
        {img ? (
          <img src={img} alt={title} className="object-contain h-full w-full transition-transform duration-200 group-hover:scale-[1.03]" />
        ) : (
          <div className="h-10 w-10 bg-black/10 rounded-[8px]"></div>
        )}
      </div>
      <div className="mt-3">
        <h3 className="text-base sm:text-lg font-black tracking-tight text-black line-clamp-1 group-hover:underline decoration-2 underline-offset-4">{title}</h3>
        <p className="text-2xl sm:text-3xl font-extrabold text-black mt-1">Rs {price.toLocaleString()}</p>
      </div>
    </div>
  )
}
