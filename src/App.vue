<template>
  <template v-if="!isLoaded">
    <LoadingSpinner />
  </template>
  <template v-else>
    <NavBar />
    <div class="margins">
      <RouterView />
    </div>
    <Footer />
  </template>
</template>
<script setup>
//==================================
// Import
//==================================
import { reactive, ref } from "@vue/reactivity";
import { RouterView } from "vue-router";
import { onBeforeMount, onUnmounted } from "@vue/runtime-core";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

//==================================
// Const
//==================================
const show = reactive({
  modal: false,
});
const isLoaded = ref(false);

//==================================
// Function
//==================================
function onLoad() {
  setTimeout(() => isLoaded.value = true, 300)
}

//==================================
// Life cycle
//==================================
onBeforeMount(() => {
  window.addEventListener("load", onLoad);
});

onUnmounted(() => {
  window.removeEventListener("load", onLoad);
});
</script>

<style lang="scss" scoped>
.margins {
  margin: 0 2.3rem;
}
</style>
