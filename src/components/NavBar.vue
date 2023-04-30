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
    <div class="menu" @click="show.mobile_menu = true">
      <Icon icon="fa-solid fa-bars" class="svg-24" />
    </div>
  </nav>

  <Modal
    v-if="show.mobile_menu"
    :full_size="true"
    :close_btn="true"
    @closed="show.mobile_menu = false"
    >
    <div class="mobile-nav-options">
      <div @click="show.mobile_menu = false">
        <a href="#about"><h3>Chi siamo</h3></a>
     </div>
      <div @click="show.mobile_menu = false">
        <a href="#where"><h3>Dove operiamo</h3></a>
     </div>
      <div @click="show.mobile_menu = false">
        <a href="#faq"><h3>Domande frequenti</h3></a>
     </div>
    </div>
  </Modal>

</template>

<script setup>
//==================================
// Import
//==================================
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import { getViewport } from "../utils/screen_size.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo.vue";
import Modal from "./Modal.vue";

//==================================
// Consts
//==================================
library.add( fas );
const device = getViewport();
const show = reactive({
  mobile_menu: false,
})
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
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
   .menu {
    margin-right: 2.4rem;
    transition-duration: var(--transition-medium);
    cursor: pointer;
    &:hover {
      svg {
        color: var(--secondary);
        transition-duration: var(--transition-medium);
      }
    }
   }
  }
}
.mobile-nav-options {
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
