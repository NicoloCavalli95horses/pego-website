<template>
  <div v-if="show_tip" class="hidden-bg" @click="onBackgroundClick" />
  <div class="relative">
    <div v-if="show_tip" class="floating fadein" :class="{ 'up' : direction == 'up'}">
      <p>{{ text }}</p>
    </div>
  </div>
  <Btn :round="true" :active="show_tip" @click="onClick">
    <template #icon>
      <Icon icon="fa-solid fa-question" class="svg-18" />
    </template>
  </Btn>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";

import Btn from "./Btn.vue";


// ==============================
// Props
// ==============================
defineProps({
  text: String,
  direction: String,
});


// ==============================
// Props
// ==============================
library.add( fas );
const show_tip = ref(false);


// ==============================
// Functions
// ==============================
function onClick(e) {
  e.stopPropagation();
  e.preventDefault();
  show_tip.value = !show_tip.value;
}

function onBackgroundClick(e) {
  e.stopPropagation();
  e.preventDefault();
  show_tip.value = false;
}


</script>

<style lang="scss" scoped>
.hidden-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  z-index: 1;
}
.floating {
  width: max-content;
  max-width: 15rem;
  padding: 1.8rem 2.8rem;
  position: absolute;
  z-index: 1;
  top: 0%;
  right: 0%;
  transform: translate(-5rem, 0%);
  background-color: var(--footer-bg);
  border-radius: var(--radius-m);
  &.up {
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-100% - 0.5rem));
  }
}
</style>
