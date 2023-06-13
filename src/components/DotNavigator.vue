<template>
  <template v-if="scroller.can_scroll">
    <div class="dot-navigation">
      <div
        v-for="i in scroller.dots"
        :key="i"
        class="dot"
        :class="{ 'active': i == scroller.active }"
        @click="onDotClick(i)"
      />
    </div>
  </template>
</template>

<script setup>
//=============================
// Imports
//=============================
import { reactive, watch } from "vue";


//=============================
// Props, emits, consts
//=============================
const props = defineProps({
  container: Object,
  current_scroll: Number,
  max_dots: Number,
});

const emit = defineEmits(["scroll", "active"]);


//=============================
// Consts
//=============================
const scroller = reactive({
  container: undefined,
  can_scroll: true,
  current_scroll: null,
  total_width: null,
  available_width: null,
  max_scroll: null,
  density: 100, // affects the amount of dots
  step: null,
  interval: null,
  active: 1,
  dots: null,
  max_dots: props.max_dots,
  min_dots: 2,
});


//=============================
// Functions
//=============================
function onContainerScroll() {
  let c = 1;
  for (let step = 0; step <= scroller.max_scroll; step += scroller.interval) {
    if (
      scroller.current_scroll >= step &&
      scroller.current_scroll <= step + scroller.interval
    ) {
      scroller.active = c;
      return;
    } else {
      c++;
    }
  }
}

function onDotClick(i) {
  scroller.active = i;
  emit("scroll", scroller.step * (i - 1));
}

function getScrollContainerValues() {
  // Get client and scroll widths
  scroller.total_width = scroller.container.scrollWidth;
  scroller.available_width = scroller.container.clientWidth;
  scroller.max_scroll = scroller.total_width - scroller.available_width;
  // Return if not scrollable
  if (!scroller.max_scroll) {
    scroller.can_scroll = false;
    return;
  }
  // Set number of dots
  scroller.dots = Math.round(scroller.max_scroll / scroller.density);
  if (scroller.dots > scroller.max_dots) {
    scroller.dots = scroller.max_dots;
  } else if (scroller.dots < scroller.min_dots) {
    scroller.dots = scroller.min_dots;
  }
  scroller.interval = scroller.max_scroll / scroller.dots;
  scroller.step = scroller.max_scroll / (scroller.dots - 1);
}


//=============================
// Watcher
//=============================
watch(
  () => props.container,
  (newContainer) => {
    scroller.container = newContainer;
    getScrollContainerValues();
  }
);

watch(
  () => props.current_scroll,
  (newScroll) => {
    scroller.current_scroll = newScroll;
    onContainerScroll();
  }
);


</script>

<style lang="scss" scoped>
.dot-navigation {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
  .dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid var(--secondary);
    margin: 0 0.6rem;
    transition-duration: var(--transition-medium);
    &.active {
      background-color: var(--secondary);
      transition-duration: 400ms;
    }
    &:hover {
      cursor: pointer;
      background-color: var(--primary);
      transition-duration: var(--transition-medium);
    }
  }
}
</style>
