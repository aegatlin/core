import { ChevronDown } from 'lucide-react'
import { Button } from '../src/core/Button'
import { Card } from '../src/core/Card'
import { Dropdown } from '../src/core/Dropdown'
import { Page } from '../src/core/Page'
import { RadioGroup } from '../src/core/RadioGroup'

function DemoCard({ title, children }) {
  return (
    <Card>
      <div className="w-60">
        <div className="mb-4 border-b pb-4 text-4xl">{title}</div>
        {children}
      </div>
    </Card>
  )
}

export default function Index() {
  return (
    <Page>
      <div className="flex flex-wrap justify-center gap-8">
        <DemoCard title="Card">card content</DemoCard>
        <DemoCard title="Button">
          <div className="flex flex-col space-y-8">
            <Button onClick={() => null}>Button</Button>
            <Button disabled onClick={() => null}>
              Disabled Button
            </Button>
          </div>
        </DemoCard>
        <DemoCard title="Dropdown">
          <div className="flex flex-col items-end space-y-8">
            <Dropdown
              items={[
                { name: 'Item One', href: '/' },
                { name: 'Item Two', href: '/' },
              ]}
            >
              <div className="flex space-x-2">
                <span>Dropdown Menu</span>
                <ChevronDown />
              </div>
            </Dropdown>
          </div>
        </DemoCard>
        <DemoCard title="Radio Group">
          <div className="flex flex-col space-y-4">
            <RadioGroup
              label="Radio Group"
              options={[{ name: 'Option One' }, { name: 'Option Two' }]}
            />
            <RadioGroup
              label="Disabled Radio Group"
              disabled
              options={[
                { name: 'Disabled Option One' },
                { name: 'Disabled Option Two' },
              ]}
            />
          </div>
        </DemoCard>
      </div>
    </Page>
  )
}
