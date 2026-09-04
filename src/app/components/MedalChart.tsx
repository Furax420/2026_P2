import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'
import type { Olympic } from '../models/olympic'

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

const chartOptions: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: 'white',
      },
    },
  },
}

function getTotalMedals(olympic: Olympic) {
  return olympic.participations.reduce(
    (total, participation) => total + participation.medalsCount,
    0,
  )
}

export function MedalChart({ olympics }: MedalChartProps) {
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

  return (
    <section
      className="bg-gray-800 p-8 rounded-lg shadow-xl"
      aria-label="Répartition du nombre total de médailles par pays"
    >
      <div className="h-[400px]">
        <Pie data={chartData} options={chartOptions} />
      </div>
    </section>
  )
}
