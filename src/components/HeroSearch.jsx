import { useState, useRef, useEffect } from 'react'
import { Search } from 'lucide-react'

const suggestionsBank = [
  'iPhone 15 Pro Max',
  'Samsung S24 Ultra',
  'MacBook Air M3',
  'Gaming Laptops',
  'Inverter AC 1.5 Ton',
  '4K Smart TVs',
  'Budget Phones under 50k',
]

export default function HeroSearch({ onSubmit }) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const inputRef = useRef(null)

  useEffect(() => {
    if (!query) setSuggestions(suggestionsBank)
    else setSuggestions(suggestionsBank.filter(s => s.toLowerCase().includes(query.toLowerCase())))
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(query)
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className={`relative mx-auto max-w-4xl transition-transform ${focused ? 'scale-[1.02]' : 'scale-100'}`}
      >
        <div className={`flex items-center bg-white rounded-[24px] border-[4px] border-black px-4 sm:px-5 py-2 sm:py-3 shadow-[8px_8px_0_#000]`}>          
          <Search className="text-black/80" size={22} strokeWidth={2.75} />
          <div className="relative flex-1">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search mobiles, laptops, appliances… anything."
              className="w-full bg-transparent outline-none px-3 sm:px-4 text-lg sm:text-xl font-semibold tracking-tight text-black placeholder:text-black/40"
            />
            {/* Animated caret */}
            <span className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-[2px] bg-black animate-pulse opacity-60"></span>
          </div>
          <button
            type="submit"
            className="ml-2 sm:ml-3 px-3 sm:px-4 py-2 bg-black text-white font-bold rounded-[14px] border-[3px] border-black active:translate-y-[2px]"
          >
            GO
          </button>
        </div>
        {suggestions.length > 0 && (
          <div className="absolute mt-3 w-full bg-white border-[4px] border-black rounded-[20px] shadow-[8px_8px_0_#000] overflow-hidden">
            {suggestions.map((s, i) => (
              <button
                key={s}
                type="button"
                onMouseDown={() => {
                  setQuery(s)
                  onSubmit?.(s)
                }}
                className={`w-full text-left px-5 py-3 text-sm sm:text-base font-semibold ${i !== suggestions.length - 1 ? 'border-b-2 border-black/10' : ''} hover:bg-black/5`}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </form>
    </div>
  )
}
