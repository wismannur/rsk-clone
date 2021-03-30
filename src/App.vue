<template>
  <Header />
  <div class="home-body">
    <section class="category-icon">
      <div class="container px-16">
        <div class="list-category scrollbar-black">
          <div
            v-for="(c, idx) in listCategory"
            :key="idx"
            class="inline-block"
          >
            <div class="table">
              <div class="flex bg-white py-2 px-4 mx-2 rounded items-center h-11">
                <img :src="c.icon" alt="" class="w-6 inline-block align-middle">
                <span class="ml-3 text-sm px-2">{{ c.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="banner">
      <div class="container px-16"></div>
    </section>
    <section id="prakerja-button">
      <div class="container px-16">
        <div class="flex flex-row justify-between px-5 py-4 my-3 rounded bg-primary-blue">
          <img src="/image/prakerja-white.png" alt="" class="w-28">
          <div class="flex flex-row items-center justify-center">
            <div class="left-voucher-prakerja w-1/2 mx-2 bg-white rounded flex items-center justify-center px-12 h-12">
              <a href="https://www.rumahsiapkerja.com/redeem-voucher" class="flex">
                <img src="/icon/tukar-voucher-prakerja.svg" alt="" class="w-4 mr-2">
                Tukar Voucher Prakerja
              </a>
            </div>
            <div class="right-sertifikat-prakerja w-1/2 mx-2 bg-white rounded flex items-center justify-center px-12 h-12">
              <a href="https://www.rumahsiapkerja.com/check-certificate" class="flex">
                <img src="/icon/check-sertifikat-pelatihan.svg" alt="" class="w-4 mr-2">
                Tukar Voucher Prakerja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="training">
    <div class="container px-16">
      <div class="pelatihan my-3">
        <div class="flex flex-row justify-between items-center mt-2 mb-4">
          <h1 class="text-2xl font-semibold">Pelatihan Terbaru</h1>
          <p class="text-primary-blue text-base">Lihat Semua</p>
        </div>
        <div class="flex flex-row w-full py-3">
          <div 
            v-for="(pt, idx) in listPelatihanTerbaru"
            :key="idx"
            class="flex flex-col w-1/4 px-1 mx-1"
          >
            <a :href="pt.url">
              <div 
                class="card-image rounded-t-lg"
                :style="{
                  'background-image': 'url('+ pt.image +')'
                }"
              >
              </div>
              <div class="p-2">
                <h3 class="text-xl font-semibold">{{ pt.title.length > 44 ? pt.title.slice(0, 44) + '...' : pt.title }}</h3>
                <div class="flex flex-row justify-between my-1">
                  <p class="text-md">{{ pt.harga }}</p>
                  <p class="flex text-md text-gray-600">
                    <img src="/icon/star.svg" alt="" class="w-3 mr-2">
                    {{ pt.rating }}
                  </p>
                </div>
                <p class="text-md text-gray-600 my-1">{{ pt.typeKelas }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="pelatihan my-3">
        <div class="flex flex-row justify-between items-center mt-2 mb-4">
          <h1 class="text-2xl font-semibold">Bisnis & Keuangan</h1>
          <p class="text-primary-blue text-base">Lihat Semua</p>
        </div>
        <div class="flex flex-row w-full py-3">
          <div 
            v-for="(pt, idx) in listPelatihanTerbaru"
            :key="idx"
            class="flex flex-col w-1/4 px-1 mx-1"
          >
            <a :href="pt.url">
              <div 
                class="card-image rounded-t-lg"
                :style="{
                  'background-image': 'url('+ pt.image +')'
                }"
              >
              </div>
              <div class="p-2">
                <h3 class="text-xl font-semibold">{{ pt.title.length > 44 ? pt.title.slice(0, 44) + '...' : pt.title }}</h3>
                <div class="flex flex-row justify-between my-1">
                  <p class="text-md">{{ pt.harga }}</p>
                  <p class="flex text-md text-gray-600">
                    <img src="/icon/star.svg" alt="" class="w-3 mr-2">
                    {{ pt.rating }}
                  </p>
                </div>
                <p class="text-md text-gray-600 my-1">{{ pt.typeKelas }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="pelatihan my-3">
        <div class="flex flex-row justify-between items-center mt-2 mb-4">
          <h1 class="text-2xl font-semibold">Pemasaran</h1>
          <p class="text-primary-blue text-base">Lihat Semua</p>
        </div>
        <div class="flex flex-row w-full py-3">
          <div 
            v-for="(pt, idx) in listPelatihanTerbaru"
            :key="idx"
            class="flex flex-col w-1/4 px-1 mx-1"
          >
            <a :href="pt.url">
              <div 
                class="card-image rounded-t-lg"
                :style="{
                  'background-image': 'url('+ pt.image +')'
                }"
              >
              </div>
              <div class="p-2">
                <h3 class="text-xl font-semibold">{{ pt.title.length > 44 ? pt.title.slice(0, 44) + '...' : pt.title }}</h3>
                <div class="flex flex-row justify-between my-1">
                  <p class="text-md">{{ pt.harga }}</p>
                  <p class="flex text-md text-gray-600">
                    <img src="/icon/star.svg" alt="" class="w-3 mr-2">
                    {{ pt.rating }}
                  </p>
                </div>
                <p class="text-md text-gray-600 my-1">{{ pt.typeKelas }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  <!-- <img alt="Vue logo" src="./assets/logo.png" class="mx-auto" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>
<script lang="ts">
import { defineComponent } from "vue"
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      listCategory: [
        {
          title: "Bahasa Asing",
          icon: "/icon/bahasa-asing.svg",
        },
        {
          title: "Bisnis & Keuangan",
          icon: "/icon/bisnis-dan-keuangan.svg",
        },
        {
          title: "Industri Kreatif",
          icon: "/icon/industri-kreatif.svg",
        },
        {
          title: "Kesehatan & Kecantikan",
          icon: "/icon/kesehatan-dan-kecantikan.svg",
        },
        {
          title: "Pariwisata & Pelayanan",
          icon: "/icon/pariwisata-dan-pelayanan.svg",
        },
        {
          title: "Pemasaran",
          icon: "/icon/pemasaran.svg",
        },
        {
          title: "Persiapan Pengembangan Karir",
          icon: "/icon/persiapan-pengembangan-karir.svg",
        },
        {
          title: "Pertanian & Perikanan",
          icon: "/icon/pertanian-dan-perikanan.svg",
        },
        {
          title: "Teknologi Informasi",
          icon: "/icon/teknologi-informasi.svg",
        },
      ],
      listPelatihanTerbaru: [
        {
          title: "Bisnis Mudah Jadi Dropshiper",
          url: "https://www.rumahsiapkerja.com/pelatihan/83b9974f-2fdc-4fa4-9130-75081023cf0e",
          image: "https://app.rumahsiapkerja.com/rsk-backend/v1/training/cover-image/83b9974f-2fdc-4fa4-9130-75081023cf0e.jpeg",
          harga: "Rp. 300.000",
          typeKelas: "Kelas Video",
          rating: "4.5",
        },
        {
          title: "Belajar Bahasa Jerman dengan Orang Jermannya Langsung!",
          url: "https://www.rumahsiapkerja.com/pelatihan/fe112d21-6c92-4882-9bfc-fd444154d847",
          image: "https://app.rumahsiapkerja.com/rsk-backend/v1/training/cover-image/fe112d21-6c92-4882-9bfc-fd444154d847.jpg",
          harga: "Rp. 250.000",
          typeKelas: "Kelas Video",
          rating: "4.8",
        },
        {
          title: "Cara Membangun Tim yang Hebat",
          url: "https://www.rumahsiapkerja.com/pelatihan/535c9ccc-125e-4d79-b8d7-f8307a2e66fe",
          image: "https://app.rumahsiapkerja.com/rsk-backend/v1/training/cover-image/535c9ccc-125e-4d79-b8d7-f8307a2e66fe.jpeg",
          harga: "Rp. 200.000",
          typeKelas: "Kelas Video",
          rating: "5.0",
        },
        {
          title: "Sandiaga Uno Mengajar Bisnis",
          url: "https://www.rumahsiapkerja.com/pelatihan/40187128-ecd3-4c29-a839-76d40ff2cabb",
          image: "https://app.rumahsiapkerja.com/rsk-backend/v1/training/cover-image/40187128-ecd3-4c29-a839-76d40ff2cabb.jpeg",
          harga: "Rp. 300.000",
          typeKelas: "Kelas Video",
          rating: "5.0",
        },
      ]
    }
  }
})
</script>
<style>
#app {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
}
.home-body {
  background: #f0f0f0;
  @apply pb-5;
}
.training {
  background: #fafafa;
  @apply py-5;
}
.list-category {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-box-pack: center;
  box-sizing: border-box;

  @apply inline-block flex-row flex-wrap w-full whitespace-nowrap overflow-x-auto justify-center pt-2 pb-1 my-2;
}
.scrollbar-black::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.scrollbar-black::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}
.scrollbar-black::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px grey;
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
.card-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  position: relative;
  width: 100%;
  height: 174px;
  overflow: hidden;
}
</style>