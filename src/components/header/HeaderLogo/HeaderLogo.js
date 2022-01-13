import React from 'react';
import LogoImg from "../../../../public/nike-logo.png";
import styles from "./HeaderLogo.module.scss";

const Headerlogo = () => {
    return (
        <div className={styles.header__logo}>
            <img src={LogoImg.src} alt="Nike"/>
        </div>
    );
}

export default Headerlogo;
