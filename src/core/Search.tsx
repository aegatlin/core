import { Loader, Search as SearchIcon } from 'lucide-react'
import { ReactNode, useState } from 'react'
import { InputText } from './InputText'

interface SearchProps {
  query: string
  updateQuery: (q: string) => void
  isFetching: boolean
  results: ReactNode[]
}

export function Search({
  query,
  updateQuery,
  isFetching,
  results,
}: SearchProps) {
  const [isFocused, setIsFocused] = useState(false)
  const isResults = results.length > 0
  const isOpen = isFocused && query

  return (
    <div className="relative">
      <div className="relative flex items-center justify-between">
        <InputText
          value={query}
          placeholder={'try "is"...'}
          onChange={(e) => updateQuery(e.target.value)}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
        <div className="absolute right-0 ml-2 text-gray-400">
          <SearchIcon />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-20 w-full rounded-2xl border bg-white p-4 shadow">
          {isFetching ? (
            <div className="flex h-32 items-center justify-center">
              <Loader className="animate-spin" />
            </div>
          ) : isResults ? (
            <div>{results}</div>
          ) : (
            <div className="flex h-32 items-center justify-center">
              No Results
            </div>
          )}
        </div>
      )}
    </div>
  )
}
