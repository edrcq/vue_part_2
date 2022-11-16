import { io } from 'socket.io-client'
import { App } from 'vue'

export const socket = io(import.meta.env.VITE_WS_URI, {
    transports: ['websocket'],
})

// Vue 3 plugin socket.io
export const VueSocketPlugin = {
    install(app: App, options: any) {
        // Vue 2 --> (OPTIONS API)
        app.config.globalProperties.$socket = socket;

        // Vue 3 --> (Composition API)
        app.provide('socket', socket)
    }
}
