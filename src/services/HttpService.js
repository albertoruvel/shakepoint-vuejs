import {
    getAddress
}
from '@/services/constants'
import axios from 'axios'

export default class HttpService {
    post(token, path, body) {
        let address = getAddress(path)
        return axios.post(address, body, {
            headers: {
                Authorization: token
            }
        })
    }
    get(token, path) {
        let address = getAddress(path)
        return axios.get(address, {
            headers: {
                Authorization: token
            }
        })
    }
    multipartFormData(token, path, formData) {
        return axios.post(getAddress(path), formData, {
            headers: {
                Authorization: token
            }
        })
    }
}
