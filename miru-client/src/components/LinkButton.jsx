import React from 'react'
import Button from '@material-ui/core/Button'
import { To } from './'

export const LinkButton = props => {
    return (
        <Button
            color={props.color}
        >
            <To
                to={props.to}
                title={props.title}
            />
        </Button>
    )
}
