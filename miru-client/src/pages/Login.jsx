import React, { Fragment, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withSnackbar } from 'notistack'
import * as actions from '../actions'
import { Helmet } from 'react-helmet'
import { Form, Main, Password, FormMessage } from '../components'
import { TextField, Button } from '@material-ui/core'
import { isSessionActive } from '../utils/general'

class LoginPage extends Component {
    usernameHandler = event => this.props.actions.changeLoginUsername(event.target.value)

    passwordHandler = event => this.props.actions.changeLoginPassword(event.target.value)

    emailHandler = event => this.props.actions.changeLoginEmail(event.target.value)

    messageCloseHandler = key => this.props.closeSnackbar(key)

    errorMessageCloseHandler = key => {
        this.props.actions.restoreLoginError()
        this.props.closeSnackbar(key)
    }

    resendMessageCloseHandler = key => {
        this.props.actions.resendConfirmationFormMessageHandler()
        this.props.actions.restoreLoginError()
        this.props.closeSnackbar(key)
    }

    snackbarActions = key => {
        return (
            <Fragment>
                <Button
                    color='inherit'
                    onClick={() => this.messageCloseHandler(key)}
                    style={{ fontSize: '.8em' }}
                >
                    Entendido
                </Button>
                <Button
                    color='inherit'
                    onClick={() => this.resendMessageCloseHandler(key)}
                    style={{ fontSize: '.8em' }}
                >
                    Enviar el correo nuevamente
                </Button>
            </Fragment>
        )
    }

    errorSnackbarActions = key => {
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

    onSubmit = async event => {
        event.preventDefault()
        const user = { user_username: this.props.user_username, user_password: this.props.user_password }
        const session = await this.props.actions.login(user)
        localStorage.setItem('miru-session', JSON.stringify(session))
        this.props.history.push('/')
    }

    createMessageForJustRegisteredUser = () => {
        if (this.props.justRegistered) {
            this.props.enqueueSnackbar('¡Felicidades! Acabas de registrarte en Miru, por favor, antes de iniciar sesión verifica tu correo.', {
                action: this.snackbarActions,
                variant: 'success',
                autoHideDuration: 1000 * 20
            })
            this.props.actions.justRegisteredHandler()
        }
    }

    createSnackErrorMessages = () => {
        const confirmedError = 'El correo electrónico no ha sido confirmado.'
        if (this.props.error) {
            for (let error of Object.keys(this.props.error)) {
                if (this.props.error[error] === confirmedError) {
                    this.props.error[error] && this.props.enqueueSnackbar(this.props.error[error], {
                        action: this.snackbarActions,
                        variant: 'error',
                        autoHideDuration: 6000
                    })
                }
                if (this.props.error[error] && this.props.error[error] !== confirmedError) {
                    this.props.error[error] && this.props.enqueueSnackbar(this.props.error[error], {
                        action: this.errorSnackbarActions,
                        variant: 'error',
                        autoHideDuration: 6000
                    })
                }
            }
        }
    }

    resendConfirmationFormMessageHandler = () => this.props.actions.resendConfirmationFormMessageHandler()

    sendConfirmationEmail = event => {
        event.preventDefault()
        this.props.actions.resendConfirmationFormMessageHandler()
        this.props.actions.sendConfirmationEmail(this.props.user_email)
    }

    componentDidUpdate () {
        this.createSnackErrorMessages()
    }

    componentWillMount () {
        isSessionActive() && this.props.history.push('/')
    }

    componentDidMount () {
        this.createMessageForJustRegisteredUser()
    }

    render () {
        return (
            <Main>
                <Helmet>
                    <title>Miru - Inicia Sesión</title>
                </Helmet>
                <Form
                    maxWidth='xs'
                    buttonTitle='Inicia Sesión'
                    onSubmit={this.onSubmit}
                >
                    <TextField
                        id='miru-user-username'
                        label='Username'
                        type='Text'
                        margin='normal'
                        fullWidth
                        value={this.props.user_username}
                        onChange={this.usernameHandler}
                        required
                    />
                    <Password
                        id='miru-user-password'
                        label='Password'
                        margin='normal'
                        fullWidth
                        value={this.props.user_password}
                        onChange={this.passwordHandler}
                        required
                    />
                </Form>
                <FormMessage
                    open={this.props.resendConfirmationFormMessageOpen}
                    onClose={this.resendConfirmationFormMessageHandler}
                    title='Reenvio de correo de confirmación'
                    message='Ingresa tu correo para poder reenviar el mensaje de confirmación'
                    label='Email'
                    inputValue={this.props.email}
                    inputOnChange={this.emailHandler}
                    onSubmit={this.sendConfirmationEmail}
                    buttonTitle='Enviar'
                />
            </Main>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.login,
        justRegistered: state.register.justRegistered
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export const Login = withSnackbar(connect(mapStateToProps, mapDispatchToProps)(LoginPage))
