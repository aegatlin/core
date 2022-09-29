import Link from 'next/link'
import { Card } from '../src/core/Card'
import { Page } from '../src/core/Page'

export default function AboutPage() {
  return (
    <Page>
      <Card>
        <div className="flex flex-col space-y-4">
          <p>This is an experiment in component reusability. More to come.</p>
          <p>
            This is a{' '}
            <Link href="https://gatlin.io">
              <a className="text-blue-500">gatlin.io</a>
            </Link>{' '}
            project.
          </p>
        </div>
      </Card>
    </Page>
  )
}
