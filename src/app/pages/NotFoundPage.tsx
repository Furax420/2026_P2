import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 px-4 py-8 text-white sm:px-6 sm:py-12">
      <section
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 p-5 text-center shadow-2xl sm:p-8 md:p-12"
        aria-labelledby="not-found-title"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 sm:text-sm sm:tracking-[0.3em]">
          Erreur 404
        </p>

        <div
          className="mx-auto my-7 flex h-32 max-w-xs items-end justify-center gap-1 sm:my-8 sm:h-40 sm:max-w-sm sm:gap-2"
          aria-hidden="true"
        >
          <div className="flex h-16 w-20 items-start justify-center rounded-t-lg bg-gray-600 pt-3 text-xl font-black text-gray-200 shadow-lg sm:h-20 sm:w-24 sm:text-2xl">
            2
          </div>
          <div className="relative flex h-24 w-20 items-start justify-center rounded-t-lg bg-blue-600 pt-3 text-2xl font-black shadow-lg sm:h-32 sm:w-24 sm:text-3xl">
            1
            <span className="absolute -top-8 rounded-full border-4 border-yellow-200 bg-yellow-400 px-2 py-1 text-sm font-black text-yellow-950 shadow-lg sm:-top-10 sm:px-3 sm:text-base">
              404
            </span>
          </div>
          <div className="flex h-12 w-20 items-start justify-center rounded-t-lg bg-gray-700 pt-3 text-xl font-black text-gray-200 shadow-lg sm:h-14 sm:w-24 sm:text-2xl">
            3
          </div>
        </div>

        <h1 id="not-found-title" className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
          Oups… cette page a raté son départ.
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
          L&apos;adresse demandée ne mène à aucun pays ni à aucune épreuve. Même les meilleurs
          athlètes se trompent parfois de couloir.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:mt-8 sm:w-auto sm:text-base"
        >
          ← Retour au tableau des médailles
        </Link>
      </section>
    </main>
  )
}
