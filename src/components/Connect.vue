<script setup lang="ts">

const links = [
  {
    text: 'LinkedIn',
    href: "https://www.linkedin.com/in/farhan-septiansyah-hidayat-172540170/"
  },
  {
    text: 'Whatsapp',
    href: "https://wa.wizard.id/6196ac"
  }
]

</script>

<template>
  <main class="">
    <div class="p-3 d-flex flex-column">
      <h1>Connect With me</h1>
      <div class=" mt-3">
        <template v-for="link in links">
          <a class="link-connect" :href="link.href" target="_blank">
            <div class="connect-style bg-light text-dark p-3 rounded-3 mb-3 fw-semibold">{{ link.text }}</div>
          </a>
        </template>
      </div>
    </div>
  </main>

</template>

<style scoped>
.link-connect {
  cursor: pointer;
  text-decoration: none;
}
.connect-style:hover  {
  background-color: black !important;
  color: white !important;
}


</style>