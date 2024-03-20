import React from 'react';
//styles
import styles from "./song.module.css";

const Song = props => {
    const { songData } = props;

    //functions
    const msToMmSs = ms=> {
        if(!ms) return "00:00";
        
        // Convert milliseconds to seconds
        let seconds = Math.floor(ms / 1000);
      
        // Calculate minutes and remaining seconds
        let minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
      
        // Add leading zero if needed
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
      
        return minutes + ':' + seconds;
    }

    return (
        <div className={styles.song} onClick={()=> console.log(songData)}>
            <img src={songData?.image} alt={songData?.image}/>
            <div className={styles.songInfo}>
                <span>{songData?.title}</span>
                <span>{songData?.artists[0]}</span>
                <span>{msToMmSs(songData?.durationInMs)}</span>
            </div>
        </div>
    );
};

export default Song;