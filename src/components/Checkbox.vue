<template>
  <label> {{ placeholder }}<template v-if="is_required">*</template> </label>
  <div class="wrapper">
    <div
      v-for="(opt, i) in options"
      :key="i"
      :data-cy="`opt-${opt}`"
      class="option"
      @click="$emit('update:modelValue', opt)"
    >
      <div class="dot" :class="{ 'active': modelValue == opt, 'error': error && !modelValue }" />
      <label :class="{ 'error': error && !modelValue }">
        {{ opt }}
      </label>
    </div>
  </div>
</template>

<script setup>
// ==============================
// Props
// ==============================
defineProps({
  modelValue: [String, Number],
  placeholder: String,
  type: String,
  is_required: Boolean,
  error: Boolean,
  options: Array,
});

defineEmits(["update:modelValue"]);


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
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: var(--font-light);
      box-sizing: border-box;
      &.active {
        position: relative;
        background-color: var(--primary);
        transition-duration: var(--transition-medium);
        &::after {
          content: '\2713';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.5rem;
          color: var(--footer-bg);
        }
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
