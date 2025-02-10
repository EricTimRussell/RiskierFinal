<template>
  <header>
    <NavbarComponent />
  </header>
  <Suspense>
    <RouterView />
  </Suspense>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarComponent from "./components/NavbarComponent.vue";

</script>




<style>


</style>
