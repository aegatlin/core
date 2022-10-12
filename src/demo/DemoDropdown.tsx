import { ChevronDown } from 'lucide-react'
import { Dropdown } from '../core/Dropdown'
import { DemoWrapper } from './DemoWrapper'

export function DemoDropdown() {
  return (
    <DemoWrapper title="Dropdown">
      <div className="flex flex-col items-end space-y-8">
        <Dropdown
          items={[
            { name: 'Item One', href: '/' },
            { name: 'Item Two', href: '/' },
            { name: 'Item Three with a long name', href: '/' },
          ]}
        >
          <div className="flex space-x-2">
            <span>Dropdown Menu</span>
            <ChevronDown />
          </div>
        </Dropdown>
      </div>
    </DemoWrapper>
  )
}
