<template>
  <div class="w-100 h-100 flex-column">
    <h1>S.T.A. di Pegorer</h1>
    <h2 class="top-32 c-text">
      Professionisti nell'installazione e manutenzione <br />
      di impianti termotecnici
    </h2>
    <!-- CTA -->
    <Btn
      class="top-32"
      text="contattaci"
      :def="true"
      @click="show.modal = true"
    />
  </div>

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
//==============================
// Import
//==============================
import { reactive, ref } from "@vue/reactivity";
import Btn from "../components/Btn.vue";
import Modal from "../components/Modal.vue";
import ContactForm from "../components/ContactForm.vue";

//==============================
// Consts
//==============================
const show = reactive({
  modal: false,
})
</script>

<style lang="scss" scoped></style>
