<template>
  <div class="card" :style="{ 'width' : device == 'mobile' ? '25rem': '35rem' }">
    <div class="img-wrapper" :style="{ 'height' : device == 'mobile' ? '18rem' : '25rem' }">
      <img :src="img_src" :alt="title" />
    </div>
    <div class="text-wrapper" :style="{ 'height' : device == 'mobile' ? '22rem' : '18rem' }">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { getViewport } from "../utils/screen_size.js";

// ==============================
// Props
// ==============================
const props = defineProps({
  title: String,
  description: String,
  img_src: String,
});

const device = getViewport();
</script>

<style lang="scss" scoped>
.card {
  display: inline-block;
  overflow: hidden;
  margin: 0 0.8rem;
  background-color: var(--white);
  border-radius: var(--radius-m);
  box-sizing: border-box;
  .img-wrapper {
    width: 100%;
    object-fit: cover;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text-wrapper {
    margin: 1.5rem;
    white-space: normal;
    h4, p {
      padding: 1.3rem 0;
      color: var(--font-dark);
    }
    h4 {
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      border-bottom: 1px solid var(--font-dark);
    }
    p {
      text-align: left;
    }
  }
}
</style>
