<template>
    <div>
        <h1>Todos</h1>
        <p v-if="fetching">Fetching...</p>
        <ul v-if="loaded">
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useTodo } from '../store/todo'
import metadataMixin from '../mixins/metadata'

export default {
    computed: {
        ...mapState(useTodo, { todos: 'results', loaded: 'loaded', fetching: 'fetching' })
    },

    methods: {
        ...mapActions(useTodo, ['fetch', 'clear'])
    },

    async serverPrefetch() {
        this.setTitle('Todos')
        await this.fetch()
    },

    async mounted() {
        if (this.loaded) {
            return;
        }
        try {
            this.setTitle('Todos')
            await this.fetch()
        } catch (error) {
            console.error(error)
        }
    },

    unmounted() {
        this.clear()
    },

    mixins: [metadataMixin]
}
</script>
