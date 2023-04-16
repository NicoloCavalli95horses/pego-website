<template>
  <button
    :type="type"
    :class="{ 
      'active': active,
      'disabled': disabled,
      'default': def,
      'round' : round,
      'shadow' : shadow,
    }"
  >
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
  type: String,
  def: Boolean,
  disabled: Boolean,
  shadow: Boolean,
  round: Boolean,
  active: Boolean
});
</script>

<style lang="scss" scoped>
button {
  width: max-content;
  text-decoration: none;
  border: none;
  padding: 1.8rem 2.8rem;
  border-radius: var(--radius-xl);
  letter-spacing: 0.4rem;
  cursor: pointer;
  transition-duration: var(--transition-medium);
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  user-select: none;
  span {
    color: var(--font-light);
  }

  &:hover {
    transition-duration: var(--transition-medium);
    filter: brightness(150%);
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
    background-color: var(--primary);
  }

  &.shadow {
    box-shadow: var(--box-shadow);
  }

  &.round {
    padding: 1.6rem;
    border-radius: 50%;
    &:hover, &.active {
      filter: none;
      background-color: var(--footer-bg);
    }
  }
}
</style>
