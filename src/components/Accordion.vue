<template>
  <div class="accordion" @click="show = !show">
    <div class="question" :class="{ 'active': show }">
      <h4>{{ question }}</h4>
      <Icon :icon="show ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-right'" />
    </div>
    <div class="answer" :class="{ 'active' : show }">
      <h4>{{ answer }}</h4>
    </div>
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";

// ==============================
// Props
// ==============================
defineProps({
  question: String,
  answer: String,
});

// ==============================
// Consts
// ==============================
library.add( fas );
const show = ref(false);
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
    border-bottom: 2px solid var(--primary);
    &.active {
      background-color: var(--primary);
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
    padding: 0 1.5rem;
    opacity: 0;
    transition-duration: var(--transition-medium);
    h4 {
      height: 0;
    }
    &.active {
      padding: 1.5rem;
      opacity: 1;
      transition-duration: var(--transition-medium);
      h4 {
        height: 100%;
      }
    }
  }
}
</style>
