import React from 'react'
import styles from './ErrorText.module.css'

export const ErrorText = props => {
    return (
        <p className={styles.text}>{props.error}</p>
    )
}