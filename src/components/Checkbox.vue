<template>
  <label> {{ placeholder }}<template v-if="is_required">*</template> </label>
  <div class="wrapper">
    <div v-for="(opt, i) in options" :key="i" :data-cy="`opt-${opt}`" class="option" @click="$emit('update:modelValue', opt)">
      <div class="dot" :class="{ 'active' : modelValue == opt, 'error' : error && !modelValue }" />
      <label :class="{ 'error' : error && !modelValue }">{{ opt }}</label>
    </div>
  </div>
</template>

<script setup>
// ==============================
// Props
// ==============================
const props = defineProps({
  modelValue: [String, Number],
  placeholder: String,
  type: String,
  is_required: Boolean,
  error: Boolean,
  options: Array,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  .option {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition-duration: var(--transition-medium);
    &:hover {
      label {
        color: var(--primary);
        transition-duration: var(--transition-medium);
      }
    }
    .dot {
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      background-color: var(--font-light);
      box-sizing: border-box;
      &.active {
        background-color: var(--primary);
        transition-duration: var(--transition-medium);
      }
      &.error {
        border: 0.2rem solid var(--error-color);
      }
    }
    label {
      margin-left: 1rem;
      color: var(--font-light);
      padding: 0.8rem 0;
      cursor: pointer;
      &.error {
        color: var(--error-color);
      }
    }
  }
}
</style>
