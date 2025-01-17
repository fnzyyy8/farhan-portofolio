<script setup lang="ts">


const experiences = [
  {
    company: "PT. Tumbuh Nusa Tech",
    position: "Komisaris Utama",
    years: "Desember 2024 - Sekarang"
  },
  {
    company: "PT. Solusi Energy Nusantara",
    position: "Document Control",
    years: "Januari 2023 - Desember 2024"
  },
  {
    company: "CV. Prabu Hasta Subur",
    position: "Project Control",
    years: "November 2020 - September 2021"
  },
  {
    company: "PT. Accentuate",
    position: "Experience Consultant",
    years: "Oktober 2018 - Oktober 2020"
  },
]

</script>

<template>
  <main class="container-fluid">

    <!--  Bio data Section  -->
    <div class="justify-content-center align-items-center"  data-aos="fade-up" >
      <div class="d-md-flex flex-row gap-3 mx-auto align-items-center justify-content-center">
        <div class="d-flex justify-content-center align-items-center">
          <img src="/src/assets/images/profile-picture-farhan.png" alt="image-farhan"
               :class="['profile-image']">
        </div>
        <div>
          <div class="d-sm-block d-flex flex-column justify-content-center align-items-center mt-5 mt-sm-0">
            <h6 class="h3">Farhan Septiansyah Hidayat</h6>
            <p>Frontend Developer</p>
          </div>
          <p class="info">
            Saya memulai karier sebagai Sales di perusahaan retail pakaian dan teknologi selama 4
            (empat) tahun, kemudian melanjutkan perjalanan profesional saya sebagai Document Controller
            di perusahaan minyak dan gas bumi selama 2 (dua) tahun. Saat ini, saya menjadi bagian dari
            PT Tumbuh Nusa Tech, sebuah perusahaan yang bergerak di bidang penyediaan web services.
            Saya terbuka untuk bekerja sama dalam membantu memenuhi kebutuhan Anda, khususnya di bidang
            pengembangan dan penyediaan layanan web.
          </p>
          <div class="mt-2 d-flex flex-row justify-content-center justify-content-md-start">
            <div class="me-3">
              <a href="/connect" class="btn btn-outline-light">Terkoneksi</a>
            </div>
            <div class="me-3">
              <a href="/about" class="btn btn-outline-light">Tentang Saya</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  Experience  -->
    <div class="mt-5 d-flex flex-column" data-aos="fade-up" >
      <div class="d-flex justify-content-center">
        <h1>Pengalaman</h1>
      </div>
      <div class="">
        <div class="vstack d-flex flex-xl-row gap-3 justify-content-center">
          <template v-for="experience in experiences">
            <div class="experience-list p-3 border-3 border-light text-dark bg-light rounded-3 ">
              <h6>{{experience.position}} - {{experience.company}}</h6>
              <p>{{experience.years}}</p>
            </div>
          </template>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>

.experience-list {
  cursor: pointer;
}

.experience-list:hover {
  color: white !important;
  background-color: black !important;
}

.info{
  text-align: justify;
}

.profile-image{
  width: auto;
  height: 250px;
}

</style>
