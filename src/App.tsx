import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardPage } from './app/pages/DashboardPage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}
