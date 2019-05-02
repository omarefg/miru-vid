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
                    username={this.props.username}
                    changeUsername={this.props.actions.changeRegisterUsername}
                    password={this.props.password}
                    changePassword={this.props.actions.changeRegisterPassword}
                    name={this.props.name}
                    changeName={this.props.actions.changeName}
                    lastname={this.props.lastname}
                    changeLastname={this.props.actions.changeLastname}
                    birthday={this.props.birthday}
                    changeBirthday={this.props.actions.changeBirthday}
                    email={this.props.email}
                    changeEmail={this.props.actions.changeEmail}
                    registerNewUser={this.props.actions.registerNewUser}
                    user={this.props.user}
                />
            </RegisterLayout>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.register,
        user: {...state.register}
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterPage)