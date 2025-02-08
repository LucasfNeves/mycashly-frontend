import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { MONTHS } from '@/app/config/constants'
import { SliderOption } from './SliderOption'
import { SliderNavigation } from './SliderNavigation'
import { useIsMobile } from '@/app/hooks/useIsMobile'

export function SliderMonths() {
  const isMobile = useIsMobile()

  return (
    <Swiper
      spaceBetween={40}
      centeredSlides={true}
      slidesPerView={isMobile ? 1 : 4}
      navigation
      className="relative z-0"
    >
      <SliderNavigation />
      {MONTHS.map((month, index) => (
        <SwiperSlide key={month}>
          {({ isActive }) => (
            <SliderOption month={month} isActive={isActive} index={index} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
