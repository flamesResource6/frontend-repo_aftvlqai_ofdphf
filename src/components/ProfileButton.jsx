import { User } from 'lucide-react'

export default function ProfileButton({ onClick, dark }) {
  return (
    <button
      onClick={onClick}
      aria-label="Profile"
      className={`inline-flex items-center justify-center h-12 w-12 border-4 ${
        dark ? 'border-white text-white hover:bg-white/10' : 'border-black text-black hover:bg-black/5'
      } rounded-[18px] transition-colors relative overflow-hidden active:translate-y-[1px]`}
    >
      {/* ripple effect */}
      <span className="absolute inset-0 pointer-events-none">
        <span className={`absolute inset-0 rounded-[14px] scale-0 opacity-0 ${
          dark ? 'bg-white/20' : 'bg-black/10'
        } animate-[ripple_700ms_ease-out_forwards]`}></span>
      </span>
      <User size={22} strokeWidth={2.5} />
    </button>
  )
}
