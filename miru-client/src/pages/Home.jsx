import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

class HomePage extends Component {
    render () {
        return (
            <div>
                <Helmet>
                    <title>Miru</title>
                </Helmet>
            </div>
        )
    }
}

export const Home = connect()(HomePage)
