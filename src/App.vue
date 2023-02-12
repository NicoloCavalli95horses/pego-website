<template>
  <nav>
    <RouterLink to="/">
      <span>Home</span>
    </RouterLink>
    <RouterLink to="/about">
      <span>About</span>
    </RouterLink>
    <RouterLink to="/faq">
      <span>FAQ</span>
    </RouterLink>
  </nav>
  <!-- Space from navbar -->
  <div :style="{ 'width': '100%', 'height' : NAV_HEIGHT }" />

  <!-- Default margins -->
  <div class="margins">
    <transition name="fade">
      <RouterView />
    </transition>
  </div>
</template>
<script setup>
//==================================
// Import
//==================================
import { RouterLink, RouterView } from "vue-router";


//==================================
// Const
//==================================
const NAV_HEIGHT = '120px'
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 100%;
  height: v-bind('NAV_HEIGHT');
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.4);
  span {
    text-transform: uppercase;
    letter-spacing: 5px;
    padding: 8px 12px;
    cursor: pointer;
    &:hover {
      text-shadow: 5px 5px 20px azure;
    }
  }
}

.margins {
  margin: 46px;
}
</style>
