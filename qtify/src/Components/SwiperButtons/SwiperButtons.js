import React from 'react';
//hooks
import { useSwiper } from 'swiper/react';
//styles
import styles from "./swiperButtons.module.css"
//assets
import prev from "../../assets/prev.svg"
import next from "../../assets/next.svg"
const SwiperButtons = () => {
    const swiper = useSwiper();

    return (
        <div className={`swiper-nav-btns`}>
            <button onClick={()=> swiper.slidePrev()} className={styles.swiperButtonPrev}>
                <img src={prev} />
            </button>
            <button onClick={()=> swiper.slideNext()} className={styles.swiperButtonNext}>
                <img src={next} />
            </button>
        </div>
    );
};

export default SwiperButtons;