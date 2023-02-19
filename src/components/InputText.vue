<template>
  <template v-if="!textarea">
    <input
      ref="input_ref"
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
      v-model="value"
      :placeholder="placeholder"
      @input="$emit('update', value)"
      >
   </textarea>
  </template>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

// ==============================
// Props
// ==============================
const props = defineProps({
  placeholder: String,
  textarea: Boolean,
  focus: Boolean,
});

const emits = defineEmits(["update"]);

// ==============================
// Variables
// ==============================
const value = ref("");
const input_ref = ref( undefined );

//==============================
// Life cycle
//==============================
onMounted(() => {
  if ( props.focus ) {
    input_ref.value.focus();
  }
})
</script>

<style lang="scss" scoped>
input[type="text"], textarea {
  box-sizing: border-box;
  width: 100%;
  border-radius: 12px;
  outline: none;
  border: none;
  caret-color: var(--primary);
  font-size: 18px;
  &:focus {
    border-bottom: 5px solid var(--primary);
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
