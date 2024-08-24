import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Card from '../Card/Card';
import NavigationLeft from '../CarouselButtons/NavigationLeft';
import NavigationRight from '../CarouselButtons/NavigationRight';
import styles from "./Carousel.module.css";

const CustomNavigationButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <button className={styles.customPrev} onClick={() => swiper.slidePrev()}>
        <NavigationLeft />
      </button>
      <button className={styles.customNext} onClick={() => swiper.slideNext()}>
        <NavigationRight />
      </button>
    </>
  );
};

const Carousel = ({ albumData }) => {
  if (!albumData) {
    return <p>Loading...</p>;
  }

  return (
    
    <div className={styles.carousel}>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        modules={[Navigation]}
        className={styles.mySwiper}
      >
        {
          albumData.map(item => (
            <SwiperSlide key={item.id}><Card albumData={item} /></SwiperSlide>
          ))
        }
        {/* Custom navigation buttons */}
        <CustomNavigationButtons />
      </Swiper>
    </div>
  );
};

export default Carousel;
