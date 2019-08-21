import * as actions from './types'

export const drawerOpenStatusHandler = () => {
    return {
        type: actions.CHANGE_DRAWER_OPEN_STATUS
    }
}

export const hasSessionStatusHandler = hasSession => {
    return {
        type: actions.CHANGE_HAS_SESSION_STATUS,
        payload: {
            hasSession
        }
    }
}
