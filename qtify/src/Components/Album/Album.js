import React, { useContext } from 'react';
//contexts
import { AlbumContext } from '../../Contexts/albumContext';
//components
import Button from '../Button/Button';
import SearchResult from '../SearchResult/SearchResult';
//styles
import styles from "./album.module.css";
//mui
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//assets
import shuffle from '../../assets/shuffle.svg';
import library from '../../assets/library.svg';
import bigDot from '../../assets/bigDot.svg';
import Song from '../Song/Song';
import { duration } from '@mui/material';

const Album = () => {
    

    //contexts
    const [albumData, setAlbumData] = useContext(AlbumContext)

    //functions
    const calculateDuration = ()=>{
        let duration = 0;
        if(!albumData || !albumData?.songs || !albumData?.songs?.length) return;
        albumData.songs.forEach(song => {
            duration += song?.durationInMs
        });
        let minutes = Math.floor(duration / 60000);

        // Calculate the remaining hours and minutes
        let hours = Math.floor(minutes / 60);
        let remainingMinutes = minutes % 60;

        // Build the formatted output
        let formattedOutput = hours + " hr " + remainingMinutes + " min";

        // console.log(duration, formattedOutput);
        return formattedOutput;
    }
    const displaySongs = ()=>{
        if(!albumData || !albumData?.songs || !albumData?.songs?.length) return;

        return albumData.songs.map(i=> <Song songData={i}/>);
    }
    const displayDummySongsList = ()=>{
        let arr = [];
        for(let i=0; i<15; i++){
            arr.push(<Song songData={{title: "None", artists:["None"], durationInMs: "00:))"}}/>)
        }
        return arr;
    }
    return (
        <div className={styles.album}>
            <div className={styles.albumHead}>
                <div 
                    onClick={()=> setAlbumData(undefined)} 
                    className={`${styles.closeAlbumButton} ${styles.contentAppearAnimation}`}
                > 
                    <span> <ArrowBackIcon/> </span>
                </div>
                <div className={`${styles.albumHeadBody} ${styles.contentAppearAnimation}`}>
                    {/* <img onClick={()=> console.log(albumData)}
                    src={albumData?.image} alt='album image' /> */}
                    <div 
                    onClick={()=> console.log(albumData)}
                        style={{backgroundImage:`url("${albumData?.image}")`}}
                        className={styles.backgroundForAlbumTitle}
                    >
                    </div>
                    <div className={styles.albumInfo}>
                        <h2 className={styles.albumTitle}>{albumData?.title}</h2>
                        <span className={styles.albumDesc}>{albumData?.description}</span>
                        <span  className={styles.albumYear}>2022</span>
                        <span className={styles.albumNumbers}>
                            <span>{albumData?.songs?.length} songs</span>
                            <img src={bigDot} alt='big-dot'/>
                            <span>{calculateDuration()}</span>
                            <img src={bigDot} alt='big-dot'/>
                            <span>{albumData?.follows} follows</span>
                        </span>
                        <div className={styles.albumButtons}>
                            <Button> <img src={shuffle} /> Shuffle</Button>
                            <Button> <img src={library} /> Add to library</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.albumBody} ${styles.contentAppearAnimation}`}>
                <div className={styles.tableHead}>
                    <span>Title</span>
                    <span className={styles.tableHeadArtist}>Artist</span>
                    <span>Duration</span>
                </div>  
                {albumData?.songs ? displaySongs() : displayDummySongsList()}
            </div>
        </div>
    );
};

export default Album;