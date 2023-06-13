<template>
  <div class="main">
    <template v-if="device == 'mobile'">
      <div class="mobile-label">
        <p class="larger">{{ steps[active].label }}</p>
      </div>
    </template>

    <template v-else>
      <div class="label">
        <p v-if="prev">{{ prev }}</p>
        <p class="larger">{{ steps[active].label }}</p>
        <p>{{ succ }}</p>
        <p v-if="!prev && steps[2].label">{{ steps[2].label }}</p>
      </div>
    </template>

    <div class="bar-wrapper">
      <div class="bar" :style="{ 'width': active ? `${(100 * active) / steps.length}%` : '5%' }" />
    </div>
  </div>
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
const prev = computed(() => props.active - 1 >= 0 ? props.steps[props.active - 1].label : false );
const succ = computed(() => props.active + 1 < props.steps.length ? props.steps[props.active + 1].label : "invia" );


</script>

<style lang="scss" scoped>
.main {
  user-select: none;

  .bar-wrapper {
    width: 100%;
    height: 1rem;
    background-color: var(--footer-bg);
    overflow: hidden;
    border-radius: var(--radius-xl);
    .bar {
      height: 100%;
      background-color: var(--secondary);
      transition-duration: var(--transition-medium);
    }
  }
  .label, .mobile-label {
    width: 100%;
    p {
      opacity: 0.4;
      font-size: 1.2rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
      padding-top: 0.5rem;
      letter-spacing: 0.2rem;
      &.larger {
        opacity: 1;
      }
    }
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
