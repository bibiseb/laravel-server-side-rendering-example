import app from './app'
import pinia from './store'
import metadataPlugin from './store/plugins/metadata'

pinia.use(metadataPlugin)

if (window.hasOwnProperty('__INITIAL_STATE__')) {
    pinia.state.value = window.__INITIAL_STATE__
}

app.mount('#app')
