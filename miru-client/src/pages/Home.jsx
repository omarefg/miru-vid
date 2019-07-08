import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { CardsSection } from '../components'

class HomePage extends Component {
    render () {
        return (
            <div>
                <Helmet>
                    <title>Miru</title>
                </Helmet>
                <CardsSection/>
            </div>
        )
    }
}

export const Home = connect()(HomePage)
