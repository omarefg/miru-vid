import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withSnackbar } from 'notistack'
import * as actions from '../actions'
import { Helmet } from 'react-helmet'
import { Form, Main, Password, DateInput } from '../components'
import { TextField, Button } from '@material-ui/core'
import { getYYYYMMDDFromDate } from '../utils/general'

class RegisterPage extends Component {
    nameHandler = event => this.props.actions.changeName(event.target.value)
    lastnameHandler = event => this.props.actions.changeLastname(event.target.value)
    usernameHandler = event => this.props.actions.changeRegisterUsername(event.target.value)
    birthdayHandler = date => this.props.actions.changeBirthday(date)
    emailHandler = event => this.props.actions.changeEmail(event.target.value)
    passwordHandler = event => this.props.actions.changeRegisterPassword(event.target.value)

    onSubmit = event => {
        event.preventDefault()
        const user = { ...this.props.user }
        user.user_birthdate = getYYYYMMDDFromDate(user.user_birthdate)
        this.props.actions.registerNewUser(user)
            .then(() => {
                this.props.actions.justRegisteredHandler()
                this.props.history.push('/inicia-sesion')
            })
            .catch(error => console.log(error.response))
    }

    messageCloseHandler = key => {
        this.props.actions.restoreRegisterError()
        this.props.closeSnackbar(key)
    }

    snackbarActions = key => {
        return (
            <Button
                color='inherit'
                onClick={() => this.messageCloseHandler(key)}
                style={{ fontSize: '.8em' }}
            >
                Entendido
            </Button>
        )
    }

    createSnacks = () => {
        if (this.props.error) {
            for (let error of Object.keys(this.props.error)) {
                this.props.error[error] && this.props.enqueueSnackbar(this.props.error[error], {
                    action: this.snackbarActions,
                    variant: 'error',
                    autoHideDuration: 6000
                })
            }
        }
    }

    componentDidUpdate () {
        this.createSnacks()
    }

    componentDidMount () {
        this.props.hasSession && this.props.history.push('/')
    }

    render () {
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
                        id='miru-user-name'
                        label='Name'
                        type='Text'
                        margin='normal'
                        fullWidth
                        value={this.props.user.user_name}
                        onChange={this.nameHandler}
                        required
                    />
                    <TextField
                        id='miru-user-lastname'
                        label='Last Name'
                        type='Text'
                        margin='normal'
                        fullWidth
                        value={this.props.user.user_lastname}
                        onChange={this.lastnameHandler}
                        required
                    />
                    <TextField
                        id='miru-user-username'
                        label='Username'
                        type='Text'
                        margin='normal'
                        fullWidth
                        value={this.props.user.user_username}
                        onChange={this.usernameHandler}
                        required
                    />
                    <DateInput
                        id='miru-user-birthdate'
                        label='Birthdate'
                        clearable
                        value={this.props.user.user_birthdate || new Date()}
                        onChange={this.birthdayHandler}
                        required
                    />
                    <TextField
                        id='miru-user-email'
                        label='Email'
                        type='Text'
                        margin='normal'
                        fullWidth
                        value={this.props.user.user_email}
                        onChange={this.emailHandler}
                        required
                    />
                    <Password
                        id='miru-user-password'
                        label='Password'
                        margin='normal'
                        fullWidth
                        value={this.props.user.user_password}
                        onChange={this.passwordHandler}
                        required
                    />
                </Form>
            </Main>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.register,
        user: { ...state.register.user },
        ...state.general
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export const Register = withSnackbar(connect(mapStateToProps, mapDispatchToProps)(RegisterPage))
