import React, { Component } from 'react'
import { Form, TextInput, FormLayout } from './common'

export class LoginForm extends Component {

    changeUsername = event => this.props.changeUsername(event.target.value)
    changePassword = event => this.props.changePassword(event.target.value)

    render() { 
        return (
            <FormLayout>
                <Form
                    title='Inicia Sesión'
                    button='Inicia Sesión'
                >
                    <TextInput
                        id='username'
                        placeholder='Nombre de usuario o correo'
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