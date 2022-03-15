import http from './jsonplaceholder'

export default {
    get() {
        return new Promise((resolve, reject) => {
            http.get('photos').then((response) => {
                resolve(response.data)
            }).catch(reject)
        })
    }
}
