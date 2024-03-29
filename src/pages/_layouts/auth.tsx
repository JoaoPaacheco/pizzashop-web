import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <header>Autenticação</header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
