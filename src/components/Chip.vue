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
  border: 1px solid var(--light-grey);
  padding: 0.5rem 1rem;
}
</style>
