import { useState } from 'react'

export function useHeaderController() {
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
  }
}
