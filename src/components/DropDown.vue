<template>
  <label> {{ title }}<template v-if="is_required">*</template> </label>
  <div class="dd-wrapper" :class="[ ext_class, { 'active': modelValue, 'error' : error }]" @click="show = !show">
    <p :class="{ 'error': error }"> {{ getLabel }} </p>
    <Icon icon="fa-solid fa-chevron-right" :class="{ 'rotate': show }" />
    <template v-if="show">
      <div class="options" :style="{ 'height' :  max_options * 5 + 'rem' }">
        <div
          v-for="(opt, i) of options"
          :key="opt"
          class="option"
          :class="{ 'active' : modelValue == opt }"
          :style="{ 'top': 5 * (i + 1) + 'rem' }"
          @click="(e) => onOptionClick(e, opt)"
        >
        <p>{{ opt }}</p>
        <Icon v-if="modelValue == opt" icon="fa-solid fa-check" />
      </div>
    </div>
    </template>
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { computed, ref } from "vue";


// ==============================
// Props
// ==============================
const props = defineProps({
  modelValue: [String, Number],
  title: String,
  error: Boolean,
  options: Array,
  is_required: Boolean,
  display_uppercase: Boolean,
  ext_class: String,
  max_options: {
    type: Number,
    default: 4
  }

});

const emit = defineEmits(["update:modelValue"]);


// ==============================
// Consts
// ==============================
library.add( fas );
const show = ref(false);
const getLabel = computed(() => {
  let label = '';

  if ( props.error ) {
    label = "Campo obbligatorio";
  } else {
    if ( !props.modelValue ) {
      label = "Seleziona una opzione";
    } else {
      label = props.display_uppercase ? props.modelValue.toUpperCase() : props.modelValue;
    }
  }

  return label;
});


// ==============================
// Functions
// ==============================
function onOptionClick(e, option) {
  e.stopPropagation();
  show.value = false;
  emit("update:modelValue", option);
}


</script>

<style lang="scss" scoped>
.dd-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 0 1.5rem;
  box-sizing: border-box;
  border-radius: var(--radius-m);
  border: 0.2rem solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  user-select: none;
  &.active {
    border: 0.2rem solid var(--primary);
  }
  &.error {
    border: 0.2rem solid var(--error-color);
  }
  svg {
    font-size: 2.2rem;
    transition-duration: var(--transition-fast);
  }
  .rotate {
    transition-duration: var(--transition-medium);
    transform: rotate(90deg);
  }
  p {
    &.error {
      color: var(--error-color);
    }
  }
  .options {
    position: absolute;
    width: 100%;
    top: calc( 100% + 1.2rem);
    left: 0;
    z-index: 1;
    overflow-y: scroll;
    box-shadow: rgba(0, 0, 0, 0.25) 0 1.4rem 2.8rem, rgba(0, 0, 0, 0.22) 0 1rem 1rem;
    .option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 5rem;
      box-sizing: border-box;
      background-color: var(--background);
      transition-duration: var(--transition-medium);
      &:hover {
        filter: brightness(110%);
        background-color: var(--primary);
        transition-duration: var(--transition-medium);
      }
      &:nth-of-type(odd):not(:hover) {
        background-color: var(--footer-bg);
      }
      &.active {
        background-color: var(--primary) !important;
      }
      p {
        margin-left: 1.8rem;
        text-transform: uppercase;
      }
    }
  }
}
</style>
