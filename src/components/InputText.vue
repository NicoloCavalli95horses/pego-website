<template>
  <!-- text input -->
  <template v-if="input_type == 'text'">
    <label> {{ placeholder }}<template v-if="is_required">*</template> </label>
      <input
        ref="input_ref"
        type="text"
        autocomplete="off"
        :value="modelValue"
        :name="name"
        :required="is_required"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
  </template>
  
  <!-- tel input -->
  <template v-else-if="input_type == 'tel'">
    <label> {{ placeholder }}<template v-if="is_required">*</template> </label>
      <input
        ref="input_ref"
        type="tel"
        size="10"
        minlength="10"
        maxlength="10"
        autocomplete="off"
        :value="modelValue"
        :required="is_required"
        :placeholder="placeholder"
        pattern="^(\+39)?\s?\d{3}\s?\d{3}\s?\d{4}$"
        @input="$emit('update:modelValue', $event.target.value)"
      />
  </template>
  
  <!-- textarea -->
  <template v-else-if="input_type == 'textarea'">
    <label> {{ placeholder }}<template v-if="is_required">*</template> </label>
    <textarea
      cols="30"
      rows="30"
      autocomplete="off"
      :value="modelValue"
      :required="is_required"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
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
  input_type: {
    type: String,
    default: 'text'
  },
  modelValue: [String, Number],
  placeholder: String,
  is_required: Boolean,
});

const emits = defineEmits(["update:modelValue"]);

// ==============================
// Variables
// ==============================
const input_ref = ref(undefined);

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
}

input {
  padding: 0 1.2rem;
  height: 3.5rem;
}

textarea {
  height: 200px;
  padding: 1rem 1.2rem;
  resize: none;
  &::placeholder {
    filter: grayscale(60%);
    opacity: 0.7;
  }
}
</style>
