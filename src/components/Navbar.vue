<script setup lang="ts">

import {onMounted, onUnmounted, ref} from "vue";

const menus = [
  {
    name: "Utama",
    href: "/"
  },
  {
    name: "Tentang",
    href: "/about"
  }, {
    name: "Connect",
    href: "/connect"
  }
]

const isScrolled = ref(false)

const handleScrolled = () => {
  isScrolled.value = window.scrollY > 0
}
onMounted(() => {
  window.addEventListener("scroll", handleScrolled)
})
console.log(isScrolled)

onUnmounted(() => {
  window.removeEventListener("scroll", handleScrolled)
})
</script>

<template>
  <nav
      :class="['navbar','navbar-expand-lg','fixed-top',{'bg-light shadow': isScrolled,'' : !isScrolled}]">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="/icon/creative-icon.svg" alt="creative-byFarhan">
      </a>
      <button class="navbar-toggler shadow-none border-0" type="button"
              data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-expanded="false" aria-label="Toggle navigation">
        <img src="/icon/menu-dark.svg" alt="close" :class="{'d-none' : !isScrolled}">
        <img src="/icon/menu-light.svg" alt="close" :class="{'d-none' : isScrolled}">
      </button>

      <!--Sidebar-->
      <div class="offcanvas offcanvas-start bg-dark"
           id="offcanvasNavbar" aria-label="close" tabindex="1">

        <!--Sidebar Header-->
        <div class="offcanvas-header border-bottom">
          <img src="/icon/creative-icon.svg" alt="creative-byFarhan">
          <button type="button" class="btn-close d-flex align-items-center shadow-none" data-bs-dismiss="offcanvas">
            <img src="/icon/close-circle.svg" alt="close">
          </button>
        </div>
        <div class="offcanvas-body justify-content-end flex-grow-1">
          <ul class="navbar-nav mx-2" v-for="menu in menus">
            <li class="nav-item item">
              <a :class="['nav-link',{'text-dark' : isScrolled, 'text-white' : !isScrolled}] " aria-current="page"
                 :href="menu.href">{{ menu.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.navbar {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}


@media (max-width: 1140px) {
  .text-dark {
    color: white !important;
  }

}
</style>