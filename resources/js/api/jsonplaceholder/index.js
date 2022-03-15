import axios from 'axios'
import http from 'axios/lib/adapters/http'
import xhr from 'axios/lib/adapters/xhr'
import { isServer } from '../../helpers'

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    adapter: isServer() ? http : xhr
})
