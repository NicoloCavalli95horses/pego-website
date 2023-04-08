<template>
  <label> {{ title }}<template v-if="is_required">*</template> </label>
  <div class="dd-wrapper" :class="{ 'active': modelValue, 'error' : error }" @click="show = !show">
    <p :class="{ 'error': error }">
      {{ modelValue || (error ? "Campo obbligatorio" : "Seleziona una opzione") }}
    </p>
    <Icon icon="fa-solid fa-chevron-right" :class="{ 'rotate': show }" />

    <template v-if="show">
      <div
        v-for="(opt, i) of options"
        :key="opt"
        class="option"
        :class="{ 'fadein': show }"
        :style="{ 'top': 5 * (i + 1) + 'rem' }"
        @click="(e) => onOptionClick(e, opt)"
      >
        <p>{{ opt }}</p>
      </div>
    </template>
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref } from "vue";

// ==============================
// Props
// ==============================
const props = defineProps({
  title: String,
  options: Array,
  is_required: Boolean,
  modelValue: [String, Number],
  error: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

// ==============================
// Consts
// ==============================
const selection = ref("Seleziona un'opzione");
const show = ref(false);

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
    transition-duration: var(--transition-medium);
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
  .option {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 5rem;
    background-color: var(--background);
    z-index: 1;
    left: 0;
    border-bottom: 0.2rem solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    transition-duration: var(--transition-medium);
    &:hover {
      filter: brightness(110%);
      background-color: var(--primary);
      transition-duration: var(--transition-medium);
    }
    &:first-of-type {
      border-radius: var(--radius-s) var(--radius-s) 0 0;
    }
    &:last-of-type {
      border-radius: 0 0 var(--radius-s) var(--radius-s);
      border-top: none;
    }
    p {
      margin-left: 1.8rem;
    }
  }
}
</style>
