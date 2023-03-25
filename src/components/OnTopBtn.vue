<template>
  <div class="fixed-right" :class="[show ? 'fade-in' : 'fade-out']">
    <Btn :def="true" @click="onTopClick()">
      <template #icon>
        <Icon icon="fa-solid fa-chevron-up" />
      </template>
    </Btn>
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { onBeforeMount, onUnmounted, ref } from "vue";
import Btn from "./Btn.vue";

// ==============================
// Props
// ==============================
const show = ref(false);
const emits = defineEmits(["ontop"]);

// ==============================
// Functions
// ==============================
function onTopClick() {
  document.body.scrollTop = 0; // safari
  document.documentElement.scrollTop = 0; // chrome, firefox, opera
  emits("ontop");
}

function onScroll() {
  show.value = document.documentElement.scrollTop >= 50 ? true : false;
}
// ==============================
// Life cycle
// ==============================
onBeforeMount(() => {
  document.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  document.removeEventListener("scroll", onScroll);
});
</script>

<style lang="scss" scoped>
.fixed-right {
  position: fixed;
  z-index: 1;
  right: 2.2rem;
  bottom: 2.2rem;
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
}

.fade-in {
  opacity: 1;
  transition-duration: var(--transition-slow);
}
.fade-out {
  opacity: 0;
  transition-duration: var(--transition-slow);
}
</style>
