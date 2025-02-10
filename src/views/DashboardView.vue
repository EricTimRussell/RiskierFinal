<template>
  <!-- SECTION Infantry -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center py-4 my-3 bg-green">
        <span class="fs-2">Ground Units</span>
      </div>
    </div>
    <InfantryAndSFBuildComponent :faction="factionStore.faction" />
  </div>
</template>

<script setup>
import InfantryAndSFBuildComponent from "@/components/Ground_Units/InfantryAndSFBuildComponent.vue";
import { useFactionStore } from "@/stores/FactionStore";

const factionStore = useFactionStore()
factionStore.fetchFaction()
</script>
