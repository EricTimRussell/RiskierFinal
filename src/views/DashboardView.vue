<template>
  <!-- SECTION Infantry -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center py-4 my-3 bg-green">
        <span class="fs-2">Ground Units</span>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <div>
          <button class="text-dark"><span class="material-symbols-outlined fs-2 p-2">remove</span></button>
        </div>
        <div class="d-flex flex-column align-items-center">
          <h6 class="px-2">Infantry</h6>
          <h6 class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
          <h6 class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
          <h6 class="px-2 fs-4"><strong>0</strong></h6>
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
  </div>
</template>

<script setup>

</script>
