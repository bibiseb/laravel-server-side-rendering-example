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
import { ref, computed } from 'vue'
import { useMetadata } from '../store/metadata'
import metadataMixin from '../mixins/metadata'

export default {
    mixins: [metadataMixin],

    setup() {
        const store = useMetadata()
        const setLang = (lang) => {
            store.setLang(lang)
        }
        const setTitle = (title) => {
            store.setTitle(title)
        }
        const innerLang = ref('')
        const innerTitle = ref('')
        const update = () => {
            setLang(innerLang.value)
            setTitle(innerTitle.value)
        }

        return {
            innerLang,
            innerTitle,
            update,
            lang: computed(() => store.lang),
            title: computed(() => store.title),
            setLang,
            setTitle
        }
    },

    serverPrefetch() {
        this.setTitle('Meta')
    },

    mounted() {
        this.setTitle('Meta')
        this.innerLang = this.lang
        this.innerTitle = this.title
    }
}
</script>
