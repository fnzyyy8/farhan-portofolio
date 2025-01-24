<script setup lang="ts">
import {footerConfig} from "@/config/information.config.ts";

</script>

<template>
  <!--  Recent Company   -->
  <main class="min-vh-100">
    <div class="company-container d-flex bg-light align-items-center justify-content-center text-dark border-top py-3">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="mb-3">Recent Company</h1>
        <div class="d-flex flex-row gap-3 gap-5">
          <template v-for="(company,index) in footerConfig">
            <img :src="company.imgUrl" :alt="company.alt" data-aos="fade-up" :data-aos-delay="index *50">
          </template>

        </div>
      </div>
    </div>

<!--  Values   -->
    <div class="value-container d-flex flex-column flex-xl-row row-cols-xl-2 mt-3">
      <div class=" d-flex flex-column align-items-center justify-content-center col-xl-4">
        <h1>Values</h1>
        <h5>Growing and Evolving Without Limits</h5>
      </div>
      <div class="values-poin d-flex gap-3 flex-wrap justify-content-center align-items-center">
        <div class="bg-light text-dark px-3 py-5 rounded-3 d-flex mt-md-3 mt-xl-0">
          <h6 class="m-0">Continious Improvement</h6>
        </div>
        <div class="bg-light text-dark px-3 py-5 rounded-3 d-flex mt-md-3 mt-xl-0">
          <h6 class="m-0">Continious Improvement</h6>
        </div>
        <div class="bg-light text-dark px-3 py-5 rounded-3 d-flex mt-md-3 mt-xl-0">
          <h6 class="m-0">Continious Improvement</h6>
        </div>
        <div class="bg-light text-dark px-3 py-5 rounded-3 d-flex mt-md-3 mt-xl-0">
          <h6 class="m-0">Continious Improvement</h6>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.latar-belakang p {
  text-align: justify;
  letter-spacing: 1.5px;
}

.company-container{
  height: 20vh;
}


.value-container{
  height: 40vh;

  .values-poin {
    max-width: 100%;
  }
}


@media (max-width: 400px) {

  .company-container{
    height: 10vh;
  }

  h1{
    font-size: 16px;
  }
  h5{
    font-size: 10px;
  }
  img{
    width: 24px;
    height: auto;
  }
  h6{
    font-size: 10px;
  }

}

</style>