<template>
    <div>
        <ChatRoom @change:room="changeRoom" :rooms="rooms" ref="chatRoomRef" />
        <ChatBox />
        <ChatInput />
        <div class="row my-5">
            <div class="col">
                <h1>Users connected : {{ chatUsers.length }}</h1>
                <button
                    type="button" class="btn btn-light"
                    v-for="(user, i) in chatUsers"
                    :key="`user_${i}`"
                    @click="changeRoom(user)"
                >{{ user }}</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Socket } from 'socket.io-client';
import { computed, inject, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import ChatBox from '../components/chat/ChatBox.vue';
import ChatInput from '../components/chat/ChatInput.vue';
import ChatRoom from '../components/chat/ChatRoom.vue';
import { RoomOption } from '../models/interfaces';
import useChatStore from '../store/chat.store';

// SHARED 
const socket = inject<Socket>('socket')
const chatStore = useChatStore()
const chatUsers = computed(() => chatStore.users)

const rooms: RoomOption[] = [
    { label: 'Canal General', name: 'general' },
    { label: 'Canal 2', name: 'room-2' }
]

// ROOM SECTION
const changeRoom = (name: string) => {
    socket?.emit('change-room', { roomName: name })
}

const chatRoomRef = ref()
onMounted(() => {
    setTimeout(() => {
        console.log(chatRoomRef.value)
    }, 4000)
})

    //chatRoom.value.setRooms([{ label: 'test', name: 'general' }])
// }, 3000)

// MESSAGES CHAT-BOX


// INPUT MESSAGE SECTION


</script>

<style scoped>
.chatbox {
    min-height: 200px;
    max-height: 300px;
    overflow: scroll;
}
</style>
