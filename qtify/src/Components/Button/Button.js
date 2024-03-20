import React from 'react';
import styles from './button.module.css';

const Button = (props) => {
    const { children } = props;
    return (
        <button className={styles.Button}>
            {children}
        </button>
    );
};

export default Button;