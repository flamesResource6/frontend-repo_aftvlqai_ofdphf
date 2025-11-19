import { useNavigate } from 'react-router-dom'
import HeroSearch from '../components/HeroSearch'
import ProfileButton from '../components/ProfileButton'
import ProductCard from '../components/ProductCard'
import IconSet from '../components/IconSet'

const products = [
  { title: 'iPhone 15 Pro', price: 499999, img: 'https://images.unsplash.com/photo-1695048139263-2fbc322ecdc1?q=80&w=800&auto=format&fit=crop', badge: 'value', highlight: true },
  { title: 'Galaxy S24 Ultra', price: 379999, img: 'https://images.unsplash.com/photo-1708446274674-67a4e3ce1a30?q=80&w=800&auto=format&fit=crop', badge: 'rated' },
  { title: 'MacBook Air M3', price: 289999, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop', badge: 'trend' },
  { title: 'Redmi Note 13 Pro', price: 89999, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
  { title: 'Haier Inverter AC 1.5T', price: 184999, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=800&auto=format&fit=crop', badge: 'value' },
  { title: 'TCL 55” 4K TV', price: 147999, img: 'https://images.unsplash.com/photo-1593359677879-8395d792d435?q=80&w=800&auto=format&fit=crop', badge: 'rated' },
]

export default function Home() {
  const navigate = useNavigate()
  const submit = (q) => navigate(`/search?q=${encodeURIComponent(q)}`)

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="flex items-center justify-between px-6 sm:px-10 py-6">
        <div className="font-black text-2xl tracking-tight">BHAO.PK</div>
        <ProfileButton />
      </header>

      <main className="px-6 sm:px-10">
        <section className="py-8 sm:py-16">
          <div className="mb-6 sm:mb-10">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.95]">The smartest way to shop in Pakistan.</h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-black/70">Compare prices across trusted stores. Clean, fast, unmistakably modern.</p>
          </div>
          <HeroSearch onSubmit={submit} />
          <div className="mt-10">
            <IconSet />
          </div>
        </section>

        <section className="py-8 sm:py-16">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Recommended</h2>
            <a href="#" className="text-sm font-black underline decoration-2 decoration-black/30 underline-offset-4 hover:decoration-black">See all</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </section>
      </main>

      <footer className="px-6 sm:px-10 py-12 border-t-4 border-black mt-12">
        <p className="text-xs font-black uppercase tracking-[0.2em]">BHAO.PK • Built with precision</p>
      </footer>
    </div>
  )
}
