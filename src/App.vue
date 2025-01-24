<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import "./style.css"
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="bg-dark text-white">
    <Navbar/>
    <RouterView class="router min-vh-100 container-fluid"/>
    <Footer v-if="!$route.meta.hideLayout"/>
  </div>
</template>

<style >

</style>
