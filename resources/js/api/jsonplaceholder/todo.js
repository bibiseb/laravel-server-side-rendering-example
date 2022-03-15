import http from '.'

export default {
    get() {
        return new Promise((resolve, reject) => {
            http.get('todos').then((response) => {
                resolve(response.data)
            }).catch(reject)
        })
    }
}
