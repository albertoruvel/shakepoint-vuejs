//let host = 'https://35.160.133.118/shakepoint-rest-api/rest/v1/'
let host = 'http://localhost:8080/shakepoint-rest-api/rest/v1/'
export function getAddress(path) {
    return host + path
}
