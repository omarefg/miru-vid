import React from 'react'
import { Button } from '../'
import styles from './Form.module.css'
export const Form = props => {
    return (
        <form
            className={styles.form}
            onSubmit={props.onSubmit}
        >
            <h2 className={styles.title}>{props.title}</h2>
            {props.children}
            <Button
                type='submit'
                title={props.button}
            />
        </form>
    )
}
