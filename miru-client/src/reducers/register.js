import * as actions from '../actions/types'

const initialState = {
    name: '',
    lastname: '',
    birthday: '',
    email: '',
    username: '',
    password: ''
}

const login = (state = initialState, action) => {
    switch(action.type) {
        case actions.CHANGE_REGISTER_USERNAME: {
            return {
                ...state,
                ...action.payload
            }
        }
        case actions.CHANGE_REGISTER_PASSWORD: {
            return {
                ...state,
                ...action.payload
            }
        }
        case actions.CHANGE_NAME: {
            return {
                ...state,
                ...action.payload
            }
        }
        case actions.CHANGE_LASTNAME: {
            return {
                ...state,
                ...action.payload
            }
        }
        case actions.CHANGE_BIRTHDAY: {
            return {
                ...state,
                ...action.payload
            }
        }
        case actions.CHANGE_EMAIL: {
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