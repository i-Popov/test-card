import React from 'react';
import styles from './styles.module.scss';
import home from '../../assets/images/icons/home.svg';
import back from '../../assets/images/icons/back-icon.svg';

const Navigation = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.nav__road}>
                <a href="/">
                    <img src={home} alt="Home" />
                </a>
                <a href="/">Брюки</a>
            </div>
            <div className={styles.nav__back}>
                <a href="/">
                    <img src={back} alt="Back" />
                </a>
            </div>
        </div>
    );
};

export default Navigation;
