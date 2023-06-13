<template>
  <div
    ref="scroller_ref"
    class="scroller"
    :style="{ 'width' : width || '100%' }"
    @scroll="(e) => (scrolled = e.target.scrollLeft)"
  >
    <!-- ⚠️ inline-block elements only -->
    <slot />
  </div>

  <DotNavigator
    v-if="show_dots"
    :current_scroll="scrolled"
    :container="scroller_ref"
    :max_dots="3"
    @scroll="(val) => (scroller_ref.scrollLeft = val)"
  />
</template>

<script setup>
//==============================
// Import
//==============================
import { ref } from "vue";
import DotNavigator from "../components/DotNavigator.vue";


// ==============================
// Props
// ==============================
defineProps({
  width: String,
  show_dots: Boolean,
});


//==============================
// Consts
//==============================
const scrolled = ref(0);
const scroller_ref = ref(undefined);


</script>

<style lang="scss" scoped>
.scroller {
  text-align: center;
  overflow: auto;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
