<template>
  <!-- text input -->
  <template v-if="input_type == 'text'">
    <div :class="[ext_class]">
      <div class="wrapper">
        <div :class="[ 'label-wrapper', { 'mobile' : device == 'mobile' }]">
          <label>{{ label }}<template v-if="is_required">*</template></label>
          <div v-if="tooltip">
            <Tooltip :text="tooltip" :direction="tooltip_dir" />
          </div>
        </div>
        <div class="input-wrapper">
          <input
            ref="input_ref"
            type="text"
            autocomplete="none"
            :class="{ 'error': error && !modelValue }"
            :value="display_uppercase ? modelValue.toUpperCase() : modelValue"
            :required="is_required"
            :placeholder="getPlaceholder"
            @focus="() => { $emit('focus'); is_focused = true; }"
            @blur="() => { $emit('blur'); is_focused = false; }"
            @input="$emit('update:modelValue', $event.target.value)"
          />
          <div v-if="modelValue.length" class="reset" @click="$emit('reset')">
            <Icon icon="fa-solid fa-close" class="svg-24" />
          </div>
          <div v-if="error && !modelValue" class="warning-text" :class="{ 'mobile': device == 'mobile' }">
            <label>{{ error_message || "Campo obbligatorio" }}</label>
          </div>
          <div v-if="show_tips" class="tips">
            <div class="tip" v-for="t in tips" :key="t" @click="$emit('selectedtip', t)">
              <p>{{ t }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <!-- tel input -->
  <template v-else-if="input_type == 'tel'">
    <div :class="[ext_class]">
      <div class="wrapper">
        <div :class="[ 'label-wrapper', { 'mobile' : device == 'mobile' }]">
          <label>{{ label }}<template v-if="is_required">*</template></label>
          <div v-if="tooltip">
            <Tooltip :text="tooltip" :direction="tooltip_dir" />
          </div>
        </div>
        <div class="input-wrapper">
          <input
            ref="input_ref"
            type="tel"
            :size="length"
            :minlength="length"
            :maxlength="length"
            autocomplete="none"
            :class="{ 'error': error && !modelValue }"
            :value="modelValue.replace(/\D/g, '')"
            :required="is_required"
            :placeholder="getPlaceholder"
            @focus="() => { $emit('focus'); is_focused = true; }"
            @blur="() => { $emit('blur'); is_focused = false; }"
            @input="$emit('update:modelValue', $event.target.value)"
          />
          <div v-if="modelValue.length" class="reset" @click="$emit('reset')">
            <Icon icon="fa-solid fa-close" class="svg-24" />
          </div>
          <div v-if="error && !modelValue" class="warning-text" :class="{ 'mobile': device == 'mobile' }">
            <label>{{ error_message || "Campo obbligatorio" }}</label>
          </div>
        </div>
      </div>
    </div>
  </template>

  <!-- textarea -->
  <template v-else-if="input_type == 'textarea'">
    <div :class="[ext_class]">
      <div class="wrapper">
        <div :class="[ 'label-wrapper', { 'mobile' : device == 'mobile' }]">
          <label>{{ label }}<template v-if="is_required">*</template></label>
          <div v-if="tooltip">
            <Tooltip :text="tooltip" :direction="tooltip_dir" />
          </div>
        </div>
        <div class="input-wrapper">
          <textarea
            autocomplete="none"
            :class="{ 'error': error && !modelValue }"
            :value="modelValue"
            :required="is_required"
            :placeholder="getPlaceholder"
            data-cy="textarea"
            @focus="() => { $emit('focus'); is_focused = true; }"
            @blur="() => { $emit('blur'); is_focused = false; }"
            @input="$emit('update:modelValue', $event.target.value)"
          >
          </textarea>
          <div v-if="error && !modelValue" class="warning-text textarea" :class="{ 'mobile': device == 'mobile' }">
            <label>{{ error_message || "Campo obbligatorio" }}</label>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref } from "vue";
import { getViewport } from "../utils/screen_size.js";
import { computed, onMounted, onUnmounted } from "vue";
import Tooltip from "./Tooltip.vue";


// ==============================
// Props
// ==============================
const props = defineProps({
  input_type: {
    type: String,
    default: "text",
  },
  modelValue: [String, Number],

  // title of the input text
  placeholder: String,
  // title of the label
  label: String,

  // mark input field as required (*), bind an error state and an error message
  is_required: Boolean,
  error: Boolean,
  error_message: String,

  // tooltip message (?)
  tooltip: String,

  // tooltip position
  tooltip_dir: String,

  // tips to help the user choosing between different fixed options (ex., cities)
  show_tips: Boolean,
  tips: Array,

  // force uppercase
  display_uppercase: Boolean,

  // take external classes
  ext_class: String,

  // Max length of the input
  length: Number
});

defineEmits([
  "update:modelValue",
  "selectedtip",
  "focus",
  "reset",
  "blur"
]);


// ==============================
// Variables
// ==============================
const device = getViewport();
const input_ref = ref(undefined);
const is_focused = ref(false);
const windowH = ref( window.innerHeight );
const isKeyboardOpen = ref( false );

const getPlaceholder = computed(() => props.error ? "" : props.placeholder );


//==============================
// Functions
//==============================
function onKeyboard(){
  isKeyboardOpen.value =  windowH.value != window.innerHeight ? true : false;
}


//==============================
// Life cycle
//==============================
onMounted(() => {
  if (props.focus) {
    input_ref.value.focus();
  }
  window.addEventListener('resize', onKeyboard);
});

onUnmounted(() => {
  window.removeEventListener('resize', onKeyboard);
})


</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  input,
  textarea {
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
    height: 10rem;
    padding: 1rem 1.2rem;
    resize: none;
    &::placeholder {
      filter: grayscale(60%);
      opacity: 0.7;
    }
  }

  .reset {
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    position: absolute;
    background-color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    svg {
      color: var(--primary);
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
.label-wrapper {
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.mobile {
    height: 4rem;
  }
}

.tips {
  position: absolute;
  width: 100%;
  z-index: 1;
  max-height: 20rem;
  cursor: pointer;
  user-select: none;
  overflow-y: scroll;
  box-shadow: var(--box-shadow);
  .tip {
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
</style>
