import type { ReactNode } from 'react'

interface PageStateProps {
  title: string
  message?: string
  role?: 'status' | 'alert'
  children?: ReactNode
}

export function PageState({
  title,
  message,
  role = 'status',
  children,
}: PageStateProps) {
  return (
    <main className="min-h-screen bg-gray-900 px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <section
          className="rounded-lg bg-gray-800 p-5 shadow-xl sm:p-8"
          role={role}
          aria-live={role === 'status' ? 'polite' : undefined}
        >
          <h1 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl">{title}</h1>

          {message ? (
            <p className="text-sm leading-relaxed text-gray-300 sm:text-base">{message}</p>
          ) : null}

          {children ? <div className="mt-6">{children}</div> : null}
        </section>
      </div>
    </main>
  )
}
