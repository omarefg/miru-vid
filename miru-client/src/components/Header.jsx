import React, { Component } from 'react'
import { HeaderLayout, To, RightAligner } from './common'
import logo from '../assets/logo.png'
export class Header extends Component {
    render() { 
        return (
            <HeaderLayout>
                <To
                    title={<img src={logo} alt='logo'/>}
                    container='header-logo'
                    link='/'
                    type='link-logo'
                />
                <RightAligner
                    type='header-container'
                >
                    <To
                        type='header-link'
                        title='Inicia Sesión'
                        link='/inicia-sesion'
                    />
                    <To
                        title='Regístrate'
                        type='header-link'
                        link='registrate'
                    />
                </RightAligner>
            </HeaderLayout>
        )
    }
}