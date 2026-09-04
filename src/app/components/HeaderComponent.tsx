import type { ReactNode } from "react";
import type { IndicatorData } from "../models/indicator";
import { Indicator } from "./Indicator";

interface HeaderComponentProps {
  title: ReactNode;
  indicators: IndicatorData[];
}

export function HeaderComponent({ title, indicators }: HeaderComponentProps) {
  return (
    <header className="mb-6 sm:mb-8 lg:mb-10">
      <h1 className="mb-6 break-words text-2xl text-center font-bold leading-tight sm:mb-8 sm:text-3xl lg:text-4xl">
        {title}
      </h1>

      <div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4"
        role="list"
      >
        {indicators.map((indicator) => (
          <div key={indicator.label} role="listitem">
            <Indicator {...indicator} />
          </div>
        ))}
      </div>
    </header>
  );
}
