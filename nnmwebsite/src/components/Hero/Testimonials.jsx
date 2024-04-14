import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    return (
        <>
            <div className='testimonials'>
                <div className='sec-headers'>
                    <h3>Testimonials</h3>
                </div>
                <div className='container swipper-wrapper'>
                    <Swiper
                        breakpoints={{
                            1400: {
                                // width: 576,
                                slidesPerView: 3,
                            },
                            768: {
                                // width: 768,
                                slidesPerView: 1,
                            },
                        }}
                        style={{
                            paddingBottom:"80px", "--swiper-pagination-color": "#FFBA08",
                            "--swiper-pagination-bullet-inactive-color": "#999999",
                            "--swiper-pagination-bullet-inactive-opacity": "1",
                            "--swiper-pagination-bullet-size": "15px",
                            "--swiper-pagination-bullet-horizontal-gap": "6px"
                        }}
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={40}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide className='swiper-slides border'><TestimonialCard /></SwiperSlide>
                        <SwiperSlide className='swiper-slides border'><TestimonialCard /></SwiperSlide>
                        <SwiperSlide className='swiper-slides border'><TestimonialCard /></SwiperSlide>
                        <SwiperSlide className='swiper-slides border'><TestimonialCard /></SwiperSlide>
                        <SwiperSlide className='swiper-slides border'><TestimonialCard /></SwiperSlide>
                        <SwiperSlide className='swiper-slides border'><TestimonialCard /></SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </>
    )
}

export default Testimonials;
