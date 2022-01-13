import React from 'react';
import styles from "./TitlePage.module.scss";

const Titlepage = (props) => {
    return (
        <div className={styles.title__page}>
            <h1>{props.title}</h1>
        </div>
    );
}


export default Titlepage;
