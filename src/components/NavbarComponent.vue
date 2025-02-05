<template>
  <div class="bg-green container-fluid shadow-lg">
    <div class="row">
      <div class="col-3 d-flex">
        <RouterLink to="/">
          <img class="logo img-fluid" src="../assets/logo/Riskier-logo.png">
        </RouterLink>
      </div>
      <nav class="gap-3 col-9 d-flex justify-content-evenly" v-motion-slide-top>
        <RouterLink to="dashboard">
          <span title="Dashboard" aria-current="page" class="nav-link active material-symbols-outlined ">
            sports_esports
          </span>
        </RouterLink>
        <RouterLink to="construction">
          <span title="Construction Page" aria-current="page" class="nav-link material-symbols-outlined">
            construction
          </span>
        </RouterLink>
        <RouterLink to="battle">
          <span title="Battle Page" aria-current="page" class="nav-link material-symbols-outlined">
            swords
          </span>
        </RouterLink>
        <RouterLink to="rules">
          <span title="Rules Page" aria-current="page" class="nav-link material-symbols-outlined">
            menu_book
          </span>
        </RouterLink>
      </nav>
      <div class="col-12 d-flex justify-content-evenly pt-4 pb-2 px-2 text-light">
        <div v-motion-roll-bottom>
          <span class="material-symbols-outlined text-warning fs-1">
            attach_money
          </span>
          <span title="Total Capital" class="fs-1 text">0</span>
          <!-- <span title="Total Capital" class="fs-1 text-danger">0</span> -->
        </div>
        <div v-motion-roll-bottom>
          <span class="material-symbols-outlined text-secondary fs-1">
            factory
          </span>
          <span title="Total Industry" class="fs-1">0</span>
          <!-- <span title="Total Industry" v-if="teams.totalIndustry < 0" class="fs-1 text-danger">0</span> -->
        </div>
        <div v-motion-roll-bottom>
          <span class="material-symbols-outlined text-success fs-1">
            psychiatry
          </span>
          <span title="Total Agriculture" class="fs-1">0</span>
          <!-- <span title="Total Agriculture" v-if="teams.totalAgriculture < 0" class="fs-1 text-danger">{{
            teams.totalAgriculture }}</span> -->
        </div>
        <div v-motion-roll-bottom>
          <span class="material-symbols-outlined text-dark fs-1">
            build
          </span>
          <span title="Total Production" class="fs-1">0</span>
          <!-- <span title="Total Production" v-if="teams.totalProduction < 0" class="fs-1 text-danger">{{
            teams.totalProduction
            }}</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.router-link-active {
  color: #FFDA96;
  font-size: 40px;
}

.router-link-active:hover {
  text-shadow: none;
}

a {
  color: black;
  text-decoration: none;
  font-size: 30px;
}
a:hover {
  text-shadow: white 3px 3px;
}

a:active {
  text-shadow: white 3px 3px;
  color: #FFDA96;
}

/* Mobile */
@media only screen and (max-width: 1023px) {
  .logo{
    max-width: 90px;
  }
}

/* Tablet */
@media only screen and (min-width: 1024px) {

  .logo{
    max-width: 150px;
  }

  .router-link-active {
  color: #FFDA96;
  font-size: 60px;
}

.router-link-active:hover {
  text-shadow: none;
}

a {
  color: black;
  text-decoration: none;
  font-size: 50px;
}
a:hover {
  text-shadow: white 3px 3px;
}

a:active {
  text-shadow: white 3px 3px;
  color: #FFDA96;
}
}

</style>
