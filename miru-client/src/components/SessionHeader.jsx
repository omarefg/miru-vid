import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { Drawer, ProfileCard, MobileHeaderMenu, HeaderSearcher, HeaderDesktopSection, HeaderMobileSection, To } from './'
import { DRAWER_WIDTH } from '../utils/general'

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    }
}))

export const SessionHeader = props => {
    const classes = useStyles()

    return (
        <div className={classes.grow}>
            <AppBar
                position='static'
                className={clsx(classes.appBar, { [classes.appBarShift]: props.showDrawer })}
            >
                <Toolbar>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='Open drawer'
                        onClick={props.showDrawerHandler}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        className={classes.title}
                        variant='h6'
                        noWrap
                    >
                        <To
                            to='/'
                            title='Miru'
                        />
                    </Typography>
                    <HeaderSearcher
                        placeholder='Search...'
                    />
                    <div className={classes.grow}/>
                    <HeaderDesktopSection
                        profileMenuOpenHandler={props.profileMenuOpenHandler}
                        menuId={props.menuId}
                    />
                    <HeaderMobileSection
                        mobileMenuOpenHandler={props.mobileMenuOpenHandler}
                        mobileMenuId={props.mobileMenuId}
                    />
                </Toolbar>
            </AppBar>
            <ProfileCard
                anchorEl={props.anchorEl}
                id={props.menuId}
                keepMounted
                open={props.isMenuOpen}
                onClose={props.handleMenuClose}
            />
            <MobileHeaderMenu
                anchorEl={props.mobileMoreAnchorEl}
                id={props.mobileMenuId}
                keepMounted
                open={props.isMobileMenuOpen}
                onClose={props.handleMobileMenuClose}
            />
            <Drawer
                showDrawerHandler={props.showDrawerHandler}
                open={props.showDrawer}
            />
        </div>
    )
}
