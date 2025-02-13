import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { MONTHS } from '@/app/config/constants'
import { SliderOption } from './SliderOption'
import { SliderNavigation } from './SliderNavigation'
import { useIsMobile } from '@/app/hooks/useIsMobile'
import { TransacttionsFilters } from '@/app/services/transactionsService/getAllTransations'

interface SliderMonthsProps {
  handleChangeMonth: (month: number) => void
  filters: TransacttionsFilters
}

export function SliderMonths({
  handleChangeMonth,
  filters,
}: SliderMonthsProps) {
  const isMobile = useIsMobile()

  return (
    <Swiper
      spaceBetween={40}
      centeredSlides={true}
      slidesPerView={isMobile ? 1 : 4}
      navigation
      className="relative z-0"
      initialSlide={filters.month}
      onSlideChange={(swiper) => {
        handleChangeMonth(swiper.realIndex)
      }}
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
