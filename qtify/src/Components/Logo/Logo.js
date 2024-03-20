import React from 'react';
//styles
import styles from "./logo.module.css";
import logo from "../../assets/logo.svg";

const Logo = () => {
    return (
        <img src={logo} alt="Qtify logo" className={styles.logo}/>
    );
};

export default Logo;