<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import "./style.css"
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar/>
  <RouterView class="router bg-dark min-vh-100 text-white container-fluid"/>
  <div class="fixed-bottom float-start d-none d-xl-block text-white p-5">
    <Footer v-if="!$route.meta.hideLayout"/>
  </div>
</template>

<style scoped>

</style>
