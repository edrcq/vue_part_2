<script setup lang="ts">
import NavBar from './components/common/NavBar.vue';
import { useChatAuthMe } from './composables/chat.socket';
import useAuthStore from './store/auth.store';

useChatAuthMe()

const authStore = useAuthStore();
authStore.loadLocalStorage();

</script>

<template>
  <NavBar />
  <div class="container">
    <RouterView />
  </div>
  
</template>

<style scoped>

</style>
