import axios from 'axios'
import * as actions from './types'
import { URL } from '../utils/webconfig'

export const changeRegisterUsername = username => {
    return {
        type: actions.CHANGE_REGISTER_USERNAME,
        payload: {
            user_username: username
        }
    }
}

export const changeRegisterPassword = password => {
    return {
        type: actions.CHANGE_REGISTER_PASSWORD,
        payload: {
            user_password: password
        }
    }
}

export const changeName = name => {
    return {
        type: actions.CHANGE_NAME,
        payload: {
            user_name: name
        }
    }
}

export const changeLastname = lastname => {
    return {
        type: actions.CHANGE_LASTNAME,
        payload: {
            user_lastname: lastname
        }
    }
}

export const changeBirthday = birthdate => {
    return {
        type: actions.CHANGE_BIRTHDAY,
        payload: {
            user_birthdate: birthdate
        }
    }
}

export const changeEmail = email => {
    return {
        type: actions.CHANGE_EMAIL,
        payload: {
            user_email: email
        }
    }
}

export const registerNewUser = user => async dispatch => {
    try {
        await axios.request({
            responseType: 'json',
            url: URL + '/user',
            method: 'post',
            data: user
        })
    } catch (error) {
        if (error.response && error.response.data) {
            dispatch({
                type: actions.ERROR_IN_NEW_USER,
                payload: {
                    usernameError: error.response.data.username ? 'El usuario ya está en uso.' : '',
                    emailError: error.response.data.email ? 'El email ya está en uso.' : '',
                    messageError: error.response.data.error || ''
                }
            })
        }
        if (!error.response && error.message) {
            dispatch({
                type: actions.ERROR_IN_NEW_USER,
                payload: {
                    messageError: error.message
                }
            })
        }
        throw error
    }
}

export const restoreRegisterError = () => {
    return {
        type: actions.RESTORE_REGISTER_ERROR
    }
}

export const justRegisteredHandler = () => {
    return {
        type: actions.JUST_REGISTERED_HANDLER
    }
}
