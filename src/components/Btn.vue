<template>
  <button :class="{ disabled: disabled, default: def, card: card }">
    <h3>{{ text }}</h3>
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
  disabled: Boolean,
});
</script>

<style lang="scss" scoped>
button {
  width: max-content;
  text-decoration: none;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 18px 32px;
  border-radius: 8px;
  letter-spacing: 4px;
  cursor: pointer;
  transition-duration: 400ms;

  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  &:hover {
    transition-duration: 400ms;
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
    background-color: var(--blue-secondary);
  }

  &.card {
    position: relative;
    width: 100%;
    max-width: 220px;
    height: 100px;
    overflow: hidden;
    background-color: var(--blue);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      border-top: 20px solid var(--blue-secondary);
      border-left: 20px solid transparent;
      border-right: 20px solid var(--blue-secondary);
      border-bottom: 20px solid transparent;
    }
  }

  h3 {
    color: white;
  }
}
</style>
