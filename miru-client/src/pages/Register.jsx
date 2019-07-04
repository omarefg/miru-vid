import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Helmet } from 'react-helmet'
import { Form, Main, Password, DateInput, Message } from '../components'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'

class RegisterPage extends Component {
    nameHandler = event => this.props.actions.changeName(event.target.value)
    lastnameHandler = event => this.props.actions.changeLastname(event.target.value)
    usernameHandler = event => this.props.actions.changeRegisterUsername(event.target.value)
    birthdayHandler = date => this.props.actions.changeBirthday(date)
    emailHandler = event => this.props.actions.changeEmail(event.target.value)
    passwordHandler = event => this.props.actions.changeRegisterPassword(event.target.value)

    onSubmit = event => {
        event.preventDefault()
        this.props.actions.registerNewUser(this.props.user)
    }

    messageCloseHandler = () => this.props.actions.restoreError()

    render () {
        let isOpen

        if (this.props.error) {
            isOpen = true
        }

        return (
            <Main>
                <Helmet>
                    <title>Miru - Regístrate</title>
                </Helmet>
                <Form
                    maxWidth='xs'
                    buttonTitle='Regístrate'
                    onSubmit={this.onSubmit}
                >
                    <TextField
                        id='name'
                        label='Name'
                        type='Text'
                        margin='normal'
                        fullWidth
                        value={this.props.user.name}
                        onChange={this.nameHandler}
                    />
                    <TextField
                        id='lastname'
                        label='Last Name'
                        type='Text'
                        margin='normal'
                        fullWidth
                        value={this.props.user.lastname}
                        onChange={this.lastnameHandler}
                    />
                    <TextField
                        id='username'
                        label='Username'
                        type='Text'
                        margin='normal'
                        fullWidth
                        value={this.props.user.username}
                        onChange={this.usernameHandler}
                    />
                    <DateInput
                        id='birthday'
                        label='Birthdate'
                        clearable
                        value={this.props.user.birthday || new Date()}
                        onChange={this.birthdayHandler}
                    />
                    <TextField
                        id='email'
                        label='Email'
                        type='Text'
                        margin='normal'
                        fullWidth
                        value={this.props.user.email}
                        onChange={this.emailHandler}
                    />
                    <Password
                        id='password'
                        label='Password'
                        margin='normal'
                        fullWidth
                        value={this.props.user.password}
                        onChange={this.passwordHandler}
                    />
                </Form>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                    open={isOpen}
                    autoHideDuration={6000}
                    onClose={this.messageCloseHandler}
                >
                    <Message
                        variant='error'
                        message={`
                            ${this.props.error.messageError ? this.props.error.messageError : ''}
                            ${this.props.error.usernameError ? this.props.error.usernameError : ''}
                            ${this.props.error.emailError ? this.props.error.emailError : ''}
                        `}
                        onClose={this.messageCloseHandler}
                    />
                </Snackbar>
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
