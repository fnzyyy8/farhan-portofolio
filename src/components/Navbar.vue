<script setup lang="ts">

const menus = [
  {
    name: "Utama",
    href: "/"
  },
  {
    name: "Tentang",
    href: "/about"
  },
  {
    name: "Portofolio",
    href: "/"
  },
]

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="/Creative-icon.svg" alt="creative-byFarhan">
      </a>
      <button class="navbar-toggler shadow-none border-0" type="button"
              data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-secondary rounded-3"></span>
      </button>

      <!--Sidebar-->
      <div class="offcanvas offcanvas-start bg-dark"
           id="offcanvasNavbar" aria-label="close" tabindex="1">

        <!--Sidebar Header-->
        <div class="offcanvas-header border-bottom">
          <img src="/Creative-icon.svg" alt="creative-byFarhan">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body justify-content-end flex-grow-1">
          <ul class="navbar-nav mx-2" v-for="menu in menus">
            <li class="nav-item item">
              <a class="nav-link text-white" aria-current="page" :href="menu.href">{{ menu.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">

</style>