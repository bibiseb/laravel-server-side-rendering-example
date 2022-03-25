<template>
    <div>
        <h1>Comments</h1>
        <p v-if="fetching">Fetching...</p>
        <ul v-if="loaded">
            <li v-for="comment in comments" :key="comment.id">
                <dl>
                    <dt>{{ comment.name }} &lt;{{ comment.email }}&gt;</dt>
                    <dd><em>{{ comment.body }}</em></dd>
                </dl>
            </li>
        </ul>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useComment } from '../store/comment'
import metadataMixin from '../mixins/metadata'

export default {
    mixins: [metadataMixin],
    setup() {
        const store = useComment()

        return {
            comments: computed(() => store.results),
            loaded: computed(() => store.loaded),
            fetching: computed(() => store.fetching),
            fetch: () => store.fetch(),
            clear: () => store.clear()
        }
    },
    async serverPrefetch() {
        this.setTitle('Comments')
        await this.fetch()
    },
    async mounted() {
        if (this.loaded) {
            return;
        }
        try {
            this.setTitle('Comments')
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
