<template>
  <!-- Desktop/tablet -->
  <nav v-if="device == 'desktop' || device == 'tablet'" class="desktop">
    <Logo />
    <span><a href="#about">Chi siamo</a></span>
    <span><a href="#where">Dove</a></span>
    <span><a href="#faq">FAQ</a></span>
  </nav>

  <!-- Mobile -->
  <nav v-else-if="device == 'mobile'" class="mobile">
    <RouterLink to="/">
      <Logo class="l-24" />
    </RouterLink>
  </nav>
</template>

<script setup>
//==================================
// Import
//==================================
import { RouterLink } from "vue-router";
import { getViewport } from "../utils/screen_size.js"
import Logo from "./Logo.vue"

//==================================
// Consts
//==================================
const device = getViewport();
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  span {
    text-transform: uppercase;
    letter-spacing: 5px;
    padding: 8px 12px;
    cursor: pointer;
  }
  &.desktop {
    height: var(--nav-height-desktop);
    justify-content: space-around;
  }
  &.mobile {
   height: var(--nav-height-mobile);
   justify-content: space-between;
 }
}

.centered-menu {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
