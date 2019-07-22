import React from 'react'
import { IconButton, Badge, MenuItem, Menu } from '@material-ui/core'
import { AccountCircle, Notifications } from '@material-ui/icons'

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
                <IconButton aria-label='' color='inherit'>
                    <Badge badgeContent={null} color='secondary'><Notifications/></Badge>
                </IconButton>
                <p>Notificationes</p>
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
                <p>Perfil</p>
            </MenuItem>
        </Menu>
    )
}
