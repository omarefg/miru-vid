import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }
}))

export const HeaderMobileSection = props => {
    const classes = useStyles()

    return (
        <div className={classes.sectionMobile}>
            <IconButton
                aria-label='Show more'
                aria-controls={props.mobileMenuId}
                aria-haspopup='true'
                onClick={props.mobileMenuOpenHandler}
                color='inherit'
            >
                <MoreVert />
            </IconButton>
        </div>
    )
}
