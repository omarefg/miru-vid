import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Helmet } from 'react-helmet'
import { Form, Main, Password } from '../components'
import TextField from '@material-ui/core/TextField'

class LoginPage extends Component {
    usernameHandler = event => this.props.actions.changeLoginUsername(event.target.value)
    passwordHandler = event => this.props.actions.changeLoginPassword(event.target.value)

    render () {
        return (
            <Main>
                <Helmet>
                    <title>Miru - Inicia Sesión</title>
                </Helmet>
                <Form
                    maxWidth='xs'
                    buttonTitle='Inicia Sesión'
                >
                    <TextField
                        id='username'
                        label='Username'
                        type='Text'
                        margin='normal'
                        fullWidth
                        value={this.props.username}
                        onChange={this.usernameHandler}
                    />
                    <Password
                        id='password'
                        label='Password'
                        margin='normal'
                        fullWidth
                        value={this.props.password}
                        onChange={this.passwordHandler}
                    />
                </Form>
            </Main>
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
