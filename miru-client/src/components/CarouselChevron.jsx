import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Fade } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        background: 'rgba(0, 0, 0, .5)',
        height: '100%',
        width: '100%',
        display: 'flex',
        color: 'rgba(255, 255, 255, .75)',
        fontSize: '2em',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

export const CarouselChevron = props => {
    const classes = useStyles()

    return (
        <Fade in={props.checked}>
            <div className={clsx(classes.container, 'chevron')}>
                {props.chevron}
            </div>
        </Fade>
    )
}
