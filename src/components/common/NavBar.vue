<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid d-flex justify-content-betwee">
            <a class="navbar-brand" href="#">Navbar</a>
            
            <div class="navbar-nav flex-row">
                <router-link to="/" class="nav-link active mx-3" aria-current="page">Home</router-link>
                <router-link to="/auth" class="nav-link">Auth</router-link>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
