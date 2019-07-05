import * as actions from '../actions/types'

const initialState = {
    username: '',
    password: '',
    error: '',
    resendConfirmationFormMessageOpen: false,
    email: ''
}

const login = (state = initialState, action) => {
    switch (action.type) {
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

    case actions.ERROR_IN_USER_LOGIN: {
        return {
            ...state,
            error: {
                ...action.payload
            }
        }
    }

    case actions.RESTORE_LOGIN_ERROR: {
        return {
            ...state,
            error: ''
        }
    }

    case actions.RESEND_CONFIRMATION_EMAIL_FORM_MESSAGE_HANDLER: {
        return {
            ...state,
            resendConfirmationFormMessageOpen: !state.resendConfirmationFormMessageOpen
        }
    }

    case actions.CHANGE_LOGIN_EMAIL: {
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
