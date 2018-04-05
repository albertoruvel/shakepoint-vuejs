var accessToken = 'accessToken'
var securityRole = 'securityRole'
// HttpService implementation here...
export function isLoggedIn () {
  let accessTokenValue = localStorage.getItem(accessToken)
  if (accessTokenValue !== '') {
    return true
  }
  return false
}

export function saveToken (token) {
  localStorage.setItem(accessToken, token)
}

export function getToken () {
  return localStorage.getItem(accessToken)
}

export function saveUserRole (role) {
  localStorage.setItem(securityRole, role)
}

export function getUserRole () {
  return localStorage.getItem(securityRole)
}
