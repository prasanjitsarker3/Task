// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

const Gallery = () => {
    const [gallerys, setGallerys] = useState([]);
    useEffect(() => {
        fetch("gallery.json")
            .then(res => res.json())
            .then(data => setGallerys(data.events))
    }, [])
    return (
        <div className="gallery_container Gallery w-[80%] mx-auto">
            {/* <h1 className='text-center text-3xl py-5'>Event Gallery</h1> */}
            <h1 className="heading  py-5">Event Gallery</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container flex justify-center items-center"
            >
                <>
                    {
                        gallerys.map(gallery => <SwiperSlide className='SwiperInfo relative'>
                            <img className='' src={gallery.imageUrl} alt="slide_image" />
                            <div className='absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] bottom-0 flex justify-center items-center  text-center text-white w-full text-bold'>
                                <div className=' w-full py-3'>
                                    <p className=''>{gallery.eventName}</p>
                                    <button className='bgColor px-5 py-2 rounded-sms'>Details</button>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    {/* <div className="swiper-pagination flex justify-center gap-1 pt-3"></div> */}
                </div>
            </Swiper>
        </div>
    );
};

export default Gallery;