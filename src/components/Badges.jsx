export function Badge({ type = 'value', label }) {
  const styles = {
    value: 'bg-[#00FF57] text-black',
    rated: 'bg-[#1F4EFF] text-white',
    trend: 'bg-[#FF8A00] text-black',
  }
  const text = label || (type === 'value' ? 'BEST VALUE' : type === 'rated' ? 'TOP RATED' : 'TRENDING')
  return (
    <span className={`inline-block text-[10px] sm:text-xs font-black tracking-wide px-2.5 py-1 rounded-[6px] ${styles[type]} select-none`}>{text}</span>
  )
}
