import React from 'react'
import styles from "./Message.module.css";

type AltMessagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

const AlternativeMessage: React.FC<AltMessagePropsType> = (props) => {
  return (
    <div className={styles.message}>
      <div className={styles.avatar}>
        <img src={props.avatar} alt="avatar"/>
      </div>
      <div className={styles.messageWrapper}>
        <div className={styles.messageTextWrapper}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.messageText}><span>{props.message}</span></div>
        </div>
        <div className={styles.time}>{props.time}</div>
      </div>
    </div>
  )
}

export default AlternativeMessage
