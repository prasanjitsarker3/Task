import './Gallery.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Gallery = () => {
    return (
        <div className="container">
            <h1 className="heading">Flower Gallery</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch:0,
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
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src="https://as1.ftcdn.net/v2/jpg/06/17/18/38/1000_F_617183820_IzUg2eY1r26jaOmSBV0KyH6Vp93oycjd.webp" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://t4.ftcdn.net/jpg/06/17/18/37/240_F_617183754_jwE68NLoOrTBDi0tYujhI4zwF2rsY1fM.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://t4.ftcdn.net/jpg/06/17/18/37/240_F_617183712_pAmiYM2HQhy0nKvvyUbll1KzVnbIa9OQ.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/side-view-sad-boy-school_23-2149583137.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/premium-photo/young-sad-student-hallway_53876-54016.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/premium-photo/young-sad-student-hallway_53876-54016.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" alt="slide_image" />
                </SwiperSlide>
                {/* <SwiperSlide>
                    <img src={slide_image_7} alt="slide_image" />
                </SwiperSlide> */}

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default Gallery;