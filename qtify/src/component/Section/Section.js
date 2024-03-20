import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
//components
import Card from '../Card/Card';
// styles
import styles from "./section.module.css";
import Carousel from '../Carousel/Carousel';

const Section = props => {
    //props
    const { type, cardsArray} = props;
    //states
    const [carouselOn, setCarouselOn] = useState(true);
    const [selectedTab, setSelectedTab] = useState("all");
    const [genreList, setGenreList] = useState({});
    const [stickyTop, setStickyTop] = useState(null)
    //refs
    const sectionHeadPositionRef = useRef(null);
    const gridPositionRef = useRef(null);
    //side effects

    useEffect(()=>{
        //check current postion of scroll
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [carouselOn])

    //functions 
    const handleScroll = () => {
        if(carouselOn) return;

        const headPos = sectionHeadPositionRef.current.getBoundingClientRect();
        const gridPos = gridPositionRef.current.getBoundingClientRect();
        console.log("head: ",headPos?.top)
        console.log("grid: ", gridPos.top)
        console.log("carouselOn ", carouselOn)
        console.log("stickyTop ", stickyTop)

        if(headPos?.top < 0 && stickyTop === "stickyTop") return;
        if(headPos?.top > 0 && !stickyTop) return;
        if(headPos?.top == 0 && gridPos?.bottom < 74 && !stickyTop) return

        if(headPos?.top <= 0 && !carouselOn) setStickyTop("stickyTop");
         
        if(headPos?.top == 0 && gridPos?.top > 74) setStickyTop(null);

        // if(headPos?.top == 0 && gridPos?.bottom < 74) setStickyTop(null);
      };

    const displayCards = ()=>{

        if(type === 'songs' && selectedTab !== 'all'){
            return (
                cardsArray.filter(item=> {
                    if(item?.genre?.key  === selectedTab) return(
                        <Card cardType={type} allInfo = {item} key={item?.id} id={item?.id} cardImg = {item?.image} follows={item?.follows} title={item?.title}/>
                    )
                })
            )
        }
        
        return (
            cardsArray.map(item=> {
                return(
                    <Card cardType={type} allInfo = {item} key={item?.id} id={item?.id} cardImg = {item?.image} follows={item?.follows} likes={item?.likes} title={item?.title}/>
                )
            })
        )
    }

    const handleClickCollapse = ()=> {
        setCarouselOn(!carouselOn);
        setStickyTop(null);

        const headPos = sectionHeadPositionRef.current.getBoundingClientRect();
        
        if(headPos?.top === 0 && stickyTop){
            const section = document.getElementById(`${type}AlbumsSection`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
        }
    };

    const displayTabs = ()=>{
        if(type !== "songs") return null;
        let arr = ['all', 'rock', "pop", 'jazz', "blues"];

        const tabs = arr.map(item=>{
            let style = styles.tab
            if(selectedTab === item) style = styles.tabSelected; 
            return(
                <span 
                    className={style} 
                    onClick={()=> handleTab(item)}
                >{item}</span>
            )
        })
        return (
            <div className={styles.tabs}>
                {tabs}
            </div>
        )
    }

    const handleTab = genre=>{
        setSelectedTab(genre);
    }

    return (
        <div className={styles.section} id={`${type}AlbumsSection`}>
            <div ref={sectionHeadPositionRef} className={`${styles.sectionHead} ${styles[stickyTop]}`}>
                {/* <span className={styles.sectionName}>{type} Albums</span> */}
                <span className={styles.sectionName}>{type ==='songs' ? 'songs' : `${type} Albums`}</span>
                {
                    type === "songs"
                    ?
                    <></>
                    :
                    <span className={styles.collpaseButt} onClick={handleClickCollapse}>
                        {!carouselOn ? "Collapse" : "Show All"}
                    </span>
                }
            </div>
            {type !== "songs" ? null : displayTabs()}
            <div className={styles.sectionBody}>
            {
                carouselOn 
                ?
                <Carousel cardsArray={cardsArray} type={type} selectedTab={selectedTab}/>
                :
                <div className={styles.cardGrid} ref={gridPositionRef}>
                    {cardsArray ? displayCards() : null}
                </div>
            }
            </div>
        </div>
    );
};

export default Section;