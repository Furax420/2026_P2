import { useId, useState } from "react";
import { Link } from "react-router-dom";
import type { Olympic } from "../models/olympic";
import { CountryName } from "./CountryName";

interface CountryRankingProps {
  countries: Olympic[];
  currentCountryId: number;
}

interface RankedCountry {
  country: Olympic;
  totalMedals: number;
}

function getTotalMedals(country: Olympic) {
  return country.participations.reduce(
    (total, participation) => total + participation.medalsCount,
    0,
  );
}

function RankingMedal({ rank }: { rank: number }) {
  const medalStyles: Record<
    number,
    { fill: string; stroke: string; label: string }
  > = {
    1: { fill: "#F5C542", stroke: "#D9A514", label: "Médaille d’or" },
    2: { fill: "#D7DEE8", stroke: "#AAB4C3", label: "Médaille d’argent" },
    3: { fill: "#C9824B", stroke: "#9D5C2E", label: "Médaille de bronze" },
  };

  const medal = medalStyles[rank];

  if (!medal) {
    return <span className="font-semibold text-gray-300">{rank}</span>;
  }

  return (
    <span className="inline-flex items-center gap-2" aria-label={medal.label}>
      <svg viewBox="0 0 28 34" className="h-7 w-6 shrink-0" aria-hidden="true">
        <path d="M5 1h7l2 9-6 4z" fill="#2563EB" />
        <path d="M23 1h-7l-2 9 6 4z" fill="#DC2626" />
        <circle
          cx="14"
          cy="20"
          r="10"
          fill={medal.fill}
          stroke={medal.stroke}
          strokeWidth="2"
        />
        <path
          d="m14 14 1.8 3.7 4.1.6-3 2.9.7 4.1-3.6-1.9-3.6 1.9.7-4.1-3-2.9 4.1-.6z"
          fill="#FFFFFF"
          opacity="0.82"
        />
      </svg>
      <span className="sr-only">{rank}</span>
    </span>
  );
}

export function CountryRanking({
  countries,
  currentCountryId,
}: CountryRankingProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  const ranking: RankedCountry[] = countries
    .map((country) => ({
      country,
      totalMedals: getTotalMedals(country),
    }))
    .sort((a, b) => {
      if (b.totalMedals !== a.totalMedals) {
        return b.totalMedals - a.totalMedals;
      }

      return a.country.country.localeCompare(b.country.country, "fr");
    });

  return (
    <section className="mt-8" aria-labelledby={`${contentId}-title`}>
      <div className="hidden min-[1200px]:block">
        <h2
          id={`${contentId}-title`}
          className="text-xl font-bold text-white sm:text-2xl"
        >
          Classement des pays
        </h2>
        <p className="mt-1 text-sm text-gray-400">
          Classement selon le nombre total de médailles, toutes éditions
          confondues.
        </p>
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-left font-semibold text-white transition hover:bg-gray-700/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 min-[1200px]:hidden"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>
          Classement des pays
          <span className="ml-2 text-sm font-normal text-gray-400">
            ({countries.length})
          </span>
        </span>
        <svg
          viewBox="0 0 20 20"
          className={`h-5 w-5 shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="m5 7.5 5 5 5-5" />
        </svg>
      </button>

      <div
        id={contentId}
        className={`${isOpen ? "block" : "hidden"} mt-3 min-[1200px]:mt-4 min-[1200px]:block`}
      >
        <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-800/70 shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead className="bg-gray-800 text-xs uppercase tracking-wide text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="w-24 px-4 py-3 text-center sm:px-5"
                  >
                    Rang
                  </th>
                  <th scope="col" className="px-4 py-3 sm:px-5">
                    Pays
                  </th>
                  <th scope="col" className="px-4 py-3 text-right sm:px-5">
                    Total médailles
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {ranking.map(({ country, totalMedals }, index) => {
                  const rank = index + 1;
                  const isCurrentCountry = country.id === currentCountryId;

                  return (
                    <tr
                      key={country.id}
                      className={`transition ${
                        isCurrentCountry
                          ? "bg-blue-500/15 shadow-[inset_4px_0_0_#3b82f6]"
                          : "hover:bg-gray-700/55"
                      }`}
                    >
                      <td className="px-4 py-3 text-center sm:px-5 sm:py-4">
                        <div className="flex justify-center">
                          <RankingMedal rank={rank} />
                        </div>
                      </td>
                      <td className="px-4 py-3 sm:px-5 sm:py-4">
                        <Link
                          to={`/country/${country.id}`}
                          className="inline-flex max-w-full items-center gap-3 rounded-md font-semibold text-gray-100 transition hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                          aria-current={isCurrentCountry ? "page" : undefined}
                        >
                          <CountryName country={country.country} />
                          {isCurrentCountry && (
                            <span className="hidden rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-semibold text-blue-200 sm:inline">
                              Pays actuel
                            </span>
                          )}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-right text-base font-bold tabular-nums text-white sm:px-5 sm:py-4">
                        {totalMedals}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
