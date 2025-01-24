<script setup lang="ts">
import {socialLinks} from "../config/footer.config.ts";


const year = new Date().getFullYear()


</script>

<template>
  <footer class="w-100 bg-light border-top">
    <div class="tag bg-light p-md-3 p-2 border-top d-flex justify-content-between align-items-center">
      <p class="text-dark m-0">&copy; {{ year }} Creative by Farhan</p>
      <div class="d-flex align-items-end gap-md-4 gap-3 ">
        <template v-for="social in socialLinks">
          <a :href="social.href" target="_blank">
            <img class="call-icon" :src="social.icon" :alt="social.name">
          </a>
        </template>
      </div>
      <p class="text-dark m-0">Laere | PT Tumbuh Nusa Tech</p>
    </div>
  </footer>
</template>

<style scoped>

.tag {
  p {
    font-size: 12px;
  }
}

.call-icon {
  width: 20px;
  height: auto;
}



@media (max-width: 600px) {
  p {
    font-size: 6px;
    margin: 0;
  }

  .call-icon {
    width: 10px;
    height: auto;
  }

}

</style>