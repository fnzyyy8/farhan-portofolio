<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import "./style.css"
</script>

<template>
  <Navbar/>
  <div class="bg-dark vh-100 text-white">
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
