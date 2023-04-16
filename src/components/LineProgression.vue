<template>
  <div class="bar-wrapper">
    <div class="bar" :style="{ 'width' : active ? `${ 100 * active / steps.length }%` : '10%' }" />
  </div>
  <template v-if="device == 'mobile'">
    <div class="wrapper">
      <p class="larger"> {{ steps.at(active).label }}</p>
    </div>
  </template>

  <template v-else>
    <div class="wrapper">
      <p v-if="prev"> {{ prev }} </p>
      <p class="larger"> {{ steps.at(active).label }}</p>
      <p> {{ succ }} </p>
      <p v-if="!prev && steps.at(2).label"> {{ steps.at(2).label }}</p>
    </div>
  </template>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { computed } from "vue";
import { getViewport } from "../utils/screen_size.js";

// ==============================
// Props
// ==============================
const props = defineProps({
  steps: Array,
  active: Number,
});

// ==============================
// Consts
// ==============================
const device = getViewport();
const prev = computed(() => props.active - 1 >= 0 ? props.steps.at(props.active-1).label : false );
const succ = computed(() => props.active + 1 < props.steps.length ? props.steps.at(props.active+1).label : 'invia');
</script>

<style lang="scss" scoped>
.bar-wrapper {
  width: 100%;
  background-color: var(--footer-bg);
  height: 1rem;
  overflow: hidden;
  border-radius: var(--radius-xl);
  .bar {
    height: 100%;
    background-color: var(--secondary);
    transition-duration: var(--transition-medium);
  }
}
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    opacity: 0.5;
    font-size: 1.2rem;
    margin-top: 1.2rem;
    text-transform: uppercase;
    padding-top: 0.5rem;
    letter-spacing: 0.2rem;
    &.larger {
      opacity: 1;
    }
  }
}
</style>
