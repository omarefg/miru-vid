import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, Badge } from '@material-ui/core'
import { Notifications, AccountCircle } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    }
}))

export const HeaderDesktopSection = props => {
    const classes = useStyles()

    return (
        <div className={classes.sectionDesktop}>
            <IconButton aria-label='' color='inherit'>
                <Badge badgeContent={null} color='secondary'>
                    <Notifications />
                </Badge>
            </IconButton>

            <IconButton
                edge='end'
                aria-label='Account of current user'
                aria-controls={props.menuId}
                aria-haspopup='true'
                onClick={props.profileMenuOpenHandler}
                color='inherit'
            >
                <AccountCircle />
            </IconButton>
        </div>
    )
}
