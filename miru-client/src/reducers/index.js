import home from './home'
import login from './login'
import register from './register'
import { combineReducers } from 'redux'

const Reducer = combineReducers({
    home,
    login,
    register
})

export default Reducer
