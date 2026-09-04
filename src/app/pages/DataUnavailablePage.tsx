import { Link } from 'react-router-dom'

interface DataUnavailablePageProps {
  countryName?: string
}

export function DataUnavailablePage({ countryName }: DataUnavailablePageProps) {
  const message = countryName
    ? `Les résultats de ${countryName} sont bien référencés, mais les données nécessaires à leur affichage sont absentes.`
    : "Les résultats olympiques n'ont pas pu être affichés car aucune donnée exploitable n'est disponible."

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 px-4 py-8 text-white sm:px-6 sm:py-12">
      <section
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 p-5 text-center shadow-2xl sm:p-8 md:p-12"
        role="alert"
        aria-labelledby="missing-data-title"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm sm:tracking-[0.3em]">
          Résultats indisponibles
        </p>

        <div
          className="mx-auto my-7 w-full max-w-md rounded-2xl border border-gray-600 bg-gray-900 p-4 shadow-inner sm:my-8 sm:p-5"
          aria-hidden="true"
        >
          <div className="mb-4 flex items-center justify-between border-b border-gray-700 pb-3">
            <span className="text-left text-xs font-semibold uppercase tracking-wider text-gray-400 sm:text-sm">
              Tableau des résultats
            </span>
            <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-xs font-bold text-cyan-300">
              --:--
            </span>
          </div>

          <div className="space-y-3">
            {[1, 2, 3].map((position) => (
              <div
                key={position}
                className="grid grid-cols-[2rem_1fr_4rem] items-center gap-3 rounded-lg bg-gray-800 px-3 py-3 sm:grid-cols-[2.5rem_1fr_5rem]"
              >
                <span className="font-black text-gray-500">{position}</span>
                <span className="h-3 rounded-full bg-gray-700" />
                <span className="text-right font-mono text-sm font-bold text-gray-500 sm:text-base">
                  ---
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-cyan-300 sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            En attente de données
          </div>
        </div>

        <h1
          id="missing-data-title"
          className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl"
        >
          Le tableau d&apos;affichage est momentanément vide.
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
          {message}
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:mt-8 sm:w-auto sm:text-base"
        >
          ← Retour au Dashboard
        </Link>
      </section>
    </main>
  )
}
