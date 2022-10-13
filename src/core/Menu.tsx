import { Button } from './Button'
import { Dropdown } from './Dropdown'

function MenuRoot({ children }) {
  return <Dropdown>{children}</Dropdown>
}

function MenuButton({ children }) {
  return (
    <Dropdown.Input toggleOnClick>
      <Button onClick={() => null}>{children}</Button>
    </Dropdown.Input>
  )
}

function Items({ children }) {
  return <Dropdown.Items>{children}</Dropdown.Items>
}

export const Menu = Object.assign(MenuRoot, { Button: MenuButton, Items })
