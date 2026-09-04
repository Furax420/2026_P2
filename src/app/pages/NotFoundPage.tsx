import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 px-6 py-12 text-white">
      <section
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 p-8 text-center shadow-2xl sm:p-12"
        aria-labelledby="not-found-title"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Erreur 404
        </p>

        <div className="mx-auto my-8 flex h-40 max-w-sm items-end justify-center gap-2" aria-hidden="true">
          <div className="flex h-20 w-24 items-start justify-center rounded-t-lg bg-gray-600 pt-3 text-2xl font-black text-gray-200 shadow-lg">
            2
          </div>
          <div className="relative flex h-32 w-24 items-start justify-center rounded-t-lg bg-blue-600 pt-3 text-3xl font-black shadow-lg">
            1
            <span className="absolute -top-10 rounded-full border-4 border-yellow-200 bg-yellow-400 px-3 py-1 text-base font-black text-yellow-950 shadow-lg">
              404
            </span>
          </div>
          <div className="flex h-14 w-24 items-start justify-center rounded-t-lg bg-gray-700 pt-3 text-2xl font-black text-gray-200 shadow-lg">
            3
          </div>
        </div>

        <h1 id="not-found-title" className="text-3xl font-bold sm:text-4xl">
          Oups… cette page a raté son départ.
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg">
          L&apos;adresse demandée ne mène à aucun pays ni à aucune épreuve. Même les meilleurs
          athlètes se trompent parfois de couloir.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          ← Retour au tableau des médailles
        </Link>
      </section>
    </main>
  )
}
