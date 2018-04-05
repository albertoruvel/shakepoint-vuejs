import {getAddress} from '@/services/constants'
import axios from 'axios'

export default class HttpService {
  post (token, path, body) {
    console.log('Posting to ' + path)
    let address = getAddress(path)
    return axios.post(address, body)
  }
}
