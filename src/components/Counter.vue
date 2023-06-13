<template>
  <div class="counter-wrapper" ref="counter_ref">
    <Icon :icon="icon" />
      <h2 v-if="isAPIsupported"> <code>{{ counter }}</code><template v-if="plus">+</template> </h2>
      <h2 v-else> <code>{{ value }}</code><template v-if="plus">+</template> </h2>
    <div class="line" />
    <label>{{ label }}</label>
  </div>
</template>

<script setup>
//==============================
// Import
//==============================
import { computed, ref } from "vue";
import { onMounted } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// ==============================
// Props
// ==============================
const props = defineProps({
  label: String,
  value: Number,
  animation_time: Number,
  icon: String,
  plus: Boolean,
  multiplier: {
    type: Number,
    default: 1,
  },
});


//==============================
// Consts
//==============================
library.add( fas );
const counter = ref( 0 );
let interval = null;
const counter_ref = ref( undefined );

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5  // trigger onIntersect() if at least half of the counter_ref is visible
}
const isAPIsupported = computed(() => 
  ('IntersectionObserver' in window) &&
  ('IntersectionObserverEntry' in window) &&
  ('intersectionRatio' in window.IntersectionObserverEntry.prototype)
);


//==============================
// Function
//==============================
function onIntersect( el ){
  if ( el[0].isIntersecting ) {
    startCounter();
  } else {
    resetCounter();
  }
}

function startCounter(){
  interval = setInterval(() => {
    if ( counter.value <= (props.value - props.multiplier)) {
      counter.value += props.multiplier;
    } else {
      clearInterval( interval );
    }
  }, props.animation_time / props.value);
}

function resetCounter(){
  counter.value = 0;
  clearInterval( interval );
}


//==============================
// Life cycle
//==============================
onMounted(() => {
  let observer = new IntersectionObserver(onIntersect, options);
  observer.observe( counter_ref.value );
});


</script>

<style lang="scss" scoped>
.counter-wrapper {
  margin: 1rem;
  width: 18rem;
  height: 18rem;
  border-radius: var(--radius-m);
  background-color: var(--backdrop);
  display: grid;
  place-items: center;
  padding: 2rem;
  box-sizing: border-box;
  label {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  .line {
    width: 100%;
    height: 2px;
    background-color: var(--font-light);
  }
  h2 {
      font-size: 3.5rem;
      margin: 0;
      padding: 0;
    }
    h2, svg {
      color: var(--font-light);
    }
}
</style>
