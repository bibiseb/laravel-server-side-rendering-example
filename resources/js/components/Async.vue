<template>
    <div>
        <component v-if="loaded" :is="asyncComponent('test', { message, todos })"></component>
    </div>
</template>

<script>
import asyncMixin from '../mixins/async'
import todoApi from '../api/jsonplaceholder/todo'

export default {
    data() {
        return {
            message: 'Hello world!',
            todos: [],
            loaded: false
        }
    },

    async created() {
        this.todos = await todoApi.get()
        this.loaded = true
    },

    mixins: [asyncMixin]
}
</script>
