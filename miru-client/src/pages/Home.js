import React, { Component } from 'react'
import { App } from '../components/common'
import { Hat } from '../components'
import { connect } from 'react-redux'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Hat title='Miru'/>
                <App/>
            </div>
        )
    }
}

export const Home = connect()(HomePage)