export const isSessionActive = () => {
    if (localStorage.getItem('miru-session')) {
        return true
    }
    return false
}

export const DRAWER_WIDTH = 240
