import { defineAsyncComponent } from 'vue'
import templateApi from '../api/self/template'
import Loading from '../components/Loading'
import Error from '../components/Error'

export default {
    computed: {
        asyncComponent() {
            return (namespace, data) => {
                const component = {
                    data() {
                        return data
                    }
                }
                return defineAsyncComponent({
                    loader: () => new Promise((resolve, reject) => {
                        templateApi.get(namespace).then((template) => {
                            resolve({
                                ...component,
                                template
                            })
                        }).catch(error => reject)
                    }),
                    loadingComponent: Loading,
                    delay: 200,
                    errorComponent: Error,
                    timeout: 3000
                })
            }
        }
    }
}
