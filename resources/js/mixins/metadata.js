import { mapActions } from 'pinia'
import { useMetadata } from '../store/metadata'

export default {
    methods: {
        ...mapActions(useMetadata, ['setLang', 'setTitle'])
    }
}
