<template>
  <div class="wrapper">
    <template v-for="(b, i) in config.brand" :key="i">
      <a :href="b.url" class="brand">
        <img v-if="b.src" :src="b.src" :alt="b.name">
        <span v-else>{{ b.name }}</span>
      </a>
    </template>
  </div>
</template>

<script setup>
//==============================
// Import
//==============================
import { getViewport } from "../utils/screen_size.js";
import { config } from "../utils/config.js";

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
  justify-content: center;
  .brand {
    display: grid;
    place-content: center;
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
      height: auto;
      object-fit: contain;
    }
  }
}
</style>
