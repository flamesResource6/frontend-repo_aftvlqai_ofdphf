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
  const [open, setOpen] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const inputRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!query) setSuggestions(suggestionsBank)
    else setSuggestions(suggestionsBank.filter(s => s.toLowerCase().includes(query.toLowerCase())))
  }, [query])

  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setOpen(false)
    onSubmit?.(query)
  }

  const showDropdown = open && query.trim().length > 0 && suggestions.length > 0

  const accentColors = ['#FFB300', '#FF8A00', '#FFC400'] // yellows/saffron

  return (
    <div className="w-full" ref={containerRef}>
      <form
        onSubmit={handleSubmit}
        className={`relative mx-auto max-w-4xl transition-transform ${focused ? 'scale-[1.02]' : 'scale-100'}`}
      >
        <div className={`flex items-center bg-white rounded-[24px] border-[4px] border-black px-4 sm:px-5 py-2 sm:py-3 shadow-[8px_8px_0_#000]`}>          
          <Search className="text-black/80 animate-pop-in" size={22} strokeWidth={2.75} />
          <div className="relative flex-1">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
              onFocus={() => { setFocused(true); setOpen(true) }}
              onBlur={() => setFocused(false)}
              placeholder="Search mobiles, laptops, appliances… anything."
              className="w-full bg-transparent outline-none px-3 sm:px-4 text-lg sm:text-xl font-semibold tracking-tight text-black placeholder:text-black/40"
            />
            {/* Animated caret */}
            <span className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-[2px] bg-black opacity-60 animate-caret"></span>
            {/* Underline grow accent */}
            <span className={`pointer-events-none absolute left-3 right-3 -bottom-1 h-1 rounded-[4px] origin-left transition-transform ${focused ? 'scale-x-100' : 'scale-x-0'}`} style={{ background: '#FFB300' }} />
          </div>
          <button
            type="submit"
            className="ml-2 sm:ml-3 px-3 sm:px-4 py-2 bg-[#FFB300] text-black font-black rounded-[14px] border-[3px] border-black active:translate-y-[2px] hover:shadow-[4px_4px_0_#000] transition-shadow"
          >
            GO
          </button>
        </div>
        {showDropdown && (
          <div className="absolute mt-3 w-full bg-white border-[4px] border-black rounded-[20px] shadow-[8px_8px_0_#000] overflow-hidden animate-drop-in">
            {suggestions.map((s, i) => (
              <button
                key={s}
                type="button"
                onMouseDown={() => {
                  setQuery(s)
                  setOpen(false)
                  onSubmit?.(s)
                }}
                className={`w-full text-left px-5 py-3 text-sm sm:text-base font-semibold ${i !== suggestions.length - 1 ? 'border-b-2 border-black/10' : ''} hover:bg-black/5 flex items-center gap-3`}
              >
                <span className="h-3 w-3 rounded-[4px] border-2 border-black" style={{ background: accentColors[i % accentColors.length] }} />
                {s}
              </button>
            ))}
          </div>
        )}
      </form>
    </div>
  )
}
