import http from '.'

export default {
    get(name) {
        return new Promise((resolve, reject) => {
            http.get(`${name}.txt`).then((response) => {
                resolve(response.data)
            }).catch(reject)
        })
    }
}
