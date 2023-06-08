<template>
  <div class="accordion" v-for="(item, i) in items" :key="i" @click="toggleOption(i)">
    <div class="question" :class="{ 'active': actives.has(i) }">
      <h4>{{ item.question }}</h4>
      <Icon icon="fa-solid fa-chevron-right" :class="{ 'active' : actives.has(i) }" />
    </div>
    <div class="answer" :class="{ 'active': actives.has(i) }">
      <p> {{ item.answer }} <a v-if="item.link_src" :href="item.link_src"> {{ item.link_text }}</a> </p>
    </div>
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref } from "vue";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


// ==============================
// Props
// ==============================
defineProps({
  items: Object,
});


// ==============================
// Consts
// ==============================
library.add(fas);
const actives = ref(new Set());


// ==============================
// Consts
// ==============================
function toggleOption(i) {
  actives.value.has(i) ? actives.value.delete(i) : actives.value.add(i);
}


</script>

<style lang="scss" scoped>
.accordion {
  cursor: pointer;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

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
    h4 {
      max-width: 90%;
    }
    svg {
      font-size: 22px;
      transition-duration: var(--transition-medium);
      &.active {
        transform: rotate(90deg);
        transition-duration: var(--transition-medium);
      }
    }
  }
  .answer {
    padding: 0 1.5rem;
    opacity: 0;
    transition-duration: var(--transition-medium);
    p {
      display: none;
      a {
        color: var(--secondary);
      }
    }
    &.active {
      padding: 1.5rem;
      opacity: 1;
      transition-duration: var(--transition-medium);
      p {
        display: inline-block;
      }
    }
  }
}
</style>
