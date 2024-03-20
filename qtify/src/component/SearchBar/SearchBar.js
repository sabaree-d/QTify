import React, { useEffect, useState } from 'react';

//styles
import styles from './searchbar.module.css';
import searchIcon from '../../assets/search-icon.svg'
import SearchResult from '../SearchResult/SearchResult';

const SearchBar = () => {
    // states
    const [ text, setText ] = useState("");
    const [ fetchedData, setFetchedData] = useState([]);
    //sice effects
    useEffect(()=>{
        if(text && text.length) fetchData(text);
        if(!text || !text?.length) setFetchedData([]);
    }, [text])
    //functions
    const hanldeChange = evt=> setText(evt.target.value);

    const handleSubmit = evt=>{
        evt.preventDefault();
    }
    const fetchData = data=>{
        let allSongs = JSON.parse(localStorage.getItem("allSongs"));

        let foundData = allSongs.filter(item=>{
            if(item.title.toLocaleLowerCase().includes(data.toLocaleLowerCase())) return item;
        })
        setFetchedData(foundData);
    }
    const displayResult = ()=>{
        if(!fetchedData || !fetchedData?.length) return null;

        let results = fetchedData.map(item=> <SearchResult data={item} key={item.id}/> )
        return( 
            <div className={styles.SearchResultContainer}>
                {results}
            </div>
        )
    }

    return (
        <>
        <form className={styles.searchBar} onSubmit={handleSubmit}>
            <input value={text} placeholder='Search a song of your choice' onChange={hanldeChange}/>
            <button type='submit'>
                <img src={searchIcon} alt='search icon'/>
            </button>
        </form>
        {displayResult()}
        </>
    );
};

export default SearchBar;