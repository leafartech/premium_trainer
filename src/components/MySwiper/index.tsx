import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const MySwiper = () => {
    return (
        <div className="mt-4">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                // freeMode={true}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    500: {
                        slidesPerView: 1
                    }
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="h-80">Teste</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-80">Teste</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-80">Teste</div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MySwiper