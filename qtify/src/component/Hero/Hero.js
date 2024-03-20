import React from 'react';
//styles
import styles from "./hero.module.css";
import heaphone from "../../assets/headphone.png";
const Hero = () => {
    return (
        <section className={styles.hero}>
            <article>
                <span>100 Thousand Songs, ad-free</span>
                <span>Over thousands podcast episodes</span>
            </article>
            <img src={heaphone} alt='hero image' />
        </section>
    );
};

export default Hero;