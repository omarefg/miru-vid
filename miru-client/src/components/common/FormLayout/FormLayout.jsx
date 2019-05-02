import React from 'react'
import styles from './FormLayout.module.css'

export const FormLayout = props => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}