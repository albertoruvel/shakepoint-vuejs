import injector from 'vue-inject'
export default class AuthenticationService {
  // HttpService implementation here...
  isLoggedIn () {
    console.log('Will check if logged in from here')
    if (localStorage.getItem('accessToken') !== '') {
      return true
    }
    return false
  }

  saveToken (token) {
    localStorage.setItem('accessToken', token)
  }

  getToken () {
    return localStorage.getItem('accessToken')
  }
}
injector.service('authService', AuthenticationService)
