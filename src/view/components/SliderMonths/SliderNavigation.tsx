import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useSwiper } from 'swiper/react'

export function SliderNavigation() {
  const swiper = useSwiper()

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center bg-darkBlue-900"
      >
        <ChevronLeftIcon className="h-8 text-neutral-300" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center bg-darkBlue-900"
      >
        <ChevronRightIcon className="h-8 text-neutral-300" />
      </button>
    </>
  )
}
