<template>
  <label> {{ title }}<template v-if="is_required">*</template> </label>
  <div class="dd-wrapper" @click="show = !show">
    <p>{{ selection }}</p>
    <Icon :icon="show ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-right'" />
    
    <template v-if="show">
      <div v-for="(opt, i) of options" :key="opt" class="option" :style="{ 'top' :  5 * (i + 1) + 'rem' }" @click="e => onOptionClick( e, opt )">
        <p> {{ opt }} </p>
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
});

// const emits = defineEmits(["update"]);

// ==============================
// Consts
// ==============================
const selection = ref( "Seleziona un'opzione" );
const show = ref( false );

// ==============================
// Functions
// ==============================
function onOptionClick( e, option ) {
  e.stopPropagation();
  show.value = false;
  selection.value = option;
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
  border: 2px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  user-select: none;
  svg {
    font-size: 2.2rem;
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
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    transition-duration: var(--transition-medium);
    &:hover {
      filter: brightness(110%);
      transition-duration: var(--transition-medium);
    }
    &:first-of-type {
      border-radius: var(--radius-m) var(--radius-m) 0 0;
    }
    &:last-of-type {
      border-radius: 0 0 var(--radius-m) var(--radius-m);
      border-bottom: none;
    }
    p {
      margin-left: 1.8rem;
    }
  }
}

</style>
