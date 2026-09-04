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
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <section
          className="bg-gray-800 p-8 rounded-lg shadow-xl"
          role={role}
          aria-live={role === 'status' ? 'polite' : undefined}
        >
          <h1 className="text-3xl font-bold mb-4">{title}</h1>

          {message ? <p className="text-gray-300">{message}</p> : null}

          {children ? <div className="mt-6">{children}</div> : null}
        </section>
      </div>
    </main>
  )
}
