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
import { mapState, mapActions } from 'pinia'
import { useComment } from '../store/comment'
import { useMetadata } from '../store/metadata'

export default {
    computed: {
        ...mapState(useComment, { comments: 'results', loaded: 'loaded', fetching: 'fetching' })
    },

    methods: {
        ...mapActions(useComment, ['fetch']),
        ...mapActions(useMetadata, ['setTitle'])
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
    }
}
</script>
