import { useCallback, useEffect, useRef } from 'react'
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

const MOBILE_CHART_MAX_WIDTH = 767
const TOOLTIP_AUTO_CLOSE_DELAY = 4000

export function MedalEvolutionChart({ country }: MedalEvolutionChartProps) {
  const chartRef = useRef<ChartJS<'line'> | null>(null)
  const tooltipTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTooltipTimeout = useCallback(() => {
    if (tooltipTimeoutRef.current !== null) {
      clearTimeout(tooltipTimeoutRef.current)
      tooltipTimeoutRef.current = null
    }
  }, [])

  const clearChartFocus = useCallback(
    (chart: ChartJS<'line'> | null = chartRef.current) => {
      clearTooltipTimeout()

      if (!chart) {
        return
      }

      chart.setActiveElements([])
      chart.tooltip?.setActiveElements([], { x: 0, y: 0 })
      chart.update('none')
    },
    [clearTooltipTimeout],
  )

  const scheduleTooltipClose = useCallback(
    (chart: ChartJS<'line'>) => {
      clearTooltipTimeout()

      tooltipTimeoutRef.current = setTimeout(() => {
        clearChartFocus(chart)
      }, TOOLTIP_AUTO_CLOSE_DELAY)
    },
    [clearChartFocus, clearTooltipTimeout],
  )

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const chart = chartRef.current

      if (!chart || !(event.target instanceof Node)) {
        return
      }

      if (!chart.canvas.contains(event.target)) {
        clearChartFocus(chart)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      clearTooltipTimeout()
    }
  }, [clearChartFocus, clearTooltipTimeout])

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
        pointRadius: (context) =>
          context.chart.width <= MOBILE_CHART_MAX_WIDTH ? 6 : 3,
        pointHoverRadius: (context) =>
          context.chart.width <= MOBILE_CHART_MAX_WIDTH ? 8 : 5,
        pointHitRadius: (context) =>
          context.chart.width <= MOBILE_CHART_MAX_WIDTH ? 14 : 8,
        pointBorderWidth: (context) =>
          context.chart.width <= MOBILE_CHART_MAX_WIDTH ? 2 : 1,
      },
    ],
  }

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'nearest',
      intersect: true,
    },
    onClick: (_event, elements, chart) => {
      if (elements.length === 0) {
        clearChartFocus(chart)
        return
      }

      scheduleTooltipClose(chart)
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
          boxWidth: 18,
          boxHeight: 8,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
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
          autoSkip: true,
          maxRotation: 0,
          maxTicksLimit: 6,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  }

  return (
    <section
      className="rounded-lg bg-gray-800 p-4 shadow-xl sm:p-6 lg:p-8"
      aria-label={`Évolution du nombre de médailles pour ${country.country}`}
    >
      <div className="h-[280px] w-full sm:h-[360px] lg:h-[440px]">
        <Line ref={chartRef} data={chartData} options={chartOptions} />
      </div>
    </section>
  )
}
