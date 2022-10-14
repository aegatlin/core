import { MouseEvent, ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClick: (e: MouseEvent) => void
  children: ReactNode
}

export function Modal({ isOpen, onClick, children }: ModalProps) {
  if (!isOpen) return null

  const handleClick = (e: MouseEvent) => {
    const backdropEl = e.currentTarget
    const clickedEl = e.target
    const isBackdropClicked = backdropEl == clickedEl
    if (isBackdropClicked) onClick(e)
  }

  return (
    <div
      tabIndex={-1}
      onClick={handleClick}
      className="fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center bg-black/40"
    >
      {children}
    </div>
  )
}
