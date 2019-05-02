import React from 'react'
import { Link } from 'react-router-dom'
import styles from './To.module.css'

export const To = props => {
    return (
        <Link
            className={styles[props.type] || styles.link}
            to={props.link}
        >
            {props.title}
        </Link>
    )
}