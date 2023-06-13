<template>
  <div class="wrapper">
    <template v-for="(step, i) in steps" :key="i">
      <div class="step-column">
        <div class="dot" :class="{ 'active' : i <= active }"></div>
        <p class="label">{{ step.label }}</p>
      </div>
    </template>
  </div>
</template>

<script setup>
// ==============================
// Props
// ==============================
defineProps({
  steps: Array,
  active: Number
});


</script>

<style lang="scss" scoped>
.wrapper {
  width: 85%;
  margin: 2rem auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--font-light);
  .step-column {
    box-sizing: border-box;
    height: 100%;
    transform: translate(0, -50%);
  }
  .dot {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 2px solid var(--font-light);
    background-color: var(--background);
    position: relative;
    &.active {
      background-color: var(--font-light);
    }
  }
  p {
    position: absolute;
    width: max-content;
    left: 50%;
    transform: translate(-50%, 0%);
    text-transform: uppercase;
    font-size: 1rem;
    padding-top: 0.5rem;
    letter-spacing: 0.2rem;
  }
}
</style>
