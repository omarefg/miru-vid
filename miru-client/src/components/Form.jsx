import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    button: {
        marginTop: theme.spacing(1)
    }
}))

export const Form = props => {
    const classes = useStyles()

    return (
        <Container maxWidth={props.maxWidth}>
            <form
                autoComplete='off'
                onSubmit={props.onSubmit}
            >
                <Container maxWidth='lg'>
                    {props.children}
                    <Button
                        type='submit'
                        color='primary'
                        variant='contained'
                        className={classes.button}
                    >
                        {props.buttonTitle || 'Submit'}
                    </Button>
                </Container>
            </form>
        </Container>
    )
}
