<template>
  <footer class="bg-primary-blue">
    <div class="container px-3 md:px-16">
      <div class="flex flex-col flex-wrap lg:flex-row justify-between border-none lg:border-b border-white">
        <div class="flex flex-row order-min-2 lg:order-none justify-center items-center pt-5 pb-2 lg:py-5 mr-3 lg:ml-8 lg:mr-2">
          <div
            class="logo-footer-rsk flex flex-col justify-center items-center"
          >
            <img src="/icon/logo.svg" alt="logo rsk" class="w-24 lg:w-44" />
            <h3 class="text-white font-semibold hidden lg:block">Rumah Siap Kerja</h3>
          </div>
        </div>
        <div class="flex flex-row justify-between lg:justify-start lg:flex-col py-2 lg:py-5 mx-3">
          <a
            v-for="(lh, idx) in listFooterHome"
            :key="idx"
            :href="lh.url"
            class="text-white text-sm my-3"
            >{{ lh.title }}</a
          >
        </div>
        <div class="flex flex-row justify-between lg:justify-start lg:flex-col py-2 lg:py-5 mx-10 lg:mx-3">
          <a
            v-for="(ls, idx) in listFooterSK"
            :key="idx"
            :href="ls.url"
            class="text-white text-sm my-3"
            >{{ ls.title }}</a
          >
        </div>
        <div class="flex flex-row order-min-1 lg:order-none justify-between lg:justify-start lg:flex-col py-2 lg:py-5 mx-12 lg:mx-3">
          <a
            v-for="(lsm, idx) in listFooterSosmed"
            :key="idx"
            :href="lsm.url"
            class="text-white text-sm my-2 flex items-center"
          >
            <img :src="lsm.icon" alt="logo sosmes rsk" class="w-8 mr-3" />
            <span class="hidden lg:block">{{ lsm.title }}</span>
          </a>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center pt-3 pb-5 lg:py-3">
        <p class="text-white text-sm my-1">
          &copy; Rumah Siap Kerja 2021. All Rights Reserved.
        </p>
        <p class="text-white text-sm my-1">PT. Samala Serasi Unggul</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      listFooterHome: [
        {
          title: "Beranda",
          url: "https://www.rumahsiapkerja.com/",
        },
        {
          title: "Pelatihan",
          url: "https://www.rumahsiapkerja.com/daftar-pelatihan",
        },
        {
          title: "Lowongan",
          url: "https://www.rumahsiapkerja.com/daftar-pekerjaan",
        },
        {
          title: "Perusahaan",
          url: "https://www.rumahsiapkerja.com/perusahaan-rsk",
        },
      ],
      listFooterSK: [
        {
          title: "Syarat & Ketentuan",
          url: "https://www.rumahsiapkerja.com/term-and-condition",
        },
        {
          title: "Tentang Kami",
          url: "https://www.rumahsiapkerja.com/tentang-kami",
        },
      ],
      listFooterSosmed: [
        {
          title: "Jl. Bulungan No.26, Jakarta Selatan, DKI Jakarta 12130",
          icon: "/icon/maps.svg",
          url: "https://www.rumahsiapkerja.com/maps",
        },
        {
          title: "Rumah Siap Kerja",
          icon: "/icon/facebook.svg",
          url: "https://www.rumahsiapkerja.com/facebook",
        },
        {
          title: "@rumahsiapkerja",
          icon: "/icon/instagram.svg",
          url: "https://www.rumahsiapkerja.com/instagram",
        },
        {
          title: "info@rumahsiapkerja.com",
          icon: "/icon/email.svg",
          url: "https://www.rumahsiapkerja.com/email",
        },
        {
          title: "0812 1844 1399",
          icon: "/icon/whatsapp.svg",
          url: "https://www.rumahsiapkerja.com/whatsapp",
        },
      ],
    };
  },
});
</script>