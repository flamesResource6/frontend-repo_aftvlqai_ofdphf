import { User } from 'lucide-react'

export default function ProfileButton({ onClick, dark }) {
  return (
    <button
      onClick={onClick}
      aria-label="Profile"
      className={`inline-flex items-center justify-center h-12 w-12 border-4 ${
        dark ? 'border-white text-white hover:bg-white/10' : 'border-black text-black hover:bg-black/5'
      } rounded-[18px] transition-colors relative overflow-hidden`}
    >
      <span className="absolute inset-0 pointer-events-none">
        <span className={`block h-full w-full ${dark ? 'bg-white/0' : 'bg-black/0'}`}></span>
      </span>
      <User size={22} strokeWidth={2.5} />
    </button>
  )
}
