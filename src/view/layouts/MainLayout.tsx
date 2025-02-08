import { useIsMobile } from '@/app/hooks/useIsMobile'
import { Sidebar } from '@/view/components/Sidebar'
import { ToggleMenu } from '@/view/components/ToggleMenu'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  const isMobile = useIsMobile()
  return (
    <div className="grid grid-cols-1 bg-darkBlue-900 pt-[4.5rem] lg:grid-cols-[13rem_auto] lg:pt-0">
      <div className="overflow-hidden lg:h-screen">
        {isMobile ? <ToggleMenu /> : <Sidebar />}
      </div>

      <div className="mx-auto max-w-full overflow-x-hidden bg-darkBlue-900 p-4 lg:p-6">
        <Outlet />
      </div>
    </div>
  )
}
