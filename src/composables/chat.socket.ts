import { inject, onBeforeUnmount } from "vue";
import { Socket } from 'socket.io-client'
import useChatStore from "../store/chat.store";
import { AuthMeResSocket } from "../models/interfaces";

export function useChatSocket() {
    const socket = inject<Socket>('socket')
    

}

export function useChatAuthMe() {
    const socket = inject<Socket>('socket')
    const chatStore = useChatStore()

    socket?.on('user-list', (data: AuthMeResSocket) => {
        console.log('user-list', data)
        chatStore.users = data.users
    })

    onBeforeUnmount(() => {
        socket?.off('user-list')
    })
}
