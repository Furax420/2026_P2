import { Link } from 'react-router-dom'

interface InvalidCountryPageProps {
  requestedId?: string
}

export function InvalidCountryPage({ requestedId }: InvalidCountryPageProps) {
  const displayedId = requestedId?.trim() || '?'

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 px-4 py-8 text-white sm:px-6 sm:py-12">
      <section
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 p-5 text-center shadow-2xl sm:p-8 md:p-12"
        role="alert"
        aria-labelledby="invalid-country-title"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300 sm:text-sm sm:tracking-[0.3em]">
          Délégation introuvable
        </p>

        <div
          className="relative mx-auto my-7 h-36 w-full max-w-md overflow-hidden rounded-2xl border border-gray-600 bg-gray-900 sm:my-8 sm:h-44"
          aria-hidden="true"
        >
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-600" />
          <div className="absolute inset-y-0 left-1/3 w-px bg-gray-700" />
          <div className="absolute inset-y-0 left-2/3 w-px bg-gray-700" />

          <div className="absolute left-[12%] top-1/2 -translate-y-1/2">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-orange-300 bg-gray-800 text-2xl font-black text-orange-200 shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
              ?
            </div>
            <div className="mx-auto mt-2 h-5 w-10 rounded-t bg-orange-400/80" />
          </div>

          <div className="absolute right-[10%] top-4 bottom-4 border-l-4 border-dashed border-gray-300/80" />

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-gray-600 bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-300 sm:text-sm">
            ID demandé : {displayedId}
          </div>
        </div>

        <h1
          id="invalid-country-title"
          className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl"
        >
          Ce pays n&apos;est pas sur la ligne de départ.
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
          L&apos;identifiant demandé ne correspond à aucune délégation enregistrée dans les données
          olympiques disponibles.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 sm:mt-8 sm:w-auto sm:text-base"
        >
          ← Revenir au classement des pays
        </Link>
      </section>
    </main>
  )
}
