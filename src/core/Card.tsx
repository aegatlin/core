export function Card({ children }) {
  return (
    <div className="rounded-2xl border p-8 shadow-sm hover:border-gray-300">
      {children}
    </div>
  )
}
