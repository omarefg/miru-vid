import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { LinkButton, To, SessionHeader } from './'
import { isSessionActive } from '../utils/general'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}))

export const Header = () => {
    const classes = useStyles()

    const [state, setState] = useState({
        anchorEl: null,
        mobileMoreAnchorEl: null,
        showDrawer: false
    })

    const isMenuOpen = Boolean(state.anchorEl)
    const isMobileMenuOpen = Boolean(state.mobileMoreAnchorEl)

    const profileMenuOpenHandler = event => setState({ ...state, anchorEl: event.currentTarget })
    const handleMenuClose = () => setState({ ...state, anchorEl: null })
    const mobileMenuOpenHandler = event => setState({ ...state, mobileMoreAnchorEl: event.currentTarget })
    const handleMobileMenuClose = () => setState({ ...state, mobileMoreAnchorEl: null })
    const showDrawerHandler = () => setState({ ...state, showDrawer: !state.showDrawer })

    if (isSessionActive()) {
        return (
            <SessionHeader
                menuId='primary-search-account-menu'
                mobileMenuId='primary-search-account-menu-mobile'
                profileMenuOpenHandler={profileMenuOpenHandler}
                handleMenuClose={handleMenuClose}
                mobileMenuOpenHandler={mobileMenuOpenHandler}
                handleMobileMenuClose={handleMobileMenuClose}
                isMenuOpen={isMenuOpen}
                isMobileMenuOpen={isMobileMenuOpen}
                showDrawerHandler={showDrawerHandler}
                showDrawer={state.showDrawer}
            />
        )
    }

    return (
        <div className={classes.root}>
            <AppBar
                position='fixed'
                color='primary'
            >
                <Toolbar>
                    <Typography
                        variant='h6'
                        className={classes.title}
                    >
                        <To
                            to='/'
                            title='Miru'
                        />
                    </Typography>
                    <LinkButton
                        color='inherit'
                        to='/registrate'
                        title='Regístrate'
                    />
                    <LinkButton
                        color='inherit'
                        to='/inicia-sesion'
                        title='Inicia Sesión'
                    />
                </Toolbar>
            </AppBar>
        </div>
    )
}
