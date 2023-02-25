<template>
  <div class="wrapper">
    <div>
      <div class="counter-icon">
        <h2>+{{ counter }}</h2>
        <Icon icon="fa-solid fa-user" />
      </div>
      <label>{{ label }}</label>
    </div>
  </div>
</template>

<script setup>
//==============================
// Import
//==============================
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import DotNavigator from "../components/DotNavigator.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// ==============================
// Props
// ==============================
const props = defineProps({
  label: String,
  value: Number,
  animation_time: Number,
});

//==============================
// Consts
//==============================
library.add(faUser);
const counter = ref(0);
let interval = null;

//==============================
// Life cycle
//==============================
onMounted(() => {
  interval = setInterval(() => {
    if (counter.value < props.value) {
      counter.value++;
    } else {
      clearInterval(interval);
    }
  }, props.animation_time / props.value);
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 20rem;
  height: 10rem;
  border-radius: var(--radius-l);
  // border: 2px solid var(--atomic-tangerine);
  display: grid;
  place-items: center;
  label {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
    text-transform: capitalize;
  }
  .counter-icon {
    display: flex;
    gap: 1.2rem;
    justify-content: center;
    text-align: center;
    h2 {
      font-size: 4rem;
    }
    h2, svg {
      color: var(--karry);
    }
  }
}
</style>
