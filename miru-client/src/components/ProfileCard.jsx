import React from 'react'
import { MenuItem, Menu } from '@material-ui/core'

export const ProfileCard = props => {
    return (
        <Menu
            anchorEl={props.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={props.id}
            keepMounted
            open={props.open}
            onClose={props.onClose}
        >
            <MenuItem onClick={props.profileHandler}>Perfil</MenuItem>
            <MenuItem onClick={props.logoutHandler}>Cerrar sesión</MenuItem>
        </Menu>
    )
}
