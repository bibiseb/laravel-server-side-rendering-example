<template>
    <div>
        <h1>Home</h1>
        <p>SSR experimentation</p>
    </div>
</template>

<script>
import metadataMixin from '../mixins/metadata'

export default {
    serverPrefetch() {
        this.setTitle('Home')
    },

    mounted() {
        this.setTitle('Home')
    },

    mixins: [metadataMixin]
}
</script>
