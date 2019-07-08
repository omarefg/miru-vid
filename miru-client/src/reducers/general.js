import * as actions from '../actions/types'

const initialState = {
    isDrawerOpen: false
}

const general = (state = initialState, action) => {
    switch (action.type) {
    case actions.CHANGE_DRAWER_OPEN_STATUS: {
        return {
            ...state,
            isDrawerOpen: !state.isDrawerOpen
        }
    }

    default:
        return state
    }
}

export default general
