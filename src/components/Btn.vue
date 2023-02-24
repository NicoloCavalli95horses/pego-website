<template>
  <button :class="{ 'disabled': disabled, 'default': def, 'card': card, 'bg': bg }">
    <span>{{ text }}</span>
    <slot name="icon" />
  </button>
</template>

<script setup>
// ==============================
// Props
// ==============================
const props = defineProps({
  text: String,
  def: Boolean,
  card: Boolean,
  bg: Boolean,
  disabled: Boolean,
});
</script>

<style lang="scss" scoped>
button {
  width: max-content;
  text-decoration: none;
  border: none;
  padding: 1.8rem 2.8rem;
  border-radius: var(--radius-xl);
  letter-spacing: 4px;
  cursor: pointer;
  transition-duration: var(--transition-medium);
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  user-select: none;
  span {
    color: var(--white);
  }

  &:hover {
    transition-duration: var(--transition-medium);
    filter: brightness(150%);
  }
  &.bg {
    background-color: var(--overlay-color);
  }
  &.disabled {
    opacity: 0.5;
    touch-action: none;
    pointer-events: none;
    &:hover {
      filter: none;
    }
  }
  &.default {
    background-color: var(--secondary);
  }
}
</style>
