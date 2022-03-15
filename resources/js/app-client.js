import app from './app'
import pinia from './store'

if (window.hasOwnProperty('__INITIAL_STATE__')) {
    pinia.state.value = window.__INITIAL_STATE__
}

app.mount('#app')
