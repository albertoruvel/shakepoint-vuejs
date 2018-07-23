// HttpService implementation here...
export function isLoggedIn() {
    let session = JSON.parse(localStorage.getItem('session'))
    if (session != null && session.authenticationToken !== '') {
        return true
    }
    return false
}

export function setSession(authentication) {
    localStorage.setItem('session', JSON.stringify(authentication))
}

export function removeSession() {
    localStorage.clear()
}

export function getToken() {
    let session = JSON.parse(localStorage.getItem('session'))
    return session.authenticationToken
}

export function getUserRole() {
    return JSON.parse(localStorage.getItem('session')).role
}
