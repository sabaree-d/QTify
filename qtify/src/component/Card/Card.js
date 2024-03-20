import React, { useContext } from 'react';
//contexts
import { AlbumContext } from '../../Contexts/albumContext';
import styles from "./card.module.css";
// mui
import Tooltip from '@mui/material/Tooltip';


const Card = props => {
    const { cardImg, follows, title, likes, allInfo, cardType} = props;

    //contexts
    const [albumData, setAlbumData] = useContext(AlbumContext)

    const imageStyle = {
        backgroundSize: "cover",
        background: `url(${cardImg})`,
        width: "100%",
        height: "100%",
        borderRadius: "10px 10px 0 0",
        display: "block",
        transition: "250ms"
    }

    //functions
    const handleClick = ()=>{
        console.log({cardType, allInfo})
        if(cardType === 'songs') return;
        
        setAlbumData(allInfo);
        window.scrollTo({ top: 0, behavior: "smooth"});
    }
    const handleTooltipMsg = ()=>{
        let msg = ''
        if(cardType === "songs") msg = `${allInfo?.likes} likes` ;
        else msg = `${allInfo?.songs?.length} songs`;
        console.log(msg)
        return msg;
    }
    return (
        <Tooltip 
            title={cardType !== "songs" ? `${allInfo?.songs?.length} songs` : ""} 
            placement="top" arrow
        >
            <section className={styles.card} onClick={handleClick}>
                <section className={styles.cardInfo}>
                    <span className={styles.cardImgWrapper}>
                        <span className={styles.cardImg} style={imageStyle}></span>
                    </span>
                    {
                        follows 
                        ?
                        <span className={styles.chip}>{follows} follows</span>
                        :
                        <span className={styles.chip}>{likes} likes</span>
                    }
                </section>
                <span>{title}</span>
            </section>
        </Tooltip>
    );
};

export default Card;