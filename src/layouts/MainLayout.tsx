import { Sidebar } from '@/view/components/Aside'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div className="grid grid-cols-[13rem_auto] bg-darkBlue-900">
      <Sidebar />

      <div className="bg-darkBlue-900 px-6">
        <Outlet />
      </div>
    </div>
  )
}
