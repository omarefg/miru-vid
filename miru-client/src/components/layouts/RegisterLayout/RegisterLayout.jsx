import React from 'react'
import styles from './RegisterLayout.module.css'

export const RegisterLayout = props => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}
