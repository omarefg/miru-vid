import React, { Component } from 'react'
import { Form, TextInput, FormLayout, DateInput, ErrorText } from './common'

export class RegisterForm extends Component {
    changeUsername = event => this.props.changeUsername(event.target.value)
    changePassword = event => this.props.changePassword(event.target.value)
    changeName = event => this.props.changeName(event.target.value)
    changeLastname = event => this.props.changeLastname(event.target.value)
    changeEmail = event => this.props.changeEmail(event.target.value)
    changeBirthday = event => this.props.changeBirthday(event.target.value)
    registerNewUser = async event => {
        event.preventDefault()
        let user = { ...this.props.user }
        this.props.registerNewUser(user)
            .then(user => {
                this.props.history.push('/inicia-sesion')
            })
            .catch(error => console.log(error.response))
    }

    render () {
        return (
            <FormLayout>
                <Form
                    title='Regístrate'
                    button='Regístrate'
                    onSubmit={this.registerNewUser}
                >
                    <TextInput
                        id='name'
                        placeholder='Nombre'
                        value={this.props.name}
                        onChange={this.changeName}
                        required
                    />
                    <TextInput
                        id='lastname'
                        placeholder='Apellido'
                        value={this.props.lastname}
                        onChange={this.changeLastname}
                        required
                    />
                    <DateInput
                        id='birthdate'
                        title='Fecha de nacimiento'
                        value={this.props.birthday}
                        onChange={this.changeBirthday}
                    />
                    {this.props.emailError &&
                        <ErrorText error={this.props.emailError}/>
                    }
                    <TextInput
                        id='email'
                        placeholder='Email'
                        value={this.props.email}
                        onChange={this.changeEmail}
                        type='email'
                        required
                    />
                    {this.props.usernameError &&
                        <ErrorText error={this.props.usernameError}/>
                    }
                    <TextInput
                        id='username'
                        placeholder='Nombre de usuario'
                        value={this.props.username}
                        onChange={this.changeUsername}
                        required
                    />
                    <TextInput
                        id='password'
                        placeholder='Contraseña'
                        value={this.props.password}
                        onChange={this.changePassword}
                        type='password'
                        required
                    />
                </Form>
            </FormLayout>
        )
    }
}
