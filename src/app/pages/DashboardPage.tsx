import { HeaderComponent } from '../components/HeaderComponent'
import { MedalChart } from '../components/MedalChart'
import { PageState } from '../components/PageState'
import { DataUnavailablePage } from './DataUnavailablePage'
import { useData } from '../hooks/useData'
import type { IndicatorData } from '../models/indicator'
import type { Olympic } from '../models/olympic'

function countOlympicEditions(olympics: Olympic[]) {
  return new Set(
    olympics.flatMap((olympic) =>
      olympic.participations.map((participation) => participation.year),
    ),
  ).size
}

export function DashboardPage() {
  const { data, isLoading } = useData()

  if (isLoading) {
    return (
      <PageState
        title="Chargement..."
        message="Récupération des données olympiques en cours."
      />
    )
  }

  if (data.length === 0) {
    return <DataUnavailablePage />
  }

  const indicators: IndicatorData[] = [
    {
      label: 'Pays participants',
      value: data.length,
    },
    {
      label: 'Éditions des JO',
      value: countOlympicEditions(data),
    },
  ]

  return (
    <main className="min-h-screen bg-gray-900 px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <HeaderComponent
          title="Historique des Jeux Olympiques - TéléSport"
          indicators={indicators}
        />

        <p className="mb-6 max-w-4xl text-base leading-relaxed text-gray-200 sm:mb-8 sm:text-lg">
          Bienvenue sur la page dédiée à l&apos;historique des Jeux Olympiques.
          Explorez les performances des pays au fil des années.
        </p>

        <MedalChart olympics={data} />

        <p className="mt-3 text-xs leading-relaxed text-gray-400 sm:text-sm">
          Cliquez sur un pays pour voir ses détails
        </p>
      </div>
    </main>
  )
}
