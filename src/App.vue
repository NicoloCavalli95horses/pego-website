<template>
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
    @close="show.modal = false"
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
<script setup>
//==================================
// Import
//==================================
import { reactive, ref } from "@vue/reactivity";
import { RouterLink, RouterView } from "vue-router";
import Btn from "./components/Btn.vue";
import Modal from "./components/Modal.vue";
import ContactForm from "./components/ContactForm.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { onMounted, watchEffect } from "@vue/runtime-core";

//==================================
// Const
//==================================
const show = reactive({
  modal: false,
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
