import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import HeroSearch from '../components/HeroSearch'
import Filters from '../components/Filters'
import ProductCard from '../components/ProductCard'
import SortBar from '../components/SortBar'

const all = [
  { title: 'iPhone 15 Pro', price: 499999, rating: 4.8, badge: 'value', img: 'https://images.unsplash.com/photo-1695048139263-2fbc322ecdc1?q=80&w=800&auto=format&fit=crop' },
  { title: 'Galaxy S24 Ultra', price: 379999, rating: 4.7, badge: 'rated', img: 'https://images.unsplash.com/photo-1708446274674-67a4e3ce1a30?q=80&w=800&auto=format&fit=crop' },
  { title: 'Redmi Note 12', price: 59999, rating: 4.3, badge: 'trend', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
  { title: 'Realme GT', price: 119999, rating: 4.4, img: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=800&auto=format&fit=crop' },
  { title: 'Infinix Hot 30', price: 38999, rating: 4.0, img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop' },
]

export default function SearchPage() {
  const [params] = useSearchParams()
  const q = params.get('q') || ''
  const [sort, setSort] = useState('value')
  const [filter, setFilter] = useState(null)

  const items = useMemo(() => {
    let arr = all.filter(i => i.title.toLowerCase().includes(q.toLowerCase()))
    if (filter?.price) arr = arr.filter(i => i.price >= filter.price[0] && i.price <= filter.price[1])
    if (sort === 'asc') arr = arr.slice().sort((a,b) => a.price - b.price)
    if (sort === 'desc') arr = arr.slice().sort((a,b) => b.price - a.price)
    if (sort === 'rating') arr = arr.slice().sort((a,b) => b.rating - a.rating)
    if (sort === 'popular') arr = arr // placeholder
    if (sort === 'value') arr = arr.slice().sort((a,b) => (a.price/(a.rating||1)) - (b.price/(b.rating||1)))
    return arr
  }, [q, sort, filter])

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b-[4px] border-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4">
          <HeroSearch onSubmit={() => {}} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        <Filters onChange={setFilter} />
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Compare Results</h2>
            <SortBar onChange={setSort} />
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {items.map((p) => (
              <ProductCard key={p.title} {...p} highlight={p.price < 100000 && p.rating > 4.2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
