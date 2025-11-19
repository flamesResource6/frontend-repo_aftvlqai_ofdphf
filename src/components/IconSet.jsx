import { Search, User, Star, TrendingUp, BadgeDollarSign } from 'lucide-react'

export default function IconSet() {
  const icons = [
    { Icon: Search, label: 'Search' },
    { Icon: User, label: 'Profile' },
    { Icon: Star, label: 'Top Rated' },
    { Icon: TrendingUp, label: 'Trending' },
    { Icon: BadgeDollarSign, label: 'Best Value' },
  ]
  return (
    <div className="grid grid-cols-5 gap-4">
      {icons.map(({ Icon, label }) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 border-[4px] border-black rounded-[14px] flex items-center justify-center shadow-[6px_6px_0_#000] bg-white">
            <Icon strokeWidth={2.75} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-wider">{label}</span>
        </div>
      ))}
    </div>
  )
}
