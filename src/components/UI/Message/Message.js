import React from 'react';
import styles from "./Message.module.scss";

const Message = (props) => {
    const renderClass = () => {
        if (props.type === "error") {
            return `${styles.message} ${styles.message__error}`;
        }
        if (props.type === "success") {
            return `${styles.message} ${styles.message__success}`;
        }
    }
    return (
        <div className={renderClass()}>
            {props.message}
        </div>
    );
}

export default Message;
