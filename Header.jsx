import React from 'react';
import { SocialMedia } from "./SocialMedia/SocialMedia";
import styles from './DynamicStyles.module.css';

function Header() {
    return (
        <header className={styles.dynamicHeader}>
            <h1 className={styles.dynamicFont}>
                The <strong className={styles.dynamicFont}>Anime</strong>List
                <SocialMedia />
            </h1>
        </header>
    );
}
export default Header;
 