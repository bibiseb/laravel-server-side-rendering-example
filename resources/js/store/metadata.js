import { defineStore } from 'pinia'

export const useMetadata = defineStore('metadata', {
    state: () => {
        return {
            lang: '',
            title: ''
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
