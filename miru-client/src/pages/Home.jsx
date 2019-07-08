import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { CardsSection, Main } from '../components'

class HomePage extends Component {
    render () {
        return (
            <Main
                isDrawerOpen={this.props.isDrawerOpen}
            >
                <Helmet>
                    <title>Miru</title>
                </Helmet>
                <CardsSection
                    title='Miru Recomienda'
                />
            </Main>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.general
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage)
