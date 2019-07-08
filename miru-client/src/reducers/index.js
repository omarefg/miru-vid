import home from './home'
import login from './login'
import register from './register'
import general from './general'
import { combineReducers } from 'redux'

const Reducer = combineReducers({
    home,
    login,
    register,
    general
})

export default Reducer
