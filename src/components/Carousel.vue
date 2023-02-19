<template>
  <div ref="scroller_ref" class="scroller" @scroll="(e) => (scrolled = e.target.scrollLeft)">
    <!-- ⚠️ inline-block elements only -->
    <slot />
  </div>

  <DotNavigator
    v-if="show_dots"
    :current_scroll="scrolled"
    :container="scroller_ref"
    :max_dots="5"
    @scroll="(val) => (scroller_ref.scrollLeft = val)"
  />
</template>

<script setup>
//==============================
// Import
//==============================
import { ref } from "@vue/reactivity";
import DotNavigator from "../components/DotNavigator.vue";

// ==============================
// Props
// ==============================
const props = defineProps({
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
  width: 100%;
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
