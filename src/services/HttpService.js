import {getAddress} from '@/services/constants'
import axios from 'axios'

class HttpService {
  constructor () {
    console.log('creating httpService')
  }
  post (token, path, body) {
    console.log('Posting to some service' + path)
    let address = getAddress(path)
    return axios.post(address, body)
  }
}
