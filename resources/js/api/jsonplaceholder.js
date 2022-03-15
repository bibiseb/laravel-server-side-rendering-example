import axios from 'axios'
import http from 'axios/lib/adapters/http'
import xhr from 'axios/lib/adapters/xhr'

const adapter = typeof window === 'undefined' ? http : xhr

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    adapter
})
