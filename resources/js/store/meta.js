import { defineStore } from 'pinia'

export const useMeta = defineStore('meta', {
    state: () => {
        return {
            lang: '',
            title: ''
        }
    },
    getters: {
        lang(state) {
            return state.lang
        },
        title(state) {
            return state.title
        }
    },
    actions: {
        setLang(lang) {
            this.lang = lang
        },
        setTitle(title) {
            this.title = title
        }
    }
})
