import { useState } from 'react'

const options = [
  { key: 'asc', label: 'Low → High' },
  { key: 'desc', label: 'High → Low' },
  { key: 'value', label: 'Best Value' },
  { key: 'rating', label: 'Top Rated' },
  { key: 'popular', label: 'Most Popular' },
]

export default function SortBar({ onChange }) {
  const [active, setActive] = useState('value')

  const handle = (key) => {
    setActive(key)
    onChange?.(key)
  }

  return (
    <div className="inline-flex border-[4px] border-black rounded-[16px] overflow-hidden shadow-[8px_8px_0_#000] bg-white">
      {options.map((o) => (
        <button
          key={o.key}
          onClick={() => handle(o.key)}
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-extrabold border-r-2 border-black/10 last:border-r-0 transition-colors ${
            active === o.key ? 'bg-[#1F4EFF] text-white' : 'text-black hover:bg-black/5'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
