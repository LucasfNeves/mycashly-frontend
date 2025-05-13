import { useStore } from '@/app/store'
import { useShallow } from 'zustand/react/shallow'

export function useSummaryCardController() {
  const { setShowValues, showValues } = useStore(
    useShallow((state) => ({
      showValues: state.dashboard.showValues,
      setShowValues: state.dashboard.setShowValues,
    })),
  )

  const handleShowValues = () => {
    setShowValues(!showValues)
  }

  return {
    showValues,
    handleShowValues,
  }
}
