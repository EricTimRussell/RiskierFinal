<template>
  <div class="bg-olive container-fluid shadow-lg">
    <div class="row">
      <div class="col-3 d-flex">
        <RouterLink to="/">
          <img class="logo img-fluid" src="../assets/logo/Riskier-logo.png">
        </RouterLink>
      </div>
      <nav class="gap-3 col-9 d-flex justify-content-center" v-motion-slide-top>
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

@media only screen and (max-width: 600px) {
  .logo{
    max-width: 100px;
  }
}

</style>
