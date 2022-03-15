<template>
    <div>
        <h1>Meta</h1>
        <ul>
            <li>Lang: {{ lang }}</li>
            <li>Title: {{ title }}</li>
        </ul>
        <form @submit.prevent="update">
            <p><input name="lang" v-model="innerLang"> : Language</p>
            <p><input name="title" v-model="innerTitle"> : Title</p>
            <button>Update</button>
        </form>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useMetadata } from '../store/metadata'
import metadataMixin from '../mixins/metadata'

export default {
    data() {
        return {
            innerLang: '',
            innerTitle: ''
        }
    },

    computed: {
        ...mapState(useMetadata, ['lang', 'title'])
    },

    methods: {
        update() {
            this.setLang(this.innerLang)
            this.setTitle(this.innerTitle)
        }
    },

    serverPrefetch() {
        this.setTitle('Meta')
    },

    mounted() {
        this.setTitle('Meta')
        this.innerLang = this.lang
        this.innerTitle = this.title
    },

    mixins: [metadataMixin]
}
</script>
