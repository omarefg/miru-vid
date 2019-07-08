import React from 'react'
import { IconButton, Badge, MenuItem, Menu } from '@material-ui/core'
import { AccountCircle, Mail, Notifications } from '@material-ui/icons'

export const MobileHeaderMenu = props => {
    return (
        <Menu
            anchorEl={props.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={props.id}
            open={props.open}
            onClose={props.onClose}
            keepMounted
        >
            <MenuItem>
                <IconButton
                    aria-label='Show 4 new mails'
                    color='inherit'
                >
                    <Badge badgeContent={4} color='secondary'><Mail/></Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label='Show 11 new notifications' color='inherit'>
                    <Badge badgeContent={11} color='secondary'><Notifications/></Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={props.profileHandler}>
                <IconButton
                    aria-label='Account of current user'
                    aria-controls='primary-search-account-menu'
                    aria-haspopup='true'
                    color='inherit'
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    )
}
