import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}))

export const To = props => {
    const classes = useStyles()

    return (
        <Link
            to={props.to}
            className={classes.link}
        >
            {props.title}
        </Link>
    )
}
