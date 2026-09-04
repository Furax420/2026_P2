import { HeaderComponent } from '../components/HeaderComponent'
import { MedalEvolutionChart } from '../components/MedalEvolutionChart'
import type { IndicatorData } from '../models/indicator'
import type { Olympic } from '../models/olympic'

interface CountryDetailPageProps {
  country: Olympic
}

function sumBy(
  country: Olympic,
  selector: (participation: Olympic['participations'][number]) => number,
) {
  return country.participations.reduce(
    (total, participation) => total + selector(participation),
    0,
  )
}

export function CountryDetailPage({ country }: CountryDetailPageProps) {
  const indicators: IndicatorData[] = [
    {
      label: 'Participations',
      value: country.participations.length,
    },
    {
      label: 'Total médailles',
      value: sumBy(country, (participation) => participation.medalsCount),
    },
    {
      label: 'Total athlètes',
      value: sumBy(country, (participation) => participation.athleteCount),
    },
  ]

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <HeaderComponent title={country.country} indicators={indicators} />

        <MedalEvolutionChart country={country} />

        <p className="text-sm text-gray-400 mt-2">
          Données des dernières éditions des Jeux Olympiques
        </p>
      </div>
    </main>
  )
}
