'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Image from 'next/image'

const Feedbacks = () => {
  return (
    <div className="mt-4">
      <Swiper
        aria-label="Client Feedbacks"
        pagination={{
          clickable: true,
        }}
        freeMode
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1260: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="w-full max-w-screen-xl mx-auto"
      >
        {[...Array(16)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="h-[450px] flex items-center justify-center w-full">
              <Image
                className="max-h-[400px] w-full"
                src={`/images/feedbacks/${index + 1}.png`}
                alt={`Feedback ${index + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Feedbacks
