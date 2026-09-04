import type { IndicatorData } from "../models/indicator";

type IndicatorProps = IndicatorData;

export function Indicator({ label, value }: IndicatorProps) {
  return (
    <div className="h-full rounded-lg bg-gray-800 px-4 py-1 text-center shadow-lg sm:p-5 lg:p-6">
      <h3 className="mb-2 text-base font-semibold text-gray-200 sm:text-lg lg:text-xl">
        {label}
      </h3>
      <p className="text-3xl font-bold text-blue-400 sm:text-4xl">{value}</p>
    </div>
  );
}
