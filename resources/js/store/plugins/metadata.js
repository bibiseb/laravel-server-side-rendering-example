export default function ({ store }) {
    store.$subscribe((mutation, state) => {
        if (mutation.storeId === 'metadata') {
            document.documentElement.setAttribute('lang', state.lang)
            document.title = state.title
        }
    })
}
