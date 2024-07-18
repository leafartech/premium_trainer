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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[450px] flex items-center justify-center w-full">
            <Image
              className="max-h-[400px] w-full max-w-[400px]"
              src="/images/feedbacks/1.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/3.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/4.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/5.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/6.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/7.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/8.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/9.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/10.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/11.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/12.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/13.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/14.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/15.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/16.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <Image
              className="max-h-[400px] w-full"
              src="/images/feedbacks/17.png"
              alt="Feedbacks"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Feedbacks
