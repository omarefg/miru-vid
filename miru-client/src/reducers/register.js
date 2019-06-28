import * as actions from '../actions/types'

const initialState = {
    user: {
        name: '',
        lastname: '',
        birthday: '',
        email: '',
        username: '',
        password: ''
    },
    error: ''
}

const login = (state = initialState, action) => {
    switch (action.type) {
    case actions.CHANGE_REGISTER_USERNAME: {
        return {
            ...state,
            user: {
                ...state.user,
                ...action.payload
            }
        }
    }
    case actions.CHANGE_REGISTER_PASSWORD: {
        return {
            ...state,
            user: {
                ...state.user,
                ...action.payload
            }
        }
    }
    case actions.CHANGE_NAME: {
        return {
            ...state,
            user: {
                ...state.user,
                ...action.payload
            }
        }
    }
    case actions.CHANGE_LASTNAME: {
        return {
            ...state,
            user: {
                ...state.user,
                ...action.payload
            }
        }
    }
    case actions.CHANGE_BIRTHDAY: {
        return {
            ...state,
            user: {
                ...state.user,
                ...action.payload
            }
        }
    }
    case actions.CHANGE_EMAIL: {
        return {
            ...state,
            user: {
                ...state.user,
                ...action.payload
            }
        }
    }
    case actions.ERROR_IN_NEW_USER: {
        return {
            ...state,
            error: {
                ...action.payload
            }
        }
    }
    default:
        return state
    }
}

export default login
