<template>
  <div class="card" :style="{ 'width' : device == 'mobile' ? '25rem': '35rem' }">
    <img :src="img_src" :alt="title" />
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
  img {
    width: 100%;
  }
  .text-wrapper {
    margin: 1.5rem;
    white-space: normal;
    h4, p {
      padding: 1.3rem 0;
      color: var(--font-dark);
    }
    h4 {
      border-bottom: 1px solid var(--font-dark);
    }
  }
}
</style>
