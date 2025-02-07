import { useState } from 'react'

export function useHeaderController() {
  const [userSettingsModalOpen, setUserSettingsModalOpen] = useState(false)

  function toggleUserSettingsModal() {
    setUserSettingsModalOpen(true)
  }

  return {
    userSettingsModalOpen,
    toggleUserSettingsModal,
  }
}
