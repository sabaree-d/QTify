import React, { useState } from 'react';
//components
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
//styles
import styles from './navbar.module.css';
import searchIcon from '../../assets/search-icon.svg';
import feedbackIcon from '../../assets/feedback.svg';
import FeedbackModal from '../FeedbackModal/FeedbackModal';

const Navbar = () => {
    //states
    const [searchBarPosition, setSearchBarPosition] = useState();
    const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);

    //functions
    const handleSearchPosition = ()=>{
        if(!searchBarPosition) return setSearchBarPosition("searchBarIn");
        searchBarPosition === "searchBarIn" ? setSearchBarPosition("searchBarOut") : setSearchBarPosition("searchBarIn")
    }
    const modalOpen = ()=> {
        console.log("ssss");
        setFeedbackModalOpen(true);
    }
    const modalClose = ()=> setFeedbackModalOpen(false);

    return (
        <>
        <nav className={styles.Navbar}>
            <a href='/'>
                <Logo />
            </a>
            <div className={styles.searchBarForLarge}>
                <SearchBar />
            </div>
            <span className={styles.navbarButton}>
                <img 
                    src={searchIcon} 
                    alt='search icon' 
                    onClick={handleSearchPosition}
                />
                <span onClick={modalOpen}>
                    <img src={feedbackIcon} alt='feedback icon'/>
                    <Button>Give Feedback</Button>
                </span>
            </span>
            <div className={`${styles.searchBarForSmall} ${styles[searchBarPosition]}`}>
                <SearchBar />
            </div>
        </nav>
        <FeedbackModal modalClose={modalClose} open={feedbackModalOpen}/>
        </>
    );
};

export default Navbar;