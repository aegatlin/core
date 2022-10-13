import { ChevronDown, Menu as MenuIcon } from 'lucide-react'
import { Menu } from '../core/Menu'
import { DemoWrapper } from './DemoWrapper'

function MenuItems() {
  const itemsData = [
    { id: 'one', value: 'Item One' },
    { id: 'two', value: 'Item Two' },
    { id: 'three', value: 'Item Three with a long name' },
  ]

  return (
    <div className="">
      {itemsData.map((i) => (
        <div key={i.id} className="flex rounded-2xl p-4 hover:bg-gray-100">
          <span onClick={() => console.log(i)}>{i.value}</span>
        </div>
      ))}
    </div>
  )
}

export function DemoMenu() {
  return (
    <DemoWrapper title="Menu">
      <div className="space-y-8">
        <p>Menu uses Dropdown internally.</p>
        <Menu>
          <div className="flex justify-end">
            <Menu.Button>
              <MenuIcon />
            </Menu.Button>
          </div>
          <Menu.Items>
            <MenuItems />
          </Menu.Items>
        </Menu>
      </div>
    </DemoWrapper>
  )
}
