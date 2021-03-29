<template>
  <div id="header" class="w-full bg-primary-yellow">
    <div class="container px-14">
      <div class="flex items-center justify-between min-h-16 py-2">
        <div class="left-top-header flex items-center justify-center">
          <a href="/" class="logo">
            <img src="/icon/logo.svg" alt="logo rsk" class="w-14">
          </a>
          <a href="/prakerja" class="logo-prakerja">
            <img src="/image/prakerja-black.png" alt="logo rsk" class="w-24">
          </a>
          <a href="/daftar-pelatihan" class="pelatihan px-5">
            Pelatihan
          </a>
          <a href="/daftar-pekerjaan" class="pekerjaan px-5">
            Lowongan
          </a>
          <div class="px-3 w-52 cursor-pointer">
            <div class="flex justify-between border-b border-black pb-1">
              <span class="text-sm">Cari Pelatihan</span>
              <img src="/icon/icon-search.svg" alt="" class="w-5">
            </div>
          </div>
        </div>
        <div class="right-top-header">
          <a href="/kawan-cuan" class="kawan-cuan px-5">
            Kawan Cuan
          </a>
          <button class="button bg-gray-200 text-sm text-primary-blue px-8 py-2 rounded font-bold mx-3">
            Daftar
          </button>
          <button class="button bg-primary-blue text-sm text-white px-8 py-2 rounded font-bold mx-3">
            Masuk
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="home-body">
    <section class="category-icon">
      <div class="container px-14">
        <div class="list-category scrollbar-black">
          <div
            v-for="(c, idx) in listCategory"
            :key="idx"
            class="inline-block"
          >
            <div class="table">
              <div class="flex bg-white p-2 mx-2 rounded items-center h-11">
                <img :src="c.icon" alt="" class="w-6 inline-block align-middle">
                <span class="ml-3 text-sm px-2">{{ c.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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
}
.list-category {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-box-pack: center;
  box-sizing: border-box;

  @apply inline-block flex-row flex-wrap w-full whitespace-nowrap overflow-x-auto justify-center py-2 my-2;
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
</style>