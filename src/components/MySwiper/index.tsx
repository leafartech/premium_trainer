'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

const MySwiper = () => {
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
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <div>
              <img src="./images/feedbacks/1.png" alt="Feedbacks" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <div>
              <img src="./images/feedbacks/a.png" alt="Feedbacks" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <div>
              <img src="./images/feedbacks/3.png" alt="Feedbacks" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <div>
              <img src="./images/feedbacks/4.png" alt="Feedbacks" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <div>
              <img src="./images/feedbacks/5.png" alt="Feedbacks" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <div>
              <img src="./images/feedbacks/6.png" alt="Feedbacks" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <div>
              <img src="./images/feedbacks/7.png" alt="Feedbacks" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <div>
              <img src="./images/feedbacks/8.png" alt="Feedbacks" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] flex items-center">
            <div>
              <img src="./images/feedbacks/9.png" alt="Feedbacks" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MySwiper
