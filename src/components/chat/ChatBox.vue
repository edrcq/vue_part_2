<template>
    <div class="row">
        <div class="col">
            <div class="list-group card chatbox" ref="chatbox">
                <div
                    v-for="(msg, i) in history"
                    :key="`msg${i}`"
                    class="list-group-item"
                >[{{ msg.name }}] : {{ msg.text }}</div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">{{ writings }}</div>
    </div>
</template>

<script setup lang="ts">
import { Socket } from 'socket.io-client';
import { inject, nextTick, onBeforeUnmount, ref, computed } from 'vue';
import { NewMessageResSocket, WritingSocket } from '../../models/interfaces';
import useChatStore from '../../store/chat.store';

const socket = inject<Socket>('socket')
const chatStore = useChatStore()

const history = computed(() => chatStore.history)
const writings = computed(() => chatStore.writings.map(wu => wu.name).join(', '))

const chatbox = ref()

socket?.on('new-message', (data: NewMessageResSocket) => {
    console.log(data.message, data.name)
    chatStore.addMessage(data)
    // scroll bottom chatbox après la prochaine update du composant
    nextTick(() => {
        chatbox.value.scrollTop = chatbox.value.scrollHeight
    })
})

socket?.on('writing', (data: WritingSocket) => {
    chatStore.setWriting(data.name)
})

onBeforeUnmount(() => {
    socket?.off('writing')
    socket?.off('new-message')
})
</script>

<style scoped>

</style>
