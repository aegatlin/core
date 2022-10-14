import { Button } from '../src/core/Button'
import { Card } from '../src/core/Card'
import { Header } from '../src/core/Header'
import { DemoModal } from '../src/demo/DemoModal'
import { DemoDropdown } from '../src/demo/DemoDropdown'
import { DemoInputText } from '../src/demo/DemoInputText'
import { DemoMenu } from '../src/demo/DemoMenu'
import { DemoRadioGroup } from '../src/demo/DemoRadioGroup'
import { DemoSearch } from '../src/demo/DemoSearch'
import { DemoWrapper } from '../src/demo/DemoWrapper'

function DemoButton() {
  return (
    <DemoWrapper title="Button">
      <div className="flex flex-col space-y-8">
        <Button onClick={() => null}>Button</Button>
        <Button disabled onClick={() => null}>
          Disabled Button
        </Button>
      </div>
    </DemoWrapper>
  )
}

function DemoCard() {
  return (
    <DemoWrapper title="Card">
      <Card>
        <p className="p-8">card content</p>
      </Card>
    </DemoWrapper>
  )
}

export default function Index() {
  return (
    <>
      <Header />
      <div className="my-16 mx-32 flex flex-wrap justify-center gap-8">
        <DemoModal />
        <DemoCard />
        <DemoButton />
        <DemoDropdown />
        <DemoMenu />
        <DemoRadioGroup />
        <DemoSearch />
        <DemoInputText />
      </div>
    </>
  )
}
