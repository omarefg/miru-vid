import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, Badge } from '@material-ui/core'
import { Mail, Notifications, AccountCircle } from '@material-ui/icons'

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
            <IconButton aria-label='Show 4 new mails' color='inherit'>
                <Badge badgeContent={4} color='secondary'>
                    <Mail />
                </Badge>
            </IconButton>

            <IconButton aria-label='Show 17 new notifications' color='inherit'>
                <Badge badgeContent={17} color='secondary'>
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
