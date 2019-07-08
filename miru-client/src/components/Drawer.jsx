import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { ListItemText, ListItemIcon, ListItem, IconButton, Drawer as DrawerUI, List, Divider } from '@material-ui/core'
import { Mail, MoveToInbox, ChevronRight, ChevronLeft } from '@material-ui/icons'
import { DRAWER_WIDTH } from '../utils/general'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
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
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: 'none'
    },
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0
    },
    drawerPaper: {
        width: DRAWER_WIDTH
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -DRAWER_WIDTH
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
}))

export const Drawer = props => {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <DrawerUI
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={props.open}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={props.showDrawerHandler}>
                    {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </DrawerUI>
    )
}
