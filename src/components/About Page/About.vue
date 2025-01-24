<script setup lang="ts">
const experiences = [
  {
    company: "Laere",
    position: "Frontend Developer / Komisaris Utama",
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
  <main>
    <div class="d-flex justify-content-center align-items-center">
      <div class="bio-box d-sm-flex flex-row gap-3 align-items-center justify-content-center ">
        <div class="d-flex justify-content-center align-items-center" data-aos="fade-down">
          <img src="/src/assets/images/profile-picture-farhan.png" alt="image-farhan"
               :class="['profile-image']">
        </div>
        <div class="d-flex flex-column" data-aos="fade-up">
          <div class="d-sm-block d-flex flex-column justify-content-center align-items-center mt-3 mt-md-0">
            <h6 class="h3 m-0">Farhan Septiansyah Hidayat</h6>
            <p class="mb-2">Frontend Developer</p>
          </div>
          <p class="bio">
            Saya memulai karier sebagai Sales di perusahaan retail pakaian dan gadget selama tiga tahun, di mana saya
            mengembangkan kemampuan komunikasi dan pelayanan pelanggan. Setelah itu, saya bekerja sebagai surveyor
            selama
            satu tahun, yang memberikan saya pengalaman dalam pengukuran dan pengujian teknis di lapangan. Saat ini,
            saya
            menjabat sebagai Document Controller di perusahaan minyak dan gas bumi selama dua tahun, dengan tanggung
            jawab
            utama mengelola dokumen proyek dan memastikan integritas data. Selain itu, saya memiliki keahlian dalam
            pembuatan
            web menggunakan bahasa pemrograman dan framework terkini. Pengalaman yang beragam ini membuat saya cepat
            beradaptasi
            dalam lingkungan kerja dan mampu bersosialisasi dengan baik.
          </p>
          <div class="mt-2 d-flex flex-row justify-content-center justify-content-sm-start">
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
    <div class="d-flex flex-column align-items-center align-items-md-start justify-content-center mb-5 mt-5"
    >
      <h1>Pengalaman</h1>
      <div class="scroll-area vstack d-flex flex-xl-row  gap-3 overflow-x-auto mt-3">
        <template v-for="(experience,index) in experiences">
          <div class="bg-light text-dark p-3 experience-box rounded-3 " data-aos="fade-up" :data-aos-delay="index*100">
            <h6 class="m-0">{{ experience.position }} - {{ experience.company }}</h6>
            <p>{{ experience.years }}</p>


          </div>
        </template>

      </div>

    </div>
  </main>
</template>

<style scoped>


.bio{
  text-align: justify;
}

@media (min-width: 900px) {
  img{
    width: 200px;
    height: auto;
  }
}

@media (max-width: 400px) {
  img{
    width: 180px;
    height: auto;
  }
  .scroll-area{
    min-height: 600px;
  }
}

</style>