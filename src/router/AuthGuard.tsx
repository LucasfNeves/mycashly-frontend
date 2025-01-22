import { Navigate, Outlet } from 'react-router-dom'

interface AuthGuardProps {
  isPrivate: boolean
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  // Essa informação deverá ser dinâmica vindo de um context, esse exemplo é apenas para exemplificação
  const signedIn = false

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
