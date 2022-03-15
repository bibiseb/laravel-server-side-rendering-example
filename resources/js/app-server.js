/* global context, dispatch */

import { renderToString } from 'vue/server-renderer'
import app from './app'
import router from './router'
import pinia from './store'

pinia.state.value = {
    meta: {
        lang: context.lang,
        title: context.title
    }
}

router.push(context.url)

router.isReady().then(() => {
    renderToString(app).then((html) => {
        const state = JSON.stringify(pinia.state.value);
        const app = `<script>window.__INITIAL_STATE__ = ${state}</script><div id="app">${html}</div>`
        let scripts = ''

        context.scripts.forEach((url) => {
            scripts += `<script src="${url}"></script>`
        })

        const layout = `<!DOCTYPE html>
<html lang="${context.lang}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${context.title}</title>
    </head>
    <body>
        ${app}
        ${scripts}
    </body>
</html>`

        dispatch(layout)
    })
})
