<script setup lang="ts">

import {reactive} from "vue";

const feedback = reactive({
  name: '',
  company: '',
  position: '',
  toc: "<2",
  message: '',
  showComment: true

})

</script>

<template>
  <main class="d-flex justify-content-center">
    <div class="d-flex flex-column w-50 container-fluid">
      <h1>Feedback</h1>
      <div class="mb-3">
        <label for="name" class="form-label">Name : </label>
        <input type="text" id="name" class="form-control" v-model="feedback.name"/>
      </div>
      <div class="mb-3">
        <label for="company" class="form-label">Company : </label>
        <input type="text" id="name" class="form-control" v-model="feedback.company"/>
      </div>
      <div class="mb-3">
        <label for="position" class="form-label">Position : </label>
        <input type="text" id="position" class="form-control" v-model="feedback.position"/>
      </div>
      <div class="mb-3">
        <label for="toc" class="form-label">Term of Cooperation : </label>
        <select type="text" id="toc" class="form-select" v-model="feedback.toc">
          <option selected value="<2">< 2 Years</option>
          <option value=">2">> 2 Years</option>
          <option value=">5">> 5 Years</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message : </label>
        <textarea type="text" id="message" class="form-control" rows="6" v-model="feedback.message"/>
      </div>
      <div class="mb-3">
        <input type="checkbox" id="showComment" class="form-check-input" v-model="feedback.showComment"/>
        <label for="showComment" class="form-check-label ms-2">Show comment in this website</label>
      </div>
      <div class="mt-5 d-flex w-100 justify-content-end">
        <button class="btn btn-light">Submit</button>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>