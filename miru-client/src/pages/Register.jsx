import React, { Component } from 'react'
import { Hat, RegisterForm } from '../components'
import { RegisterLayout } from '../components/layouts'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from '../actions'

class RegisterPage extends Component {
    render() {
        return (
            <RegisterLayout>
                <Hat title='Miru - Regístrate'/>
                <RegisterForm
                    username={this.props.user.username}
                    changeUsername={this.props.actions.changeRegisterUsername}
                    password={this.props.user.password}
                    changePassword={this.props.actions.changeRegisterPassword}
                    name={this.props.user.name}
                    changeName={this.props.actions.changeName}
                    lastname={this.props.user.lastname}
                    changeLastname={this.props.actions.changeLastname}
                    birthday={this.props.user.birthday}
                    changeBirthday={this.props.actions.changeBirthday}
                    email={this.props.user.email}
                    changeEmail={this.props.actions.changeEmail}
                    registerNewUser={this.props.actions.registerNewUser}
                    user={this.props.user}
                    usernameError={this.props.error.usernameError}
                    emailError={this.props.error.emailError}
                />
            </RegisterLayout>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.register,
        user: {...state.register.user}
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterPage)