<template>
  <div id="header" class="w-full bg-primary-yellow">
    <div class="container px-14">
      <div class="flex items-center justify-between h-16">
        <div class="left-top-header flex items-center justify-center h-20">
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
              <img src="/icon/icon-search.svg" alt="">
            </div>
          </div>
        </div>
        <div class="right-top-header">
          <a href="/kawan-cuan" class="kawan-cuan px-5">
            Kawan Cuan
          </a>
          <button class="button bg-gray-300 text-sm text-primary-blue px-6 py-2 rounded font-bold mx-3">
            Daftar
          </button>
          <button class="button bg-primary-blue text-sm text-white px-6 py-2 rounded font-bold mx-3">
            Masuk
          </button>
        </div>
      </div>
    </div>
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
  }
})
</script>
<style>
#app {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
}
</style>