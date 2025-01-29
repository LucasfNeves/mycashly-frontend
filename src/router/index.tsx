import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthGuard } from './AuthGuard'
import { Login } from '../view/pages/Login'
import { Register } from '../view/pages/Register'
import { AuthLayout } from '../layouts/AuthLayout'
import { Dashboard } from '../view/pages/Dashboard'
import { Transactions } from '@/view/pages/Transactions'
import { MainLayout } from '@/layouts/MainLayout'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate={true} />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
