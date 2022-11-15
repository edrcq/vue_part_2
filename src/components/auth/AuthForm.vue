<template>
    <form @submit.prevent="tryAuth">
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input v-model="form.email" type="email" class="form-control" id="email" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="form.password" type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-primary">
            {{ btnText }}
        </button>
    </form>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue';
import useAuthStore from '../../store/auth.store';
import Swal from 'sweetalert2'

const props = defineProps<{ registerMode: boolean }>()

const authStore = useAuthStore()

const btnText = computed(() => props.registerMode ? `Register` : `Login`)
const form = reactive({
    email: '',
    password: '',
})

const tryAuth = () => {
    if (props.registerMode) {
        authStore.register(form)
            .then((good) => {
                Swal.fire({ icon: good ? 'success' : 'error' })
            })
    } else {
        authStore.login(form)
            .then((good) => {
                Swal.fire({ icon: good ? 'success' : 'error' })
            })
    }
}
</script>

<style scoped>

</style>
