import { Link, Navigate, useParams } from 'react-router-dom'
import { CountryName } from '../components/CountryName'
import { HeaderComponent } from '../components/HeaderComponent'
import { MedalEvolutionChart } from '../components/MedalEvolutionChart'
import { PageState } from '../components/PageState'
import { useData } from '../hooks/useData'
import type { IndicatorData } from '../models/indicator'
import type { Olympic } from '../models/olympic'

function sumBy(
  country: Olympic,
  selector: (participation: Olympic['participations'][number]) => number,
) {
  return country.participations.reduce(
    (total, participation) => total + selector(participation),
    0,
  )
}

function parseCountryId(id: string | undefined) {
  if (!id) {
    return null
  }

  const countryId = Number(id)

  return Number.isInteger(countryId) && countryId > 0 ? countryId : null
}

export function CountryDetailPage() {
  const { id } = useParams()
  const { data, isLoading } = useData()

  if (isLoading) {
    return (
      <PageState
        title="Chargement..."
        message="Récupération des informations du pays en cours."
      />
    )
  }

  if (data.length === 0) {
    return (
      <PageState
        title="Aucune donnée"
        message="Les informations du pays ne sont pas disponibles."
        role="alert"
      >
        <Link
          to="/"
          className="inline-flex rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          Retour au Dashboard
        </Link>
      </PageState>
    )
  }

  const countryId = parseCountryId(id)
  const country = countryId
    ? data.find((olympic) => olympic.id === countryId)
    : undefined

  if (!country) {
    return <Navigate to="/404" replace />
  }

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
        <Link
          to="/"
          className="mb-6 inline-flex rounded-md border border-gray-600 px-4 py-2 font-semibold text-gray-100 hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          aria-label="Retour au Dashboard"
        >
          ← Retour
        </Link>

        <HeaderComponent
          title={<CountryName country={country.country} />}
          indicators={indicators}
        />

        <MedalEvolutionChart country={country} />

        <p className="text-sm text-gray-400 mt-2">
          Évolution des médailles au fil des participations olympiques
        </p>
      </div>
    </main>
  )
}
