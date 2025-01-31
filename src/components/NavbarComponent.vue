<template>
  <div class="bg-olive container-fluid shadow-lg">
    <div class="row">
      <div class="col-3 d-flex">
        <RouterLink to="/">
          <img class="logo" src="../assets/logo/Riskier-logo.png">
        </RouterLink>
      </div>
      <nav class="d-flex gap-2 col-6 justify-content-center" v-motion-slide-top>
        <RouterLink to="dashboard">
          <span title="Dashboard" class="text-black material-symbols-outlined fs-1">
            sports_esports
          </span>
        </RouterLink>
        <RouterLink to="construction">
          <span title="Construction Page" class="text-black material-symbols-outlined fs-1">
            construction
          </span>
        </RouterLink>
        <RouterLink to="battle">
          <span title="Battle Page" class="text-black material-symbols-outlined fs-1">
            swords
          </span>
        </RouterLink>
        <RouterLink to="rules">
          <span title="Rules Page" class="text-black material-symbols-outlined fs-1">
            menu_book
          </span>
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.bg-olive{
  background-color: #7c8a71;
  padding: 10px;
}
.logo{
  max-width: 150px;
  padding: 10px;
}
.router-link-active {
  color: #FFDA96;
}
</style>
