import React from 'react'
import styles from './RightAligner.module.css'

export const RightAligner = props => {
    return (
        <div className={styles[props.type] || styles.container}>
            {props.children}
        </div>
    )
}
