import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { MONTHS } from '@/config/constants'
import { SliderOption } from './SliderOption'
import { SliderNavigation } from './SliderNavigation'
import { useIsMobile } from '@/hooks/useIsMobile'

export function SliderMonths() {
  const isMobile = useIsMobile()

  return (
    <Swiper
      spaceBetween={40}
      centeredSlides={true}
      slidesPerView={isMobile ? 1 : 4}
      navigation
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
