<template>
  <!-- Desktop/tablet -->
  <nav v-if="device == 'desktop' || device == 'tablet'" class="desktop">
    <RouterLink to="/">
      <Logo class="l-24" />
    </RouterLink>
    <RouterLink to="/about">
      <span>About</span>
    </RouterLink>
    <RouterLink to="/faq">
      <span>FAQ</span>
    </RouterLink>
  </nav>

  <!-- Mobile -->
  <nav v-else-if="device == 'mobile'" class="mobile">
    <RouterLink to="/">
      <Logo class="l-24" />
    </RouterLink>
    <Icon class="r-24" icon="fa-solid fa-bars" @click="show.menu = true" />
  </nav>

  <!-- Mobile menu -->
  <teleport to=".modals">
    <div v-if="show.menu" v-prevent-body-overflow class="backdrop">
      <div class="centered-menu">
        <Icon icon="fa-solid fa-xmark" class="top-right-corner" @click="show.menu = false" />
        <RouterLink to="/about" @click="show.menu = false">
          <h2>About</h2>
        </RouterLink>
        <RouterLink to="/faq" @click="show.menu = false">
          <h2>FAQ</h2>
        </RouterLink>
        <RouterLink to="/" @click="show.menu = false">
          <h2>Page</h2>
        </RouterLink>
      </div>
    </div>
  </teleport>

</template>

<script setup>
//==================================
// Import
//==================================
import { computed, onMounted, onUnmounted, reactive } from "@vue/runtime-core";
import { RouterLink, RouterView } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { getViewport } from "../utils/screen_size.js"
import Logo from "./Logo.vue"
library.add( faBars, faXmark );

//==================================
// Consts
//==================================
const device = getViewport();
const nav_height = computed(() => {
  if ( device.value == 'desktop' || device.value == 'tablet' ) {
    return '100px'
  } else if ( device.value == 'mobile' ){
    return '70px'
  }
});

const show = reactive({
  menu: false,
});

</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: v-bind("nav_height");
  display: flex;
  align-items: center;
  span {
    text-transform: uppercase;
    letter-spacing: 5px;
    padding: 8px 12px;
    cursor: pointer;
  }
  &.desktop {
    justify-content: space-around;
 }
 &.mobile {
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
