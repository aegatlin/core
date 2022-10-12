import Link from 'next/link'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { Button } from './Button'

interface DropdownItem {
  href: string
  name: string
}

interface DropdownProps {
  items: DropdownItem[]
  children: ReactNode
}

function useDropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const itemsRef = useRef(null)

  useEffect(() => {
    isOpen && itemsRef.current.focus()
  }, [isOpen])

  return {
    isOpen,
    toggle: () => setIsOpen(!isOpen),
    close: () => setIsOpen(false),
    itemsRef,
  }
}

export function Dropdown(props: DropdownProps) {
  const { isOpen, toggle, close, itemsRef } = useDropdown(props)

  return (
    <div className="relative">
      <Button onClick={() => toggle()}>{props.children}</Button>
      {isOpen && (
        <div
          ref={itemsRef}
          className="absolute right-0 mt-4 w-full  rounded-2xl border bg-white p-4"
          tabIndex={-1}
          onBlur={() => close()}
        >
          {props.items.map(({ name, href }) => (
            <div
              key={href + name}
              className="flex rounded-2xl p-4 hover:bg-gray-100"
              tabIndex={0}
            >
              <Link href={href}>{name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
