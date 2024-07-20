'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Image from 'next/image'

const Feedbacks = () => {
  return (
    <div className="mt-4">
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          1260: {
            slidesPerView: 3,
          },
          2000: {
            slidesPerView: 4,
          },
        }}
        modules={[FreeMode, Pagination]}
      >
        {[...Array(16)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="h-[450px] flex items-center justify-center w-full">
              <Image
                className="max-h-[400px] w-full max-w-[400px]"
                src={`/images/feedbacks/${index + 1}.png`}
                alt="Feedbacks"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Feedbacks
