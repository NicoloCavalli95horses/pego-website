<template>
  <!-- text input -->
  <template v-if="input_type == 'text'">
    <label> {{ placeholder }}<template v-if="is_required">*</template> </label>
    <div class="input-wrapper">
      <input
        ref="input_ref"
        type="text"
        autocomplete="none"
        :class="{ 'error': error && !modelValue }"
        :value="modelValue"
        :required="is_required"
        :placeholder="getPlaceholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div v-if="error && !modelValue" class="warning-text" :class="{ 'mobile' : device == 'mobile' }">
        <label>{{ error_message || 'campo obbligatorio' }}</label>
      </div>
    </div>
  </template>

  <!-- tel input -->
  <template v-else-if="input_type == 'tel'">
    <label> {{ placeholder }}<template v-if="is_required">*</template> </label>
    <div class="input-wrapper">
      <input
        ref="input_ref"
        type="tel"
        size="10"
        minlength="10"
        maxlength="10"
        autocomplete="none"
        :class="{ 'error': error && !modelValue }"
        :value="modelValue"
        :required="is_required"
        :placeholder="getPlaceholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div v-if="error && !modelValue" class="warning-text" :class="{ 'mobile' : device == 'mobile' }">
        <label>{{ error_message || 'campo obbligatorio' }}</label>
      </div>
    </div>
  </template>

  <!-- textarea -->
  <template v-else-if="input_type == 'textarea'">
    <label> {{ placeholder }}<template v-if="is_required">*</template> </label>
    <div class="input-wrapper">
      <textarea
        autocomplete="none"
        :class="{ 'error': error && !modelValue }"
        :value="modelValue"
        :required="is_required"
        :placeholder="getPlaceholder"
        @input="$emit('update:modelValue', $event.target.value)"
      >
      </textarea>
      <div v-if="error && !modelValue" class="warning-text textarea" :class="{ 'mobile' : device == 'mobile' }">
        <label>{{ error_message || 'campo obbligatorio' }}</label>
      </div>
    </div>
  </template>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref } from "@vue/reactivity";
import { getViewport } from "../utils/screen_size.js";
import { computed, onMounted } from "@vue/runtime-core";

// ==============================
// Props
// ==============================
const props = defineProps({
  input_type: {
    type: String,
    default: "text",
  },
  modelValue: [String, Number],
  placeholder: String,
  is_required: Boolean,
  error: Boolean,
  error_message: String
});

const emit = defineEmits(["update:modelValue"]);

// ==============================
// Variables
// ==============================
const device = getViewport();
const input_ref = ref(undefined);
const getPlaceholder = computed(() => (device.value == 'mobile' && props.error) ? '' : props.placeholder );

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
.input-wrapper {
  position: relative;
  input, textarea {
    box-sizing: border-box;
    width: 100%;
    border-radius: 1.2rem;
    outline: none;
    border: none;
    caret-color: var(--primary);
    font-size: 1.8rem;
    &:focus {
      border: 0.2rem solid var(--primary);
    }
    &::placeholder {
      filter: grayscale(60%);
      opacity: 0.7;
    }
    &.error {
      border: 2px solid var(--error-color);
      &::placeholder {
        color: var(--error-color);
      }
    }
  }

  input {
    padding: 0 1.2rem;
    height: 3.5rem;
  }

  textarea {
    height: 18rem;
    padding: 1rem 1.2rem;
    resize: none;
    &::placeholder {
      filter: grayscale(60%);
      opacity: 0.7;
    }
  }

  .warning-text {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-2rem, -50%);
    pointer-events: none;
    touch-action: none;
    &.textarea {
      top: 0;
      transform: translate(-2rem, 2rem);
    }

    &.mobile {
      top: 50%;
      left: 0;
      transform: translate(2rem, -50%);
      &.textarea {
        top: 2rem;
      }
    }

    label {
      font-size: 1.3rem;
      color: var(--error-color);
    }
  }
}
</style>
