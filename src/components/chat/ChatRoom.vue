<template>
    <div class="row">
        <div class="col">
            <select
                class="form-select form-select-lg mb-3"
                @change="$emit('change:room', roomName)"
                v-model="roomName"
            >
                <option v-for="(cat, i) in roomsRef" :value="cat.name">{{ cat.label }}</option>
            </select>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RoomOption } from '../../models/interfaces';

interface ChatRoomProps {
    rooms: RoomOption[]
}

const props = defineProps<ChatRoomProps>()

const roomName = ref('general')

const roomsRef = ref(props.rooms)

const setRooms = (rooms: RoomOption[]) => roomsRef.value = rooms;

</script>

<style scoped>

</style>
