import { Logo } from '@/view/components/Logo'
import { Spinner } from '@/view/components/Spinner'
import { Transition } from '@headlessui/react'

interface LaunchScreenProps {
  isLoading: boolean
}

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="flex h-screen flex-col items-center justify-center gap-12 bg-primaryBlue-600">
        <Logo className="w-80" />
        <Spinner />
      </div>
    </Transition>
  )
}
