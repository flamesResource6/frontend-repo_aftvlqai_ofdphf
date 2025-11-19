import { useState } from 'react'

export default function Filters({ onChange }) {
  const [price, setPrice] = useState([0, 300000])
  const [inStock, setInStock] = useState(false)
  const [stores, setStores] = useState({ daraz: true, ishopping: false, mega: false })

  const emit = (next) => onChange?.(next || { price, inStock, stores })

  const toggleStore = (k) => {
    const next = { ...stores, [k]: !stores[k] }
    setStores(next)
    emit({ price, inStock, stores: next })
  }

  return (
    <aside className="sticky top-0 space-y-6">
      <h3 className="text-xs uppercase tracking-[0.2em] font-black text-black/60">Filters</h3>

      <div className="bg-white border-[4px] border-black rounded-[16px] p-4 shadow-[8px_8px_0_#000]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-extrabold">Price</span>
          <span className="text-xs font-black">Rs {price[0].toLocaleString()} – {price[1].toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="0"
          max="300000"
          value={price[0]}
          onChange={(e) => { const v=[+e.target.value, price[1]]; setPrice(v); emit({ price: v, inStock, stores }) }}
          className="w-full accent-black"
        />
        <input
          type="range"
          min="0"
          max="300000"
          value={price[1]} 
          onChange={(e) => { const v=[price[0], +e.target.value]; setPrice(v); emit({ price: v, inStock, stores }) }}
          className="w-full accent-black mt-2"
        />
      </div>

      <div className="bg-white border-[4px] border-black rounded-[16px] p-4 shadow-[8px_8px_0_#000]">
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={inStock} onChange={(e) => { setInStock(e.target.checked); emit({ price, inStock: e.target.checked, stores }) }} className="h-5 w-5 border-2 border-black rounded-[6px] appearance-none checked:bg-black" />
          <span className="text-sm font-extrabold">In Stock</span>
        </label>
      </div>

      <div className="bg-white border-[4px] border-black rounded-[16px] p-4 shadow-[8px_8px_0_#000]">
        <p className="text-sm font-extrabold mb-3">Stores</p>
        {Object.keys(stores).map((k) => (
          <label key={k} className="flex items-center justify-between py-2 border-b-2 border-black/10 last:border-b-0">
            <span className="text-sm font-semibold capitalize">{k}</span>
            <button
              onClick={() => toggleStore(k)}
              className={`h-7 w-14 border-[3px] border-black rounded-[12px] relative transition-colors ${stores[k] ? 'bg-[#FFC400]' : 'bg-white'}`}
            >
              <span className={`absolute top-1/2 -translate-y-1/2 ${stores[k] ? 'left-7' : 'left-1'} h-4 w-4 bg-black rounded-[6px]`}></span>
            </button>
          </label>
        ))}
      </div>
    </aside>
  )
}
