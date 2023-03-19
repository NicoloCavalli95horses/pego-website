<template>
  <div class="chip">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.chip {
  width: max-content;
  border-radius: var(--radius-l);
  border: 1px solid var(--font-light);
  padding: 0.8rem 1.5rem;
  margin: 0.4rem;
  box-sizing: border-box;
}
</style>
