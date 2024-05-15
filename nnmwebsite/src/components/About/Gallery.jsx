import React, { useEffect, useRef, useState } from 'react';
import AboutHeader from './AboutHeader';
import { RxCross1 } from "react-icons/rx";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import celebrationvector from '../../assets/vector/celebration_vector.png'
import 'swiper/css/scrollbar';


const Gallery = () => {
   
    const [photoActive, setPhotoActive] = useState("category1");
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl, index) => {
        setSelectedImage(imageUrl)
    }

    const handlePhotoChange = (categoryName) => {
        setPhotoActive(categoryName);
    }

    const handleCloseModal = () => {
        setSelectedImage(null)
    }

    const categories = [
        {
            id: "category1",
            categoryName: "IPO Listings",
            photos: Array.from({ length: 8 }, (_, index) => `/gallery/ipo${index + 1}.jpeg`)
        },
        {
            id: "category2",
            categoryName: "Meet-ups",
            photos: Array.from({ length: 8 }, (_, index) => `/gallery/meetup${index + 1}.jpeg`)
        },
        {
            id: "category3",
            categoryName: "Celebration At NNM",
            photos: Array.from({ length: 8 }, (_, index) => `/gallery/celebration${index + 1}.jpeg`)
        },
        {
            id: "category4",
            categoryName: "Outdoor",
            photos: Array.from({ length: 14 }, (_, index) => `/gallery/outdoor/outdoor${index + 1}.jpg`)

        }
    ];

    return (
        <>
            <AboutHeader heading="gallery" />
            <div className='photo-gallery'>
                <div className='sec-headers'>
                    <h3>Our Gallery</h3>
                </div>
                <h3 className='text-center'>Join us as we celebrate the milestones, achievements, and transformative moments that define NNm Company's relentless pursuit of success and growth</h3>
                <div className='photo-album-wrapper'>
                    <div className='container'>
                        <div className='row photo-wrapper'>
                            <div className='col-lg-3 photo-categories'>
                                <img src={celebrationvector} />

                                {/* <h3>Collection</h3> */}
                                <ul>
                                    {categories.map((category) => (
                                        <>
                                            <PhotoCategory
                                                key={category.id}
                                                category={category}
                                                isActive={photoActive === category.id}
                                                handlePhotoChange={handlePhotoChange}
                                            />
                                        </>

                                    ))}
                                </ul>
                            </div>
                            <div className='col-lg-9 photo-outer-box'>
                            <h2 style={{padding:"2%" , textAlign:'center', backgroundColor:"#09090A" , color:"white"}}>{categories.map(category=>(
                                photoActive === category.id ? category.categoryName : ''
                            ))}</h2>
                                <div className='photo-box'>
                                    <PhotoGallery photos={categories.find(cat => cat.id === photoActive)?.photos || []}
                                        handleImageClick={handleImageClick}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {selectedImage && (<div className='photo-modal' >
                <div className='photo-modal-content'>
                    <div className='close-photo-modal'>
                        <h3 onClick={handleCloseModal}><RxCross1 /></h3>
                    </div>


                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={40}
                        slidesPerView={1}
                        navigation={true}
                        // ref={swiperRef}
                        // autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        // // onSwiper={(swiper)=>handleSwiperInstance(swiper)}
                        // onSlideChange={(swiper) => handleSwiperInstance(swiper)}
                        className='swiper-main'

                        style={{
                            "--swiper-pagination-color": "#ffae42",
                            "--swiper-pagination-bullet-inactive-color": "#999999",
                            "--swiper-pagination-bullet-inactive-opacity": "1",
                            "--swiper-pagination-bullet-size": "10px",
                            "--swiper-pagination-bullet-horizontal-gap": "3px"
                        }}
                    >
                        {categories.find(cat => cat.id === photoActive)?.photos.map((photo, index) => (
                            <>

                                <SwiperSlide className='gallery-slide' key={index}>
                                    <img width="500px" height="500px" src={photo} alt={`Photo ${index}`} />
                                </SwiperSlide>
                            </>
                        ))}



                    </Swiper>
                    <div className='swiper-button-prev gallery-prev d-none'></div>
                    <div className='swiper-button-prev gallery-next d-none'></div>
                </div>

            </div >)
            }
        </>
    );
};

const PhotoCategory = ({ category, isActive, handlePhotoChange }) => {
    return (
        <li className={isActive ? "photo-catActive" : ""} onClick={() => handlePhotoChange(category.id)}>
            {category.categoryName}
        </li>
    );
};

const PhotoGallery = ({ photos, handleImageClick }) => {
    return (
        <>
            {photos.map((photo, index) => (
                <img key={index} src={photo} alt={`Photo ${index}`} onClick={() => handleImageClick(photo, index)} />
            ))}
        </>
    );
};

export default Gallery;
