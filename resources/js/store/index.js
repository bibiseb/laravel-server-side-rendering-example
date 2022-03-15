import { createPinia } from 'pinia'
import metadataPlugin from './plugins/metadata'
import { isServer } from '../helpers'

const pinia = createPinia()

if (!isServer()) {
    pinia.use(metadataPlugin)
}

export default pinia
