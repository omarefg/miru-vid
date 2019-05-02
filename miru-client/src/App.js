import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import { Header } from './components'
import { Main } from './components/common'
import './index.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Main>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/inicia-sesion' component={Login}/>
                        <Route exact path='/registrate' component={Register}/>
                    </Main>
                </div>
            </BrowserRouter>
        )
    }
}

export default App