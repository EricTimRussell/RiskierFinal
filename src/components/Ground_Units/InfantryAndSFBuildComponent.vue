<template>
  <div class="row">
    <!-- SECTION Infantry -->
    <div class="col-12 d-flex justify-content-center">
      <div>
        <button class="text-dark"><span class="material-symbols-outlined fs-2 p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Infantry</h6>
        <!-- <h6 class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6> -->
        <h6 class="px-2 fs-4"><strong>{{ faction[0]?.ground_units.infantry }}</strong></h6>
      </div>
      <div>
        <button class="text-dark"><span class="material-symbols-outlined fs-2 p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-1 material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-2">2</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-1 text-secondary material-symbols-outlined">factory</span>
        <span class="fs-2">1</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-1 text-success material-symbols-outlined">psychiatry</span>
        <span class="fs-2">5</span>
      </div>
    </div>
  </div>
  <div class="row">
    <!-- SECTION Special Forces -->
    <div class="col-12 d-flex justify-content-center">
      <div>
        <button class="text-dark"><span class="material-symbols-outlined fs-2 p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Special Forces</h6>
        <!-- <h6 class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6> -->
        <h6 class="px-2 fs-4"><strong>{{ faction[0]?.ground_units.special_forces }}</strong></h6>
      </div>
      <div>
        <button class="text-dark"><span class="material-symbols-outlined fs-2 p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-1 material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-2">3</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-1 text-secondary material-symbols-outlined">factory</span>
        <span class="fs-2">1</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-1 text-success material-symbols-outlined">psychiatry</span>
        <span class="fs-2">3</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { useFactionStore } from "@/stores/FactionStore";

const prop = defineProps({
  faction: Array
})


// const db = useFirestore()

// const faction = ref([])
// const querySnapshot = await getDocs(collection(db, "faction"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
//   faction.value.push(doc.data());
// });


</script>

<style scoped>

</style>
