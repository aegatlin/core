import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Dropdown } from './Dropdown'

export function Header() {
  const menuItems = [{ name: 'About', href: '/about' }]

  return (
    <header className="flex items-center justify-between border-b py-8 px-16 hover:border-gray-300">
      <div className="text-4xl">
        <Link href={'/'}>
          <a>Core</a>
        </Link>
      </div>
      <div className="text-lg">
        <div className="hidden space-x-12 md:flex">
          {menuItems.map(({ name, href }) => (
            <div key={name + href} className="">
              <Link href={href}>{name}</Link>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <Dropdown items={menuItems}>
            <Menu />
          </Dropdown>
        </div>
      </div>
    </header>
  )
}
