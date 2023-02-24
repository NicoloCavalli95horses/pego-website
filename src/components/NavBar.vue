<template>
  <!-- Desktop/tablet -->
  <nav v-if="screen.width >= 500" class="desktop">
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
  <nav v-else-if="screen.width <= 500" class="mobile">
    <RouterLink to="/">
      <Logo class="l-24" />
    </RouterLink>
    <Icon class="r-24" icon="fa-solid fa-bars" @click="show.menu = true" />
  </nav>

  <!-- Space from navbar -->
  <!-- <div :style="{ 'width': '100%', 'height': NAV_HEIGHT }" /> -->

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
import { onMounted, onUnmounted, reactive } from "@vue/runtime-core";
import { RouterLink, RouterView } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo.vue"

//==================================
// Consts
//==================================
library.add( faBars, faXmark );
const NAV_HEIGHT = "100px";

const screen = reactive({
  width: window.innerWidth,
  height: window.innerHeight
});

const show = reactive({
  menu: false,
});

//==================================
// Functions
//==================================
function onResize(){
  screen.width = window.innerWidth;
  screen.height = window.innerHeight;
}

//==================================
// Life cycle
//==================================
onMounted(() => {
  window.addEventListener('resize', onResize);
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
})

</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: v-bind("NAV_HEIGHT");
  background-color: var(--primary-01);
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
