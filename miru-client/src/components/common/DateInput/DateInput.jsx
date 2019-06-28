import React from 'react'
import styles from './DateInput.module.css'

export const DateInput = props => {
    return (
        <div className={styles.container}>
            <label
                htmlFor={props.id}
                className={styles.label}
            >
                {props.title}
            </label>
            <input
                className={styles.input}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                type='date'
            />
        </div>
    )
}
