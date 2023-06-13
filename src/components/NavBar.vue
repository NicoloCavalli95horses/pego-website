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
  
  <div :class="{ 'active' : show.mobile_menu }" class="mobile-menu">
    <div class="close-menu bottom-12">
      <Icon icon="fa-solid fa-close" class="svg-24" @click="show.mobile_menu = false" />
    </div>
    <div class="nav-options">
      <a class="option" href="#about" @click="show.mobile_menu = false">
        <h4>Chi siamo</h4>
      </a>
      <a class="option" href="#where" @click="show.mobile_menu = false">
        <h4>Dove operiamo</h4>
      </a>
      <a class="option" href="#faq" @click="show.mobile_menu = false">
        <h4>Domande frequenti</h4>
      </a>
      <div class="w-100 flex-center top-48">
        <Btn text="contattaci" :def="true" @click="() => { show.mobile_menu = false; $router.push('/contact'); }" />
      </div>
    </div>
 </div>

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
import Btn from "./Btn.vue";


//==================================
// Consts
//==================================
library.add( fas );
const device = getViewport();
const show = reactive({
  mobile_menu: false,
});


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

.mobile-menu {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: var(--footer-bg);
  top: 0;
  left: 0;
  transform: translate(100%, 0);
  transition-duration: var(--transition-slow);
  opacity: 0;
  z-index: -1;
  &.active {
    transform: translate(0, 0);
    transition-duration: var(--transition-slow);
    z-index: 2;
    opacity: 1;
  }
  .close-menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 2rem;
    svg {
      cursor: pointer;
    }
  }
  .nav-options {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 2.3rem;
    cursor: pointer;
    transition-duration: var(--transition-medium);
    .option {
      width: 100%;
      padding: 2.3rem 0;
      border-bottom: 0.2rem solid var(--primary);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
