import React from 'react'
import styles from './TextInput.module.css'

export const TextInput = props => {
    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                value={props.value}
                onChange={props.onChange}
                type={props.type || 'text'}
                required={props.required}
                disabled={props.disabled}
                id={props.id}
            />
            <label
                className={props.value ? styles.placeholder : styles.label}
                htmlFor={props.id}
            >
                {props.placeholder}
            </label>
        </div>
    )
}
