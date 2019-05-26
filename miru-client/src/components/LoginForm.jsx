import React, { Component } from 'react'
import { Form, TextInput, FormLayout, ErrorText } from './common'

export class LoginForm extends Component {

    changeUsername = event => this.props.changeUsername(event.target.value)
    changePassword = event => this.props.changePassword(event.target.value)

    login = event => {
        event.preventDefault()
        let user = {username: this.props.username, password: this.props.password}
        this.props.login(user)
            .then(user => {
                localStorage.setItem('miru-session', JSON.stringify(user))
            })
            .catch(error => console.log(error.response))
    }

    render() { 
        return (
            <FormLayout>
                <Form
                    title='Inicia Sesión'
                    button='Inicia Sesión'
                    onSubmit={this.login}
                >
                    {this.props.successMessage &&
                        <ErrorText error={this.props.successMessage}/>
                    }
                    {this.props.notConfirmedError &&
                        <ErrorText error={this.props.notConfirmedError}/>
                    }
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
                    {this.props.passwordError &&
                        <ErrorText error={this.props.passwordError}/>
                    }
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