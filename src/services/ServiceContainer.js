import AuthenticationService from '@/services/AuthenticationService'
import HttpService from '@/services/HttpService'

let authService = new AuthenticationService()
let httpService = new HttpService()

export default { authService, httpService }
