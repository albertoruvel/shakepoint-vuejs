import HttpService from '@/services/HttpService'
import {isLoggedIn} from '@/services/AuthenticationService'
let httpService = new HttpService()

export { httpService, isLoggedIn }
