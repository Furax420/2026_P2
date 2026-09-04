import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import type { Olympic } from '../models/olympic'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
)

interface MedalEvolutionChartProps {
  country: Olympic
}

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'white',
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
    x: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
}

export function MedalEvolutionChart({ country }: MedalEvolutionChartProps) {
  const participations = [...country.participations].sort(
    (left, right) => left.year - right.year,
  )

  const chartData: ChartData<'line'> = {
    labels: participations.map((participation) => participation.year.toString()),
    datasets: [
      {
        label: 'Nombre de médailles',
        data: participations.map((participation) => participation.medalsCount),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
      },
    ],
  }

  return (
    <section
      className="bg-gray-800 p-8 rounded-lg shadow-xl"
      aria-label={`Évolution du nombre de médailles pour ${country.country}`}
    >
      <div className="h-[400px]">
        <Line data={chartData} options={chartOptions} />
      </div>
    </section>
  )
}
