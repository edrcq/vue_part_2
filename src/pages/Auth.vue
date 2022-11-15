<template>
    <div>
        <h1>Login or Register NOW</h1>
        <div class="btn-group">
            <button
                class="btn"
                :class="{
                    'btn-white': !registerMode,
                    'btn-primary': registerMode,
                    active: registerMode
                }"
                type="button"
                @click="switchMode(true)"
            >Register</button>
            <button
                class="btn"
                type="button"
                :class="{
                    'btn-white': registerMode,
                    'btn-primary': !registerMode,
                    active: !registerMode
                }"
                @click="switchMode(false)"
            >Login</button>
        </div>
        <AuthForm :register-mode="registerMode" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AuthForm from '../components/auth/AuthForm.vue';

const registerMode = ref(true)
const switchMode = (mode: boolean) => registerMode.value = mode

</script>

<style scoped>

</style>
