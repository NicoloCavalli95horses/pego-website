<template>
  <div :class="[ device == 'mobile' ? 'flex-column' : 'flex-center' ]">
    <div class="img-wrapper">
      <img src="/img/about.jpg" alt="repairs">
    </div>
    <div :class="{ 'responsive-text' : device != 'mobile' }">
      <h3 :class="{ 'top-12' : device == 'mobile' }">
        Lorem ipsum dolor sit
      </h3>
      <p :class="[ device == 'mobile' ? 'top-12' : 'top-24']">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quasi quibusdam id nulla cum nemo dicta minima consectetur quia iusto qui dignissimos, similique pariatur quae necessitatibus perferendis ullam doloremque eveniet.
      </p>
      <Btn v-if="device != 'mobile'" class="top-24"  text="about" :def="true"></Btn>
    </div>
  </div>
  
  <div v-if="device == 'mobile'" class="w-100 flex-center top-24">
    <Btn text="about" :def="true"></Btn>
  </div>
</template>

<script setup>
//==============================
// Import
//==============================
import { getViewport } from "../utils/screen_size.js";
import Btn from '../components/Btn.vue'

//==============================
// Consts
//==============================
const device = getViewport();
</script>

<style lang="scss" scoped>
.responsive-text {
  max-width: 50%;
  min-height: 100%;
  margin: 0 0 0 5rem;
}
.img-wrapper {
  text-align: center;
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
}
</style>