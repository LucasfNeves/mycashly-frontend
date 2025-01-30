import { cn } from '@/lib/utils'
import { useSwiper } from 'swiper/react'

interface SliderOptionProps {
  month: string
  isActive: boolean
  index: number
}

export function SliderOption({ month, isActive, index }: SliderOptionProps) {
  const swiper = useSwiper()
  return (
    <div className="flex w-full justify-center">
      <button
        onClick={() => swiper.slideTo(index)}
        className={cn(
          'h-12 w-1/2 rounded-full text-sm font-medium tracking-[-0.5px] text-white lg:w-full',
          isActive && 'bg-primaryBlue-500 text-white',
        )}
      >
        {month}
      </button>
    </div>
  )
}
