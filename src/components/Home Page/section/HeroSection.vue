<script setup lang="ts">

import {onBeforeUnmount, onMounted, ref} from "vue";
import Typed from 'typed.js'
import {skills} from "@/config/home.config.ts";

const textElement = ref(null);
let textInstance: any = null

onMounted(() => {
  const option = {
    strings: ['FE/BE Developer', 'Document Control', 'Ui Designer', 'Graphic Designer'],
    speed: 500,
    loop: true,
    backSpeed: 30,
    backDelay: 3000
  }

  textInstance = new Typed(textElement.value, option)
})

onBeforeUnmount(() => {
  if (!textInstance) {
    textInstance.destroy()
  }
})

</script>

<template>
  <div class="d-flex flex-column w-100">
    <div class="welcome-page d-flex flex-column justify-content-center align-items-center">
      <div class="text d-flex flex-column justify-content-center">
        <h1>Hello Recruiter, sedang butuh apa ?</h1>
        <h1 class="m-0"><span ref="textElement"></span></h1>
        <h5>Saya akan membantu anda</h5>
      </div>
    </div>
    <div
        class="experience-area bg-light d-flex flex-column flex-md-row justify-content-center align-items-center row-cols-md-2 gap-2 gap-md-0 border-end">
      <div class="d-flex justify-content-center text-dark" data-aos="fade-down">
        <h1 class="m-0">+6 Years Experience</h1>
      </div>
      <div class="d-flex gap-3 flex-wrap justify-content-center p-2 border-start" data-aos="fade-up">
        <template v-for="skill in skills" >
          <div class="bg-dark p-2 rounded-5 d-flex justify-content-center align-items-center col-3">
            <p class="m-0">{{ skill.title }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-page {
  min-height: 75vh;
}

.experience-area {
  min-height: 25vh;
  
}

@media (max-width: 1440px) {
  p {
    font-size: 10px;
  }
}

@media (max-width: 400px) {
  h1 {
    font-size: 16px;
    margin: 0;
  }

  h5 {
    font-size: 12px;
  }

  p {
    font-size: 8px;
  }
}

h1 {
  margin: 0;
}

</style>