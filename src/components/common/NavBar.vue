<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid d-flex justify-content-betwee">
            <a class="navbar-brand" href="#">Navbar</a>
            
            <div class="navbar-nav flex-row">
                <router-link to="/" class="nav-link active mx-3" aria-current="page">Home</router-link>
                <router-link to="/auth" class="nav-link mx-3">Auth</router-link>
                <router-link v-if="isLoggedIn" to="/chat" class="nav-link mx-3">Chat</router-link>
                <a
                    v-if="isLoggedIn"
                    href="#" class="nav-link"
                    @click="authStore.logout"
                >{{ userEmail }}</a>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import useAuthStore from '../../store/auth.store';

const authStore = useAuthStore()
const isLoggedIn = computed(() => authStore.isLoggedIn)
const userEmail = computed(() => authStore.userEmail)
</script>

<style scoped>

</style>
