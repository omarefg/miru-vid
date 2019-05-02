import * as actions from './types'


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