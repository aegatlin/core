import { Card } from '../core/Card'

export function DemoWrapper({ title, children }) {
  return (
    <Card>
      <div className="w-60">
        <div className="mb-4 border-b pb-4 text-4xl">{title}</div>
        {children}
      </div>
    </Card>
  )
}
