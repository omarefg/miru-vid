import React, { Component } from 'react'
import { Hat } from '../components'
import { connect } from 'react-redux'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Hat title='Miru'/>
            </div>
        )
    }
}

export const Home = connect()(HomePage)