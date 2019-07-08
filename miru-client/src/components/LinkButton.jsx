import React from 'react'
import Button from '@material-ui/core/Button'
import { To } from './'

export const LinkButton = props => {
    return (
        <To
            to={props.to}
            title={<Button color={props.color}>{props.title}</Button>}
        />
    )
}
