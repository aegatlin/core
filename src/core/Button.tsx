import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  onClick: () => void
}

export function Button({ children, disabled, onClick }: ButtonProps) {
  return (
    <button
      className="flex w-max space-x-1 focus:ring rounded-full bg-blue-500 p-4 text-white shadow-md hover:enabled:bg-blue-600 hover:enabled:shadow-xl active:enabled:shadow-lg disabled:bg-slate-400"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
