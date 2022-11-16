import { defineStore } from "pinia";
import { Message, NewMessageResSocket, Room } from "../models/interfaces";

interface WritingUser {
    name: string
    timeout: number
}

interface ChatState {
    history: Message[],
    rooms: Room[],
    writings: WritingUser[],
    users: string[],
}

const useChatStore = defineStore('chat', {
    state: (): ChatState => ({
        history: [],
        // unused rooms
        rooms: [],
        writings: [],
        users: [],
    }),
    actions: {
        // sendMessage(message: string) {
        //     // socket.emit('new-message', { message })
        // },
        addMessage(payload: NewMessageResSocket) {
            this.history.push({
                text: payload.message,
                name: payload.name,
                createdAt: new Date(),
            })
        },
        setWriting(name: string) {
            const index = this.writings.findIndex(wu => wu.name === name)
            if (index > -1) {
                const wu = this.writings[index]
                clearTimeout(wu.timeout)
                wu.timeout = setTimeout(() => this.writings.splice(index, 1), 400)
            } else {
                const spliceIndex = this.writings.length
                this.writings.push({
                    name: name,
                    timeout: setTimeout(
                        () => this.writings.splice(spliceIndex, 1), 400)
                })
            }
        }
    }
})

export default useChatStore
