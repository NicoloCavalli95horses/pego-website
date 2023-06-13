<template>
  <div class="wrapper" :style="{ 'justify-content' : device == 'mobile' ? 'center' : 'flex-start' }">
    <template v-for="(item, i) in items" :key="i">
      <a :href="item.url" class="brand">
        <img v-if="item.src" :src="item.src" :alt="item.name">
        <span v-else>{{ item.name }}</span>
      </a>
    </template>
  </div>
</template>

<script setup>
//==============================
// Import
//==============================
import { getViewport } from "../utils/screen_size.js";


//==============================
// Props
//==============================
defineProps({
  items: Object,
});


//==============================
// Consts
//==============================
const device = getViewport();


</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14rem;
    height: 14rem;
    border-radius: var(--radius-s);
    border: 0.1rem solid var(--font-light);
    background-color: white;
    margin: 0.5rem;
    box-sizing: border-box;
    padding: 0.5rem;
    overflow: hidden;
    cursor: pointer;
    transition-duration: var(--transition-medium);
    &:hover {
      filter: brightness(150%);
      transition-duration: var(--transition-medium);
    }
    span {
      color: var(--font-dark);
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.4rem;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
