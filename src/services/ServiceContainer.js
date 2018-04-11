import HttpService from '@/services/HttpService'
import {
    isLoggedIn, getUserRole, getToken, removeSession
}
from '@/services/AuthenticationService'
let httpService = new HttpService()

export {
    httpService, isLoggedIn, getUserRole, getToken, removeSession
}
