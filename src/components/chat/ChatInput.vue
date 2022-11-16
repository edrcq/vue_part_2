<template>
    <div class="row">
        <div class="col-10">
            <input
                v-model="inputMsg"
                type="text"
                class="form-control"
                @keydown="sendWriting"
                @keypress.enter="sendMessage"
            >
        </div>
        <div class="col-2">
            <button
                class="btn btn-primary"
                @click="sendMessage"
            >Envoyer</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Socket } from 'socket.io-client';
import { inject, ref } from 'vue';

const inputMsg = ref('');
const socket = inject<Socket>('socket');

const sendMessage = () => {
    socket?.emit('new-message', { message: inputMsg.value })
    inputMsg.value = ''
}

let lastSendWriting = 0;
const sendWriting = () => {
    if (lastSendWriting < +new Date() - 300)
        socket?.emit('writing')
}
</script>

<style scoped>

</style>
