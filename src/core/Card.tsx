export function Card({ children }) {
  return (
    <div className="overflow-hidden rounded-2xl border shadow-sm hover:border-gray-300">
      {children}
    </div>
  )
}
