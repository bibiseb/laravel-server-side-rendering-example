<script setup>
import { usePhoto } from '../store/photo'
</script>

<template>
    <div>
        <h1>Photos</h1>
        <p v-if="fetching">Fetching...</p>
        <div v-if="loaded">
            <img v-for="photo in photos" :key="photo.id" :src="photo.thumbnailUrl" :alt="photo.title">
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'

export default {
    computed: {
        ...mapState(usePhoto, { photos: 'results', loaded: 'loaded', fetching: 'fetching' })
    },

    methods: {
        ...mapActions(usePhoto, ['fetch'])
    },

    async serverPrefetch() {
        await this.fetch()
    },

    async mounted() {
        if (this.loaded) {
            return;
        }
        try {
            await this.fetch()
        } catch (error) {
            console.error(error)
        }
    }
}
</script>
