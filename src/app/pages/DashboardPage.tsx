import { HeaderComponent } from '../components/HeaderComponent'
import { MedalChart } from '../components/MedalChart'
import { PageState } from '../components/PageState'
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
    return (
      <PageState
        title="Aucune donnée"
        message="Aucune donnée olympique n'est disponible pour le moment."
      />
    )
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
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <HeaderComponent
          title="Historique des Jeux Olympiques - TéléSport"
          indicators={indicators}
        />

        <p className="text-lg mb-8">
          Bienvenue sur la page dédiée à l&apos;historique des Jeux Olympiques.
          Explorez les performances des pays au fil des années.
        </p>

        <MedalChart olympics={data} />

        <p className="text-sm text-gray-400 mt-2">
          Cliquez sur un pays pour voir ses détails
        </p>
      </div>
    </main>
  )
}
