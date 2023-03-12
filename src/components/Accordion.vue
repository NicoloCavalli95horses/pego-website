<template>
  <div class="accordion" @click="show = !show">
    <div class="question" :class="{ active: show }">
      <h4>{{ question }}</h4>
      <Icon :icon="show ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-right'"
      />
    </div>
    <div v-if="show" class="answer">
      <h4 :class="{ show: show }">{{ answer }}</h4>
    </div>
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const props = defineProps({
  question: String,
  answer: String,
});
// ==============================
// Consts
// ==============================
library.add(faChevronDown);
const show = ref(false);

// ==============================
// Functions
// ==============================
function toggleOpen() {
  isOpen.value = !isOpen.value;
}
</script>

<style lang="scss" scoped>
.accordion {
  cursor: pointer;
  .question {
    display: flex;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    transition-duration: var(--transition-medium);
    border-bottom: 2px solid var(--crusta);
    &.active {
      background-color: var(--crusta);
      transition-duration: var(--transition-slow);
    }
    &:hover {
      transition-duration: var(--transition-slow);
    }
    svg {
      font-size: 22px;
    }
  }
  .answer {
    padding: 15px;
  }
}
</style>
