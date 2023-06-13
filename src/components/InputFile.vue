<template>
  <div :class="[ 'label-wrapper', { 'mobile' : device == 'mobile' }]">
    <label> {{ label }}<template v-if="is_required">*</template> </label>
    <div v-if="tooltip"> <Tooltip :text="tooltip" /> </div>
  </div>
  <label for="file-input" class="file-input" :class="{ 'active': file }">
    <div class="flex-center">
      <Icon icon="fa-solid fa-arrow-up-from-bracket" />
      <p class="l-12"> {{ getFileName }} </p>
    </div>
    <div v-if="file" @click="(e) => onFileDelete(e)">
      <Icon icon="fa-solid fa-trash" />
    </div>
  </label>

  <input
    id="file-input"
    class="display-none"
    ref="input_ref"
    type="file"
    name="Allegato"
    accept="image/png, image/jpeg"
    @change="(e) => onFileUpload(e)"
  />
</template>

<script setup>
// ==============================
// Import
// ==============================
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";
import { computed, onMounted } from "vue";
import { getViewport } from "../utils/screen_size.js";

import Tooltip from "./Tooltip.vue";


// ==============================
// Props
// ==============================
const props = defineProps({
  placeholder: String,
  is_required: Boolean,
  tooltip: String,
  label: String
});

const emit = defineEmits([
  "upload",
  "delete"
]);


// ==============================
// Variables
// ==============================
library.add( fas );
const input_ref = ref(undefined);
const file = ref(null);
const MAX_NAME_LENGTH = 20;
const device = getViewport();

const getFileName = computed(() => {
  let name = '';
  if ( !file.value ) {
    name = 'Nessun file (max. 5MB)';
  } else if ( file.value[0] ) {
    name = file.value[0].name;
    if ( name.length >= MAX_NAME_LENGTH ) {
      name = name.substring(0, MAX_NAME_LENGTH ) + '...';
    }
  }

  return name;
}); 


// ==============================
// Functions
// ==============================
function onFileUpload(e) {
  file.value = e.target.files;
  emit("upload", file.value);
}

function onFileDelete(e) {
  e.preventDefault();
  file.value = undefined;
  emit('delete');
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
  justify-content: space-between;
  height: 5rem;
  border-radius: var(--radius-m);
  border: 2px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  padding: 0 1.5rem;
  &:focus,
  &.active {
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

.label-wrapper {
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.mobile {
    height: 4rem;
  }
}
</style>
