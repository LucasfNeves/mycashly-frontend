import { useIsMobile } from '@/app/hooks/useIsMobile'

export function useUserSettingsButtonController() {
  const isMobile = useIsMobile()

  const getLetters = (name: string) => {
    const [firstName, lastName] = name.split(' ')

    if (firstName && lastName) {
      return `${firstName[0]}${lastName[0]}`
    } else {
      return `${firstName[0]}`
    }
  }
  return {
    getLetters,
    isMobile,
  }
}
