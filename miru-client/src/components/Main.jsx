import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    main: {
        paddingTop: '70px'
    }
}))

export const Main = props => {
    const classes = useStyles()

    return (
        <div
            className={classes.main}
        >
            {props.children}
        </div>
    )
}
