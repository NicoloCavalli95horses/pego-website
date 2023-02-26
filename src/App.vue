<template>
  <template v-if="!isLoaded">
    <LoadingSpinner />
  </template>
  <template v-else>
    <!-- Nav bar -->
    <NavBar />

    <!-- Body -->
    <div class="margins">
      <RouterView />
    </div>

    <!-- Footer -->
    <Footer />


    <!-- CTA -->
    <!-- da aggiungere a scroll > n (?) -->
    <!-- <Btn
    class="fix-bottom-right"
    text="contattaci"
    :def="true"
    @click="show.modal = true"
  /> -->

    <!-- Contact modal -->
    <Modal
      v-if="show.modal"
      :click_out_close="true"
      @closed="show.modal = false"
      title="Contattaci"
    >
      <template #default>
        <ContactForm />
      </template>
      <template #footer>
        <div class="flex-center">
          <Btn :bg="false" text="chiudi" @click="show.modal = false" />
          <Btn
            class="l-12"
            text="invia"
            :def="true"
            @click="show.modal = false"
          />
        </div>
      </template>
    </Modal>
  </template>
</template>
<script setup>
//==================================
// Import
//==================================
import { reactive, ref } from "@vue/reactivity";
import { RouterView } from "vue-router";
import { onBeforeMount, onUnmounted } from "@vue/runtime-core";
import Btn from "./components/Btn.vue";
import Modal from "./components/Modal.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import ContactForm from "./components/ContactForm.vue";
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
  setTimeout(() => {
    isLoaded.value = true;
  }, 300)
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
.modals {
  overflow: hidden;
}
.margins {
  margin: 0 2.3rem;
}
</style>
