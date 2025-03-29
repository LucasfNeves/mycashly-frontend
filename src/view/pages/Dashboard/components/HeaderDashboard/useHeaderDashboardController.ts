import { useAuth } from '@/app/hooks/useAuth'
import { useState } from 'react'

export function useHeaderDashboardController() {
  const { getUserData } = useAuth()

  const getFirstName = getUserData?.name.split(' ')[0]

  const [userSettingsModalOpen, setUserSettingsModalOpen] = useState(false)

  function handleUserSettingsModalOpen() {
    setUserSettingsModalOpen(true)
  }

  function handleUserSettingsModalClose() {
    setUserSettingsModalOpen(false)
  }

  return {
    userSettingsModalOpen,
    handleUserSettingsModalOpen,
    handleUserSettingsModalClose,
    getFirstName,
    getUserData,
  }
}
