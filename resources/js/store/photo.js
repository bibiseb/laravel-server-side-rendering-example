import { defineStore } from 'pinia'
import photoApi from '../api/photo'

export const usePhoto = defineStore('photo', {
    state: () => {
        return {
            photos: [],
            fetching: false,
            loaded: false
        }
    },
    getters: {
        results(state) {
            return state.photos
        }
    },
    actions: {
        async fetch() {
            this.loaded = false
            this.fetching = true
            try {
                this.photos = await photoApi.get()
                this.loaded = true
            } catch(error) {
                this.todos = []
                return error
            } finally {
                this.fetching = false
            }
        },
        clear() {
            this.photos = []
            this.loaded = false
        }
    }
})
