<template>
  <input
    type="text"
    v-model="value"
    :placeholder="placeholder"
    @input="$emit('update', value)"
  />
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref } from "@vue/reactivity";

// ==============================
// Props
// ==============================
const props = defineProps({
  placeholder: String,
});

const emits = defineEmits(["update"]);

// ==============================
// Variables
// ==============================
const value = ref("");
</script>

<style lang="scss" scoped>
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  padding: 0 12px;
  border-radius: 12px;
  outline: none;
  border: none;
  caret-color: var(--blue);
  font-size: 18px;
  &::placeholder {
    filter: grayscale(60%);
    opacity: 0.7;
  }

  &:focus {
    border-bottom: 5px solid var(--blue);
  }
}
</style>
