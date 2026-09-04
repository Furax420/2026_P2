export function MissingDataWarning() {
  return (
    <span
      className="group/warning relative inline-flex shrink-0"
      role="img"
      aria-label="Informations manquantes"
      title="Informations manquantes"
    >
      <svg
        viewBox="0 0 20 18"
        className="h-4 w-4 text-amber-400"
        aria-hidden="true"
      >
        <path d="M10 1 19 17H1L10 1Z" fill="currentColor" />
        <path d="M10 6v5" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="14" r="1" fill="#111827" />
      </svg>

      <span
        className="pointer-events-none absolute bottom-full right-0 z-20 mb-2 whitespace-nowrap rounded-md bg-gray-950 px-2 py-1 text-xs font-medium text-gray-100 opacity-0 shadow-lg transition-opacity group-hover/warning:opacity-100"
        role="tooltip"
      >
        Informations manquantes
      </span>
    </span>
  )
}
