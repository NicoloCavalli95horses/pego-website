<template>
  <div class="accordion" @click="show = !show">
    <div class="question" :class="{ 'active': show }">
      <h4>{{ question }}</h4>
      <Icon :icon="show ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-right'" />
    </div>
    <div v-if="show" class="answer">
      <h4 :class="{ 'show': show }">{{ answer }}</h4>
    </div>
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
  question: String,
  answer: String,
});

// ==============================
// Consts
// ==============================
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
    padding: 15px;
  }
}
</style>
