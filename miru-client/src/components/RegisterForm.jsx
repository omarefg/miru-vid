import React, { Component } from 'react'
import { Form, TextInput, FormLayout, DateInput, ErrorText } from './common'

export class RegisterForm extends Component {

    changeUsername = event => this.props.changeUsername(event.target.value)
    changePassword = event => this.props.changePassword(event.target.value)
    changeName = event => this.props.changeName(event.target.value)
    changeLastname = event => this.props.changeLastname(event.target.value)
    changeEmail = event => this.props.changeEmail(event.target.value)
    changeBirthday = event => this.props.changeBirthday(event.target.value)
    registerNewUser = event => {
        event.preventDefault()
        const user = {...this.props.user}
        this.props.registerNewUser(user)
    }

    render() { 
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
                    <TextInput
                        id='email'
                        placeholder='Email'
                        value={this.props.email}
                        onChange={this.changeEmail}
                        type='email'
                        required
                    />
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
                    {this.props.error &&
                        <ErrorText error={this.props.error}/>
                    }
                </Form>
            </FormLayout>
        )
    }
}