import { defineStore } from 'pinia'
import todoApi from '../api/jsonplaceholder/todo'

export const useTodo = defineStore('todo', {
    state: () => {
        return {
            todos: [],
            fetching: false,
            loaded: false
        }
    },
    getters: {
        results(state) {
            return state.todos
        }
    },
    actions: {
        async fetch() {
            this.loaded = false
            this.fetching = true
            try {
                this.todos = await todoApi.get()
                this.loaded = true
            } catch(error) {
                this.todos = []
                return error
            } finally {
                this.fetching = false
            }
        },
        clear() {
            this.todos = []
            this.loaded = false
        }
    }
})
