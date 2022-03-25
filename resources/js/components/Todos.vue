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
import { computed } from 'vue'
import { useTodo } from '../store/todo'
import metadataMixin from '../mixins/metadata'

export default {
    mixins: [metadataMixin],
    setup() {
        const store = useTodo()

        return {
            todos: computed(() => store.results),
            loaded: computed(() => store.loaded),
            fetching: computed(() => store.fetching),
            fetch: () => store.fetch(),
            clear: () => store.clear()
        }
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
    }
}
</script>
