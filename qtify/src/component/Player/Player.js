import React from 'react';
//styles
import styles from "./player.module.css";
import playButton from "../../assets/playButton.svg"
import pauseButton from "../../assets/pauseButton.svg"
import Slider from '@mui/material/Slider';

const Player = () => {
    return (
        <div className={styles.playerContainer}>
            <audio src=''></audio>
            <div className={styles.songData}>
                <div>
                    <img src='https://s3-alpha-sig.figma.com/img/0ff9/9cf1/f1ec6d6e5f55a783f39005756c3e5d9e?Expires=1701648000&Signature=cVh2Qi9YQex0Q4NDbPK8urYVR1HYl9N-qCLDXXpyLiNXRGCd3Lk5Ljv26KD6IilvVqjHQ1fYT-ZpQkrN-nLcqJ4zEwVzROoMsvoT2Je40JfWlOtNFVDpfcaDzjiwez8s5tROIvyWXrP4PipWtfZex0aK7KqLNDER2GjqnGG52M2AlVG3IjjQLC~y6esf9IzspWJ9Qf8Wcn-03iOgvE-7MQx2Nk8q1pLUvagy~8NVjhCGt85p~C9WUPjKWj7Xgez2CFMetWek5aN-8Ns-ALp1z3RRxMlV~nYMXOie60PUqLKDMax2Rd8jC2w8LS9xdvr2OF7ZPzsfMfNbAFcy4OkXTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt=''/>
                </div>
                <div className={styles.playerTexts}>
                    <span className={styles.songName}>song name</span>
                    <span className={styles.albumName}>album name</span>
                </div>
            </div>
            <div className={styles.playerControlsDiv}>
                <span>
                    <img src={playButton} alt='play button' />
                </span>
                <span className={styles.sliderContainer}>
                    <Slider
                        size="small"
                        defaultValue={1}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        sx={{
                            color: '#34C94B',
                            height: 5,
                          }}
                    />
                </span>
            </div>
        </div>
    );
};

export default Player;