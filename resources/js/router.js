import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Home from './components/Home'
import Photos from './components/Photos'
import Todos from './components/Todos'
import Comments from './components/Comments'

const routes = [
    { path: '/', component: Home },
    { path: '/photos', component: Photos },
    { path: '/todos', component: Todos },
    { path: '/comments', component: Comments },
]

const history = typeof window === 'undefined' ? createMemoryHistory() : createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router