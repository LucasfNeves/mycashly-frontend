import { useAuth } from '@/app/hooks/useAuth'
import { useEffect, useState } from 'react'

export function useToggleMenuController() {
  const { getUserData } = useAuth()

  const [userSettingsModalOpen, setUserSettingsModalOpen] = useState(false)
  const [open, setOpen] = useState(false)

  function handleUserSettingsModalOpen() {
    setUserSettingsModalOpen(true)
  }

  function handleUserSettingsModalClose() {
    setUserSettingsModalOpen(false)
  }

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  return {
    open,
    toggleMenu,
    setOpen,
    getUserData,
    userSettingsModalOpen,
    handleUserSettingsModalOpen,
    handleUserSettingsModalClose,
  }
}
