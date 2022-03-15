import { defineStore } from 'pinia'
import commentApi from '../api/comment'

export const useComment = defineStore('comment', {
    state: () => {
        return {
            comments: [],
            fetching: false,
            loaded: false
        }
    },
    getters: {
        results(state) {
            return state.comments
        }
    },
    actions: {
        async fetch() {
            this.loaded = false
            this.fetching = true
            try {
                this.comments = await commentApi.get()
                this.loaded = true
            } catch(error) {
                this.todos = []
                return error
            } finally {
                this.fetching = false
            }
        },
        clear() {
            this.comments = []
            this.loaded = false
        }
    }
})
