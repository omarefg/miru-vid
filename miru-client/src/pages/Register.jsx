import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Helmet } from 'react-helmet'
import { Form, Main, Password, DateInput } from '../components'
import TextField from '@material-ui/core/TextField'

class RegisterPage extends Component {
    render () {
        return (
            <Main>
                <Helmet>
                    <title>Miru - Regístrate</title>
                </Helmet>
                <Form
                    maxWidth='xs'
                    buttonTitle='Regístrate'
                >
                    <TextField
                        id='name'
                        label='Name'
                        type='Text'
                        margin='normal'
                        fullWidth
                    />
                    <TextField
                        id='lastname'
                        label='Last Name'
                        type='Text'
                        margin='normal'
                        fullWidth
                    />
                    <TextField
                        id='username'
                        label='Username'
                        type='Text'
                        margin='normal'
                        fullWidth
                    />
                    <DateInput
                        id='birthday'
                        label='Birthdate'
                        clearable
                    />
                    <TextField
                        id='email'
                        label='Email'
                        type='Text'
                        margin='normal'
                        fullWidth
                    />
                    <Password
                        id='password'
                        label='Password'
                        margin='normal'
                        fullWidth
                    />
                    <Password
                        id='confirmpassword'
                        label='Confirm Password'
                        margin='normal'
                        fullWidth
                    />
                </Form>
            </Main>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.register,
        user: { ...state.register.user }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
