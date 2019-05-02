import * as actions from '../actions/types'

const initialState = {
    username: '',
    password: ''
}

const login = (state = initialState, action) => {
    switch(action.type) {
        case actions.CHANGE_LOGIN_USERNAME: {
            return {
                ...state,
                ...action.payload
            }
        }
        case actions.CHANGE_LOGIN_PASSWORD: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: 
            return state
        }
}

export default login