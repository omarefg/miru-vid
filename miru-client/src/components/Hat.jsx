import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export class Hat extends Component {
    render () {
        return (
            <Helmet>
                <title>{this.props.title}</title>
            </Helmet>
        )
    }
}
