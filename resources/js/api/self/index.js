import axios from 'axios'
import http from 'axios/lib/adapters/http'
import xhr from 'axios/lib/adapters/xhr'
import { isServer } from '../../helpers'

export default axios.create({
    baseURL: 'http://spatie-ssr.test/',
    adapter: isServer() ? http : xhr
})
