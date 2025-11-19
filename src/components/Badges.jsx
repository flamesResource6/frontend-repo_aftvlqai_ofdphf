export function Badge({ type = 'value', label }) {
  const styles = {
    value: 'bg-[#FFC400] text-black', // gold
    rated: 'bg-[#FFB300] text-black', // deep amber
    trend: 'bg-[#FF8A00] text-black', // saffron
  }
  const text = label || (type === 'value' ? 'BEST VALUE' : type === 'rated' ? 'TOP RATED' : 'TRENDING')
  return (
    <span className={`inline-block text-[10px] sm:text-xs font-black tracking-wide px-2.5 py-1 rounded-[6px] ${styles[type]} select-none shadow-[3px_3px_0_#000] border-2 border-black`}>{text}</span>
  )
}
