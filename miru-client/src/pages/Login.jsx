import React, { Component } from 'react'
import { Hat, LoginForm } from '../components'
import { LoginLayout } from '../components/layouts'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from '../actions'
class LoginPage extends Component {
    render() {
        return (
            <LoginLayout>
                <Hat title='Miru - Inicia Sesión'/>
                <LoginForm
                    username={this.props.username}
                    password={this.props.password}
                    changeUsername={this.props.actions.changeLoginUsername}
                    changePassword={this.props.actions.changeLoginPassword}
                />
            </LoginLayout>
        )
    }
}

const mapStateToProps = state => {
    return { ...state.login }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage)