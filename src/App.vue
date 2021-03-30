<template>
  <Header />
  <div class="home-body">
    <section class="category-icon">
      <div class="container px-3 md:px-16">
        <div class="list-category scrollbar-black">
          <div v-for="(c, idx) in listCategory" :key="idx" class="inline-block">
            <div class="table">
              <div
                class="flex bg-white py-2 px-4 mx-2 rounded items-center h-11"
              >
                <img
                  :src="c.icon"
                  alt=""
                  class="w-6 inline-block align-middle"
                />
                <span class="ml-3 text-sm px-2">{{ c.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="banner">
      <div class="container px-3 md:px-16">
        <section class="carousel h-40" aria-label="Gallery">
          <ol class="carousel__viewport scroll-bar-transparent">
            <li id="carousel__slide1" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper">
                <a href="#carousel__slide4" class="carousel__prev"
                  >Go to last slide</a
                >
                <a href="#carousel__slide2" class="carousel__next"
                  >Go to next slide</a
                >
              </div>
            </li>
            <li id="carousel__slide2" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide1" class="carousel__prev"
                >Go to previous slide</a
              >
              <a href="#carousel__slide3" class="carousel__next"
                >Go to next slide</a
              >
            </li>
            <li id="carousel__slide3" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide2" class="carousel__prev"
                >Go to previous slide</a
              >
              <a href="#carousel__slide4" class="carousel__next"
                >Go to next slide</a
              >
            </li>
            <li id="carousel__slide4" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide3" class="carousel__prev"
                >Go to previous slide</a
              >
              <a href="#carousel__slide1" class="carousel__next"
                >Go to first slide</a
              >
            </li>
          </ol>
          <aside class="carousel__navigation">
            <ol class="carousel__navigation-list">
              <li class="carousel__navigation-item">
                <a href="#carousel__slide1" class="carousel__navigation-button"
                  >Go to slide 1</a
                >
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide2" class="carousel__navigation-button"
                  >Go to slide 2</a
                >
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide3" class="carousel__navigation-button"
                  >Go to slide 3</a
                >
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide4" class="carousel__navigation-button"
                  >Go to slide 4</a
                >
              </li>
            </ol>
          </aside>
        </section>
      </div>
    </section>
    <section id="prakerja-button">
      <div class="container px-3 md:px-16">
        <div
          class="flex flex-row justify-between px-5 py-4 my-3 rounded bg-primary-blue"
        >
          <img src="/image/prakerja-white.png" alt="" class="w-28" />
          <div class="flex flex-row items-center justify-center">
            <div
              class="left-voucher-prakerja w-1/2 mx-2 bg-white rounded flex items-center justify-center px-12 h-12"
            >
              <a
                href="https://www.rumahsiapkerja.com/redeem-voucher"
                class="flex"
              >
                <img
                  src="/icon/tukar-voucher-prakerja.svg"
                  alt=""
                  class="w-4 mr-2"
                />
                Tukar Voucher Prakerja
              </a>
            </div>
            <div
              class="right-sertifikat-prakerja w-1/2 mx-2 bg-white rounded flex items-center justify-center px-12 h-12"
            >
              <a
                href="https://www.rumahsiapkerja.com/check-certificate"
                class="flex"
              >
                <img
                  src="/icon/check-sertifikat-pelatihan.svg"
                  alt=""
                  class="w-4 mr-2"
                />
                Tukar Voucher Prakerja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="training">
    <div class="container px-3 md:px-16">
      <div class="pelatihan my-3">
        <div class="flex flex-row justify-between items-center mt-2 mb-4">
          <h1 class="text-2xl font-semibold">Pelatihan Terbaru</h1>
          <p class="text-primary-blue text-base cursor-pointer">Lihat Semua</p>
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
                  'background-image': 'url(' + pt.image + ')',
                }"
              ></div>
              <div class="p-2">
                <h3 class="text-xl font-semibold">
                  {{
                    pt.title.length > 44
                      ? pt.title.slice(0, 44) + "..."
                      : pt.title
                  }}
                </h3>
                <div class="flex flex-row justify-between my-1">
                  <p class="text-md">{{ pt.harga }}</p>
                  <p class="flex text-md text-gray-600">
                    <img src="/icon/star.svg" alt="" class="w-3 mr-2" />
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
          <p class="text-primary-blue text-base cursor-pointer">Lihat Semua</p>
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
                  'background-image': 'url(' + pt.image + ')',
                }"
              ></div>
              <div class="p-2">
                <h3 class="text-xl font-semibold">
                  {{
                    pt.title.length > 44
                      ? pt.title.slice(0, 44) + "..."
                      : pt.title
                  }}
                </h3>
                <div class="flex flex-row justify-between my-1">
                  <p class="text-md">{{ pt.harga }}</p>
                  <p class="flex text-md text-gray-600">
                    <img src="/icon/star.svg" alt="" class="w-3 mr-2" />
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
          <p class="text-primary-blue text-base cursor-pointer">Lihat Semua</p>
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
                  'background-image': 'url(' + pt.image + ')',
                }"
              ></div>
              <div class="p-2">
                <h3 class="text-xl font-semibold">
                  {{
                    pt.title.length > 44
                      ? pt.title.slice(0, 44) + "..."
                      : pt.title
                  }}
                </h3>
                <div class="flex flex-row justify-between my-1">
                  <p class="text-md">{{ pt.harga }}</p>
                  <p class="flex text-md text-gray-600">
                    <img src="/icon/star.svg" alt="" class="w-3 mr-2" />
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
  <div class="job">
    <div class="container px-3 md:px-16">
      <div class="py-5">
        <div class="flex flex-row justify-between items-center mt-2 mb-4">
          <h1 class="text-2xl font-semibold">Lowongan Kerja</h1>
          <p class="text-primary-blue text-base cursor-pointer">Lihat Semua</p>
        </div>
        <div class="grid grid-cols-4 gap-5">
          <div
            v-for="(lk, idx) in listLowonganKerja"
            :key="idx"
            class="col-span-4 md:col-span-2 my-2"
          >
            <a :href="lk.url">
              <div class="flex flex-row items-center">
                <img :src="lk.image" alt="" class="w-28 md:w-32" />
                <div class="flex flex-col ml-5 px-3">
                  <h3 class="uppercase font-semibold">{{ lk.title }}</h3>
                  <h4 class="text-gray-600">{{ lk.company }}</h4>
                  <h4>{{ lk.location }}</h4>
                  <p class="text-gray-600">{{ lk.update }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mitra-rsk">
    <div class="container px-3 md:px-16">
      <div
        class="flex flex-col justify-center items-start md:items-center my-3"
      >
        <h3 class="text-xl font-semibold mb-3">Mitra RSK</h3>
        <p class="text-lg">
          Rumah Siap Kerja dipercaya oleh institusi terbaik di Indonesia.
        </p>
        <div class="grid grid-cols-3 md:grid-cols-4 gap-6 w-full mt-3">
          <div
            v-for="(mk, idx) in listMitraRsk"
            :key="idx"
            class="col-span-1 my-5"
          >
            <div class="flex justify-center items-center">
              <img :src="mk.image" :style="mk.style" alt="" class="w-24" />
            </div>
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
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
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
          url:
            "https://www.rumahsiapkerja.com/pelatihan/83b9974f-2fdc-4fa4-9130-75081023cf0e",
          image:
            "https://app.rumahsiapkerja.com/rsk-backend/v1/training/cover-image/83b9974f-2fdc-4fa4-9130-75081023cf0e.jpeg",
          harga: "Rp. 300.000",
          typeKelas: "Kelas Video",
          rating: "4.5",
        },
        {
          title: "Belajar Bahasa Jerman dengan Orang Jermannya Langsung!",
          url:
            "https://www.rumahsiapkerja.com/pelatihan/fe112d21-6c92-4882-9bfc-fd444154d847",
          image:
            "https://app.rumahsiapkerja.com/rsk-backend/v1/training/cover-image/fe112d21-6c92-4882-9bfc-fd444154d847.jpg",
          harga: "Rp. 250.000",
          typeKelas: "Kelas Video",
          rating: "4.8",
        },
        {
          title: "Cara Membangun Tim yang Hebat",
          url:
            "https://www.rumahsiapkerja.com/pelatihan/535c9ccc-125e-4d79-b8d7-f8307a2e66fe",
          image:
            "https://app.rumahsiapkerja.com/rsk-backend/v1/training/cover-image/535c9ccc-125e-4d79-b8d7-f8307a2e66fe.jpeg",
          harga: "Rp. 200.000",
          typeKelas: "Kelas Video",
          rating: "5.0",
        },
        {
          title: "Sandiaga Uno Mengajar Bisnis",
          url:
            "https://www.rumahsiapkerja.com/pelatihan/40187128-ecd3-4c29-a839-76d40ff2cabb",
          image:
            "https://app.rumahsiapkerja.com/rsk-backend/v1/training/cover-image/40187128-ecd3-4c29-a839-76d40ff2cabb.jpeg",
          harga: "Rp. 300.000",
          typeKelas: "Kelas Video",
          rating: "5.0",
        },
      ],
      listLowonganKerja: [
        {
          image: "/image/jsb.png",
          title: "Akunting",
          company: "PT. Jaya Sakti Beton",
          location: "Kabupaten Bogor",
          update: "Diposting 2 minggu yang lalu",
          url:
            "https://www.rumahsiapkerja.com/lowongan-kerja/e1ef4aad-1889-4c2c-a1b6-82ad29c41504",
        },
        {
          image: "/image/jsb.png",
          title: "Desain Grafis",
          company: "PT. Jaya Sakti Beton",
          location: "Kabupaten Bogor",
          update: "Diposting 2 minggu yang lalu",
          url:
            "https://www.rumahsiapkerja.com/lowongan-kerja/8b845447-06df-4e04-a690-fc7ca3bb55a8",
        },
        {
          image: "/image/jsb.png",
          title: "Editor Video",
          company: "PT. Jaya Sakti Beton",
          location: "Kabupaten Bogor",
          update: "Diposting 2 minggu yang lalu",
          url:
            "https://www.rumahsiapkerja.com/lowongan-kerja/3a58676a-491b-400c-b0c5-f8ba3011cfc8",
        },
        {
          image: "/image/milagros.png",
          title: "Tele Marketing",
          company: "PT. Jaya Sakti Beton",
          location: "Jakarta Timur",
          update: "Diposting 2 minggu yang lalu",
          url:
            "https://www.rumahsiapkerja.com/lowongan-kerja/d0301288-2372-4a9b-9086-b24d307f61d3",
        },
      ],
      listMitraRsk: [
        {
          image: "/icon/tiktok.svg",
          style: "",
        },
        {
          image: "/icon/telkomsel.svg",
          style: "",
        },
        {
          image: "/icon/home-credit.svg",
          style: "",
        },
        {
          image: "/icon/bank-indonesia.svg",
          style: "transform: translate(0px, -10%);",
        },
        {
          image: "/image/bca.png",
          style: "filter: grayscale(100%);",
        },
        {
          image: "/icon/ui.svg",
          style: "transform: translate(0px, -20%); max-width: 60px;",
        },
        {
          image: "/icon/ipb.svg",
          style: "transform: translate(0px, -20%); max-width: 60px;",
        },
        {
          image: "/icon/uph.svg",
          style: "transform: translate(0px, -20%); max-width: 60px;",
        },
        {
          image: "/icon/binar-academy.svg",
          style: "transform: translate(0px, -17%);",
        },
        {
          image: "/image/tower-bersama.png",
          style: "filter: grayscale(100%);",
        },
        {
          image: "/icon/cigna.svg",
          style: "transform: translate(0px, 10%);",
        },
        {
          image: "/icon/pkss.svg",
          style: "transform: translate(0px, -20%);",
        },
      ],
    };
  },
});
</script>
<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}
.home-body {
  background: #f0f0f0;
  @apply pb-5;
}
.training {
  background: #fafafa;
  @apply py-5;
}
.job {
  background: #f0f0f0;
}
.mitra-rsk {
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
  border-radius: 10px;
  @apply bg-transparent md:bg-gray-600;
}
.scrollbar-black::-webkit-scrollbar-track {
  border-radius: 10px;

  @apply shadow-none md:shadow-2xl;
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

/* for styling carousel */
@keyframes tonext {
  75% {
    left: 0;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
}

@keyframes tostart {
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
}

@keyframes snap {
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
}

.scroll-bar-transparent::-webkit-scrollbar {
  width: 0;
}

.scroll-bar-transparent::-webkit-scrollbar-track {
  background: transparent;
}

.scroll-bar-transparent::-webkit-scrollbar-thumb {
  background: transparent;
  border: none;
}

.scroll-bar-transparent {
  -ms-overflow-style: none;
}

ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel {
  position: relative;
  padding-top: 40%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
}

.carousel__viewport {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel__slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  background-color: #f99;
  counter-increment: item;
  @apply my-3;
}

.carousel__slide:nth-child(even) {
  background-color: #99f;
}

.carousel__slide:before {
  content: counter(item);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-40%,70px);
  color: #fff;
  font-size: 2em;
}

.carousel__snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
}

@media (hover: hover) {
  .carousel__snapper {
    animation-name: tonext, snap;
    animation-timing-function: ease;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  .carousel__slide:last-child .carousel__snapper {
    animation-name: tostart, snap;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel__snapper {
    animation-name: none;
  }
}

.carousel:hover .carousel__snapper,
.carousel:focus-within .carousel__snapper {
  animation-name: none;
}

.carousel__navigation {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}

.carousel__navigation-list,
.carousel__navigation-item {
  display: inline-block;
}

.carousel__navigation-button {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #333;
  background-clip: content-box;
  border: 0.25rem solid transparent;
  border-radius: 50%;
  font-size: 0;
  transition: transform 0.1s;
}

.carousel::before,
.carousel::after,
.carousel__prev,
.carousel__next {
  position: absolute;
  top: 0;
  margin-top: 20%;
  width: 4rem;
  height: 4rem;
  transform: translateY(-50%);
  border-radius: 50%;
  font-size: 0;
  outline: 0;
}

.carousel::before,
.carousel__prev {
  left: -1rem;
}

.carousel::after,
.carousel__next {
  right: -1rem;
}

.carousel::before,
.carousel::after {
  content: '';
  z-index: 1;
  background-color: #333;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
  pointer-events: none;
}

.carousel::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
}

.carousel::after {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
}

</style>
