import { defineStore } from "pinia";
import { Message, Room } from "../models/interfaces";

interface ChatState {
    rooms: Room[],
    writings: string[]
}

const useChatStore = defineStore('auth', {
    state: (): ChatState => ({
        rooms: [],
        writings: [],
    }),
    actions: {
        sendMessage(message: string) {
            // socket.emit('new-message', { message })
        },
        addMessage(payload: Message) {

        },
        setWriting(name: string) {

        }
    }
})

export default useChatStore
