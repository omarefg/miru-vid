import axios from 'axios'
import * as actions from './types'
import { URL } from '../utils/webconfig'

export const changeRegisterUsername = username => {
    return {
        type: actions.CHANGE_REGISTER_USERNAME,
        payload: {
            username
        }
    }
}

export const changeRegisterPassword = password => {
    return {
        type: actions.CHANGE_REGISTER_PASSWORD,
        payload: {
            password
        }
    }
}

export const changeName = name => {
    return {
        type: actions.CHANGE_NAME,
        payload: {
            name
        }
    }
}

export const changeLastname = lastname => {
    return {
        type: actions.CHANGE_LASTNAME,
        payload: {
            lastname
        }
    }
}

export const changeBirthday = birthday => {
    return {
        type: actions.CHANGE_BIRTHDAY,
        payload: {
            birthday
        }
    }
}

export const changeEmail = email => {
    return {
        type: actions.CHANGE_EMAIL,
        payload: {
            email
        }
    }
}

export const registerNewUser = user => async dispatch => {
    try {
        let res = await axios.request({
            responseType: 'json',
            url: URL + '/user',
            method: 'post',
            data: user
        })
        return res.data
    } catch (error) {
        dispatch({
            type: actions.ERROR_IN_NEW_USER,
            payload: {
                error: error.response.data.error
            }
        })
    }
}