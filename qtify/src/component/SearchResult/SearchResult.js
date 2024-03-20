import React from 'react';
//styles
import styles from "./searchResult.module.css";

const SearchResult = (props) => {
    const { title, artists, likes, image } = props.data;

    //functions
    const diplayArtists = ()=>{
        if(!artists?.length) return "Null";
        return artists.map((name, idx)=> {
            if(idx === 0) return name;
            return `, ${name}`
        });
    }
    return (
        <div className={styles.searchResult}>
            <span className={styles.searchResultImgContainer}>
                <img src={image} alt={title}/>
            </span>
            <span className={styles.searchResultTexts}>
                <span className={styles.searchResultHead}>{title}</span>
                <span className={styles.searchResultDesc}>{diplayArtists()}</span>
            </span>
            <span className={styles.searchResultFollows}>
                <span>{likes}</span> Likes</span>
        </div>
    );
};

export default SearchResult;