import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Home from './components/Home'
import Photos from './components/Photos'
import Todos from './components/Todos'
import Comments from './components/Comments'
import Meta from './components/Meta'
import { isServer } from './helpers'

const routes = [
    { path: '/', component: Home },
    { path: '/photos', component: Photos },
    { path: '/todos', component: Todos },
    { path: '/comments', component: Comments },
    { path: '/meta', component: Meta },
]

const history = isServer() ? createMemoryHistory() : createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router
