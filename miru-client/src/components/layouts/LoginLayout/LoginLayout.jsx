import React from 'react'
import styles from './LoginLayout.module.css'

export const LoginLayout = props => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}