<template>
  <template v-if="!textarea">
    <input
      type="text"
      v-model="value"
      :placeholder="placeholder"
      @input="$emit('update', value)"
    />
  </template>
  <template v-else>
    <textarea
      cols="30"
      rows="30"
      :placeholder="placeholder">
   </textarea>
  </template>
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
  textarea: Boolean,
});

const emits = defineEmits(["update"]);

// ==============================
// Variables
// ==============================
const value = ref("");
</script>

<style lang="scss" scoped>
input[type="text"], textarea {
  box-sizing: border-box;
  width: 100%;
  border-radius: 12px;
  outline: none;
  border: none;
  caret-color: var(--blue);
  font-size: 18px;
  &:focus {
    border-bottom: 5px solid var(--blue);
  }
  &::placeholder {
    filter: grayscale(60%);
    opacity: 0.7;
  }
}

input[type="text"] {
  padding: 0 12px;
  height: 35px;
}

textarea {
  height: 200px;
  padding: 10px 12px;
  resize: none;
  &::placeholder {
    filter: grayscale(60%);
    opacity: 0.7;
  }
}
</style>
