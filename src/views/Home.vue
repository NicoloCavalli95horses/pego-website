<template>
  <div class="w-100 h-100 flex-column">
    <h1>S.T.A. di Pegorer</h1>
    <h2 class="top-32 c-text">
      Professionisti nell'installazione e manutenzione <br />
      di impianti termotecnici
    </h2>
    <Btn class="top-32" text="contattaci" :def="true" @click="show.modal = true" />
  </div>

  <Carousel class="bottom-24" :show_dots="device == 'desktop' || device == 'tablet'">
      <div class="card-wrapper">
        <div class="card"></div>
        <h4>Emergenze</h4>
      </div>
      <div class="card-wrapper">
        <div class="card"></div>
        <h4>Manuntenzione ordinaria</h4>
      </div>
      <div class="card-wrapper">
        <div class="card"></div>
        <h4>Ricambi autorizzati</h4>
      </div>
  </Carousel>

  <div class="separator"></div>
  
  <div :class="{ 'flex-center' : device == 'desktop' || device == 'tablet', 'flex-column' : device == 'mobile' }">
    <Counter label="clienti" value="30" :animation_time="5000" />
    <Counter label="anni di esperienza" value="20" :animation_time="5000" />
    <Counter label="provice operative" value="4" :animation_time="5000" />
  </div>
  
  <div class="separator"></div>
  
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
import Carousel from "../components/Carousel.vue";
import Counter from "../components/Counter.vue";
import Modal from "../components/Modal.vue";
import ContactForm from "../components/ContactForm.vue";
import { getViewport } from "../utils/screen_size.js"

//==============================
// Consts
//==============================
const device = getViewport();
const show = reactive({
  modal: false,
})
</script>

<style lang="scss" scoped>
 .card-wrapper {
  display: inline-block;
  margin: 0 0.8rem;
  .card {
    box-sizing: border-box;
    border: 2px solid white;
    border-radius: var(--radius-m);
    width: 32rem;
    height: 20rem;
  }
  h4 {
    margin: 0.5rem 0 1.5rem 0;
  }
 }
</style>
