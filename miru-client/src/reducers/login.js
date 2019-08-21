import * as actions from '../actions/types'

const initialState = {
    user_username: '',
    user_password: '',
    error: '',
    resendConfirmationFormMessageOpen: false,
    user_email: ''
}

const login = (state = initialState, action) => {
    switch (action.type) {
    case actions.CHANGE_LOGIN_USERNAME: {
        return {
            ...state,
            ...action.payload,
            error: ''
        }
    }

    case actions.CHANGE_LOGIN_PASSWORD: {
        return {
            ...state,
            ...action.payload,
            error: ''
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
            ...action.payload,
            error: ''
        }
    }

    default:
        return state
    }
}

export default login
