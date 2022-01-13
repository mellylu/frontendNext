import React from 'react';
import Link from "next/link";
import LogoImg from "../../../public/nike-logo.png";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer__main}>
            <div className={styles.footer__logo}>
                <img src={LogoImg.src} alt="Nike" />
            </div>
        </div>
    );
}

export default Footer;
