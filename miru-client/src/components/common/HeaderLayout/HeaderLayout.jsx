import React from 'react'
import styles from './HeaderLayout.module.css'

export const HeaderLayout = props => {
    return (
        <header className={styles.header}>
            {props.children}
        </header>
    )
}