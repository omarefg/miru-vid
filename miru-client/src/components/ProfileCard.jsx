import React from 'react'
import { MenuItem, Menu } from '@material-ui/core'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

const ProfileCardComponent = props => {
    const logoutHandler = () => {
        props.onClose()
        localStorage.removeItem('miru-session')
        props.actions.hasSessionStatusHandler(false)
    }

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
            <MenuItem onClick={logoutHandler}>Cerrar sesión</MenuItem>
        </Menu>
    )
}

const mapStateToProps = state => {
    return {
        ...state.general
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export const ProfileCard = connect(mapStateToProps, mapDispatchToProps)(ProfileCardComponent)
