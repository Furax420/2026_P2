import type { ReactNode } from 'react'
import type { IndicatorData } from '../models/indicator'
import { Indicator } from './Indicator'

interface HeaderComponentProps {
  title: ReactNode
  indicators: IndicatorData[]
}

export function HeaderComponent({ title, indicators }: HeaderComponentProps) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {indicators.map((indicator) => (
          <div key={indicator.label} role="listitem">
            <Indicator {...indicator} />
          </div>
        ))}
      </div>
    </header>
  )
}
