<template>
    <div class="grid" :class="{ 'mobile' : device == 'mobile' }">
      <img :src="about_src" alt="chi siamo" />
      <div class="text-wrapper">
        <h4>Lorem ipsum dolor sit.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo
          rerum numquam deserunt dolor optio odio nesciunt necessitatibus hic
          unde? Dolores ipsam blanditiis magni laborum facere error non debitis
          ducimus! Ad veritatis aperiam magnam suscipit.
        </p>
        <br><br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo
          rerum numquam deserunt dolor optio odio nesciunt necessitatibus hic
          unde? Dolores ipsam blanditiis magni laborum facere error non debitis
          ducimus! Ad veritatis aperiam magnam suscipit.
        </p>
      </div>
    </div>
</template>

<script setup>
//==============================
// Import
//==============================
import { getViewport } from "../utils/screen_size.js";

//==============================
// Consts
//==============================
const device = getViewport();
const about_src = '/img/about/img_1.jpeg';

</script>

<style lang="scss" scoped>
 .grid {
    display: grid;
    place-content: center;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    gap: 4rem;
    margin: 0 auto;
    &.mobile {
      grid-template-columns: 1fr;
    }
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      max-height: 40rem;
      margin: 0 auto;
    }
    .text-wrapper {
      width: 100%;
      max-width: 500px;
      height: auto;
    }
 }
</style>
