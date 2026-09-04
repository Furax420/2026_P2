import type { IndicatorData } from '../models/indicator'

type IndicatorProps = IndicatorData

export function Indicator({ label, value }: IndicatorProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <h3 className="text-xl font-semibold mb-2">{label}</h3>
      <p className="text-4xl font-bold text-blue-400">{value}</p>
    </div>
  )
}
