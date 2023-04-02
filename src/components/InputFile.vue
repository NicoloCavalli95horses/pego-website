<template>
  <label class="placeholder"> {{ placeholder }} <template v-if="is_required">*</template> </label>
  <label for="file-input" class="file-input" :class="{ 'active' : file }">
    <Icon icon="fa-solid fa-arrow-up-from-bracket" />
    <p class="l-12">
      {{ file ? file[0].name : 'Nessun file selezionato (max. 5MB)' }} </p>
  </label>

  <input
    id="file-input"
    class="display-none"
    ref="input_ref"
    type="file"
    accept="image/png, image/jpeg"
    multiple
    @change="e => onFileUpload(e)"
  />
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
});

const emits = defineEmits(["upload"]);

// ==============================
// Variables
// ==============================
const input_ref = ref(undefined);
const file = ref( null );

// ==============================
// Functions
// ==============================
function onFileUpload( e ){
  file.value = e.target.files;
  console.log( file.value );
  emits('upload', file.value);
}

//==============================
// Life cycle
//==============================
onMounted(() => {
  if (props.focus) {
    input_ref.value.focus();
  }
});
</script>

<style lang="scss" scoped>
.file-input {
  display: flex;
  align-items: center;
  height: 5rem;
  border-radius: var(--radius-m);
  border: 2px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  padding: 0 1.5rem;
  &:focus, &.active {
    border: 0.2rem solid var(--primary);
  }
  &::placeholder {
    filter: grayscale(60%);
    opacity: 0.7;
  }
  svg {
    width: 2rem;
  }
}

</style>
