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
                            1920:{
                                slidesPerView:1

                            },
                            1000: {
                                // width: 576,
                                slidesPerView: 1,
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
                        <SwiperSlide className='swiper-slides border'><TestimonialCard heading='M.M. Kabra' designation='Chairman & MD- Alluwind Architectural Limited' content='With the utmost respect and profound joy, I wishto extend my sincerest gratitude to the NNM Group for their timely completion of Alluwind IPO process. Their unwavering commitment to their promises, coupledwith their remarkable proactive approach, has been truly commendable. I can wholeheartedly attest to the ethical values and professionalism that permeate every aspect of their conduct. It has been a privilege to witness their dedication firsthand, and I have complete confidence in their capabilities and integrity.'/></SwiperSlide>
                        <SwiperSlide className='swiper-slides border'><TestimonialCard heading = 'Tirajkumar Babu Kotian' designation='MD & Promoter- MarineTrans' content='“NNM Group has facilitated not just the successful completion, but rather the triumphant commencement by listing our company on the prestigious SME Platform of the National Stock Exchange of India Limited (NSE EMERGE).which was oversubscribed 30.34 times. Under the adept leadership of Mr. Nikunj Mittal, the organization ensures seamless operations while imparting invaluable knowledge essential for success.”' /></SwiperSlide>
                        <SwiperSlide className='swiper-slides border'><TestimonialCard heading='Parijata' designation='ISKCON Temple Communications & Coordinator' content='I am absolutely delighted to express my appreciation for the services and financial advice offered by NNM Group. Their unwavering dedication to excellence, coupled with their impeccable professionalism, has consistently guided me towards sound financial decisions. It is truly a privilege to have their expertise by my side, enriching my financial journey with their unparalleled support and wisdom.' /></SwiperSlide>
                        <SwiperSlide className='swiper-slides border'><TestimonialCard heading='Rakesh Ojha' designation='Just Dial- Chief Business Officer' content="I'm impressed by the exemplary financial advice services provided by NNM Group. Their expertise and guidance have been invaluable in helping me navigate complex financial decisions."/></SwiperSlide>
                        <SwiperSlide className='swiper-slides border'><TestimonialCard heading='Floyd Linhares' designation='Investor' content='Trust NNM group with your money and you will not regret.' /></SwiperSlide>
                        <SwiperSlide className='swiper-slides border'><TestimonialCard heading='Shailesh Agarwal' designation='Investor' content='Trust NNM group with your investment, and you will sleep well at night.'/></SwiperSlide>

                        <SwiperSlide className='swiper-slides border'><TestimonialCard heading='Mohit Shah' designation='Ashapura Intimates Fashion Limited' content='The Team of NNM group is of top quality. If you want to expand your business, go for IPO, go to NNM...Cheers'/></SwiperSlide>

                        <SwiperSlide className='swiper-slides border'><TestimonialCard heading='Jay Kedia' designation='Cellpap Mercantile Pvt. Ltd.' content='Trust NNM group with your investment, and you will sleep well at night.'/></SwiperSlide>
                        <SwiperSlide className='swiper-slides border'><TestimonialCard heading='Hardik Desai' designation='Trident Taxofab Limited' content='NNM group is highly professional in terms of approach and we wish this very hard working professional team of NNM group the best.'/></SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </>
    )
}

export default Testimonials;
