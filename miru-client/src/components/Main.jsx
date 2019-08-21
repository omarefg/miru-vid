import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { DRAWER_WIDTH } from '../utils/general'

const useStyles = makeStyles(theme => ({
    main: {
        paddingTop: '70px',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    mainShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    }
}))

export const Main = props => {
    const classes = useStyles()
    const className = clsx(
        classes.main,
        {
            [classes.mainShift]: props.isDrawerOpen
        }
    )

    return (
        <div
            className={className}
        >
            {props.children}
        </div>
    )
}
