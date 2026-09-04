import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CountryDetailPage } from './app/pages/CountryDetailPage'
import { DashboardPage } from './app/pages/DashboardPage'
import { NotFoundPage } from './app/pages/NotFoundPage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/country/:id" element={<CountryDetailPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
