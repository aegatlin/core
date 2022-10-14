import { useState } from 'react'
import { Modal as Modal } from '../core/Modal'
import { Button } from '../core/Button'
import { Card } from '../core/Card'
import { DemoWrapper } from './DemoWrapper'

export function DemoModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DemoWrapper title="Modal">
      <Button onClick={() => setIsOpen(true)}>Show Modal</Button>
      <Modal isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <Card>
          <div className="flex flex-col items-center space-y-8 bg-white p-8">
            <Button onClick={() => null}>Click here to do nothing</Button>
          </div>
        </Card>
      </Modal>
    </DemoWrapper>
  )
}

// export function DemoModal() {
//   const [show, setShow] = useState(false)

//   return (
//     <DemoWrapper>
//       <Button >Click to show Modal</Button>
//       <Modal>
//         <div className="flex flex-col items-center space-y-8 bg-white p-8">
//           <p>Hello! Click the backdrop to close it</p>
//           <Button onClick={() => null}>Click here to do nothing</Button>
//         </div>
//       </Modal>
//     </DemoWrapper>
//   )
// }

// export function Modal({ children }) {
//   const [show, setShow] = useState(false)

//   if (show) return null
//   return <Backdrop onClick={() => setShow(false)}>{children}</Backdrop>
// }
