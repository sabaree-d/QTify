import React from 'react';
//styles
import styles from "./carousel.module.css"
import dummyImage from "../../assets/dummyImage.png";

// import Swiper JS// Import Swiper React components
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import "swiper/swiper-bundle.css";
import Card from '../Card/Card';
import SwiperButtons from '../SwiperButtons/SwiperButtons';
import 'swiper/css/grid';
// import "swiper/swiper-bundle.css";

const Carousel = props => {

    const { cardsArray, type, selectedTab } = props;

    const displaySlides = ()=>{
        if(type === 'songs' && selectedTab !== 'all'){
            let genreCards = cardsArray.filter(card=> card?.genre?.key  === selectedTab);

            return(
                genreCards.map(card=>{
                    return(
                        <SwiperSlide key={card?.id}>
                            <Card cardType={type} allInfo={card} id={card?.id} cardImg = {card?.image} follows={card?.follows} likes={card?.likes} title={card?.title}/>
                        </SwiperSlide>
                    )
                })
            )
        }
        return(
            cardsArray.map(card=>{
                return(
                    <SwiperSlide key={card?.id}>
                        <Card cardType={type} allInfo={card} id={card?.id} cardImg = {card?.image} follows={card?.follows} likes={card?.likes} title={card?.title}/>
                    </SwiperSlide>
                )
            })
        )
    }
    const displayDummyCards = ()=>{
        //if no cards display dummy
        let arr = [];
        // cardImg, follows, title, likes, allInfo
        for(let i=0; i<10; i++){
            arr.push(
                <SwiperSlide >
                    <Card cardType={type} cardImg={dummyImage} follows={0} likes={0} title={"None"}/>
                </SwiperSlide>
            )
        }
        return arr;
    }

    const breakpoints = {
        0: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        620: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        770: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        930: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        1260: {
            slidesPerView: 7,
            spaceBetween: 25,
        }
    }

    return (
        <div className={styles.swiperContainer}>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                // spaceBetween={50}
                // slidesPerView={7}
                // pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={breakpoints}
                style={{position: "static"}}
                className={styles.swiperEdit}
            >
                { cardsArray ? displaySlides() : displayDummyCards() }
                {/* {displayDummyCards()} */}
                <SwiperButtons />
            </Swiper>
        </div>
    );
};

export default Carousel;