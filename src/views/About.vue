<template>
  <div class="img-wrapper">
    <img src="/img/about.jpg" alt="repairs">
  </div>
  <h3 class="top-12">Lorem ipsum dolor sit</h3>
  <p class="top-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quasi quibusdam id nulla cum nemo dicta minima consectetur quia iusto qui dignissimos, similique pariatur quae necessitatibus perferendis ullam doloremque eveniet.</p>
  
  <div class="w-100 flex-center top-24">
    <Btn text="about" :def="true"></Btn>
  </div>
</template>

<script setup>
//==============================
// Import
//==============================
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRightLong,
  faLeftLong,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import Btn from '../components/Btn.vue'

//==============================
// Consts
//==============================
</script>

<style lang="scss" scoped>
.img-wrapper {
  text-align: center;
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
}
</style>