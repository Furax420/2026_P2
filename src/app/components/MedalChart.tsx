import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useNavigate } from 'react-router-dom'
import type { Olympic } from '../models/olympic'
import { CountryName } from './CountryName'
import { MissingDataWarning } from './MissingDataWarning'

ChartJS.register(ArcElement, Tooltip, Legend)

interface MedalChartProps {
  olympics: Olympic[]
}

const BACKGROUND_COLORS = [
  'rgba(255, 99, 132, 0.6)',
  'rgba(54, 162, 235, 0.6)',
  'rgba(255, 206, 86, 0.6)',
  'rgba(75, 192, 192, 0.6)',
  'rgba(153, 102, 255, 0.6)',
]

const BORDER_COLORS = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
]

function getTotalMedals(olympic: Olympic) {
  return olympic.participations.reduce(
    (total, participation) => total + participation.medalsCount,
    0,
  )
}

export function MedalChart({ olympics }: MedalChartProps) {
  const navigate = useNavigate()

  const chartData: ChartData<'pie'> = {
    labels: olympics.map((olympic) => olympic.country),
    datasets: [
      {
        label: 'Total des médailles',
        data: olympics.map(getTotalMedals),
        backgroundColor: BACKGROUND_COLORS,
        borderColor: BORDER_COLORS,
        borderWidth: 1,
      },
    ],
  }

  const chartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    onClick: (_event, activeElements) => {
      const clickedElement = activeElements[0]

      if (!clickedElement) {
        return
      }

      const country = olympics[clickedElement.index]

      if (country) {
        navigate(`/country/${country.id}`)
      }
    },
  }

  return (
    <section
      className="rounded-lg bg-gray-800 p-4 shadow-xl sm:p-6 lg:p-8"
      aria-label="Répartition du nombre total de médailles par pays"
    >
      <div className="h-[280px] w-full sm:h-[360px] lg:h-[440px]">
        <Pie data={chartData} options={chartOptions} />
      </div>

      <ul
        className="mt-5 grid grid-cols-1 gap-2 sm:mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        aria-label="Légende des pays"
      >
        {olympics.map((olympic, index) => (
          <li key={olympic.id} className="min-w-0">
            <button
              type="button"
              onClick={() => navigate(`/country/${olympic.id}`)}
              className="flex min-h-11 w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-gray-100 transition hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              aria-label={`Voir le détail de ${olympic.country}${
                olympic.participations.length === 0 ? ', informations manquantes' : ''
              }`}
            >
              {olympic.participations.length === 0 ? (
                <MissingDataWarning />
              ) : (
                <span
                  className="h-3 w-3 shrink-0 rounded-full border border-white/20"
                  style={{ backgroundColor: BACKGROUND_COLORS[index] }}
                  aria-hidden="true"
                />
              )}
              <CountryName country={olympic.country} className="min-w-0" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
