<template>
  <label> {{ placeholder }}<template v-if="is_required">*</template> </label>
  <div class="wrapper" :class="{ 'error' : error && !modelValue }">
    <div
      v-for="(opt, i) in options"
      :key="i"
      class="option"
      :class="{ 'active': modelValue == opt }"
    >
      <span @click="emit('update:modelValue', opt)">{{ opt }}</span>
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
  is_required: Boolean,
  error: Boolean,
  options: Array,
});

const emit = defineEmits(["update:modelValue"]);


</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  &.error {
    border: 0.1rem solid var(--error-color);
    border-radius: var(--radius-xl);
  }
  .option {
    box-sizing: border-box;
    display: grid;
    place-content: center;
    height: 100%;
    flex-grow: 1;
    user-select: none;
    border-radius: var(--radius-xl);
    cursor: pointer;
    &.active {
      background-color: var(--primary);
      transition-duration: var(--transition-slow);
      border: 0.1rem solid var(--primary);
    }
    &:hover:not(.active) {
      background-color: var(--footer-bg);
    }
    span {
      max-width: min-content;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.3rem;
      font-size: clamp(1rem, 3vw, 1.4rem);
      color: var(--font-light);
    }
  }
}
</style>
