import http from '.'

export default {
    get() {
        return new Promise((resolve, reject) => {
            http.get('comments').then((response) => {
                resolve(response.data)
            }).catch(reject)
        })
    }
}
