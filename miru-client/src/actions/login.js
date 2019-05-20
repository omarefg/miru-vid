import * as actions from './types'
import axios from 'axios'
import { URL } from '../utils/webconfig'


export const changeLoginUsername = username => {
    return {
        type: actions.CHANGE_LOGIN_USERNAME,
        payload: {
            username
        }
    }
}

export const changeLoginPassword = password => {
    return {
        type: actions.CHANGE_LOGIN_PASSWORD,
        payload: {
            password
        }
    }
}

export const login = user => async dispatch => {
    try {
        let res = await axios.request({
            responseType: 'json',
            url: URL + '/user/login',
            method: 'post',
            data: user
        })
        return res.data
    } catch (error) {
        dispatch({
            type: actions.ERROR_IN_USER_LOGIN,
            payload: {
                notConfirmedError: error.response.data.notConfirmed ? 'El correo electrónico no ha sido confirmado' : '',
                usernameError: error.response.data.username ? 'El usuario no es correcto' : '',
                passwordError: error.response.data.password ? 'La contraseña no es correcta' : '',
            }
        })
        throw error
    }
}