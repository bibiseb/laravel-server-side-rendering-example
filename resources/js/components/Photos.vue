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
import { computed } from 'vue'
import { usePhoto } from '../store/photo'
import metadataMixin from '../mixins/metadata'

export default {
    mixins: [metadataMixin],
    setup() {
        const store = usePhoto()

        return {
            photos: computed(() => store.results),
            loaded: computed(() => store.loaded),
            fetching: computed(() => store.fetching),
            fetch: () => store.fetch(),
            clear: () => store.clear()
        }
    },
    async serverPrefetch() {
        this.setTitle('Photos')
        await this.fetch()
    },
    async mounted() {
        if (this.loaded) {
            return;
        }
        try {
            this.setTitle('Photos')
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
