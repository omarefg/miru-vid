import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages'
import './index.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <main>
                        <Route exact path='/' component={Home}/>
                    </main>
                </div>
            </BrowserRouter>
        )
    }
}

export default App