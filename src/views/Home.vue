<template>
  <div class="w-100 h-100 flex-column">
    <h1>S.T.A. di Pegorer</h1>
    <h2 class="top-32 c-text">
      Professionisti nell'installazione e manutenzione <br />
      di impianti termotecnici
    </h2>
    <Btn class="top-32" text="contattaci" :def="true" @click="show.modal = true" />
  </div>

  <h1 class="bottom-12">Cosa facciamo</h1>
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

  <div class="separator" />
  
  <div class="flex-center flex-wrap">
    <Counter label="clienti fidelizzati" :value="86" :animation_time="5000" icon="fa-solid fa-users" />
    <Counter label="anni di esperienza" :value="getExpYear()" :animation_time="5000" icon="fa-solid fa-cake-candles" />
    <Counter label="provice operative" :value="4" :animation_time="5000" icon="fa-solid fa-map-location-dot" />
  </div>
  
  <div class="separator" />
  
  <h1 class="bottom-12">Chi siamo</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quasi quibusdam id nulla cum nemo dicta minima consectetur quia iusto qui dignissimos, similique pariatur quae necessitatibus perferendis ullam doloremque eveniet. At quo amet corrupti beatae, quis voluptatum asperiores quas, explicabo ipsam repudiandae, quibusdam unde officia perferendis.</p>
  <div class="w-100 flex-center top-24">
    <Btn text="about" :def="true"></Btn>
  </div>

  <div class="separator" />

  <h1 class="bottom-12">Domande frequenti</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quasi quibusdam id nulla cum nemo dicta minima consectetur quia iusto qui dignissimos, similique pariatur quae necessitatibus perferendis ullam doloremque eveniet. At quo amet corrupti beatae, quis voluptatum asperiores quas, explicabo ipsam repudiandae, quibusdam unde officia perferendis.</p>
  <div class="w-100 flex-center top-24">
    <Btn text="faq" :def="true"></Btn>
  </div>
  
  <div class="separator" />

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
import { reactive } from "@vue/reactivity";
import Btn from "../components/Btn.vue";
import Carousel from "../components/Carousel.vue";
import Counter from "../components/Counter.vue";
import Modal from "../components/Modal.vue";
import ContactForm from "../components/ContactForm.vue";
import { getViewport } from "../utils/screen_size.js"


//==============================
// Function
//==============================
function getExpYear(){
  const date = new Date();
  return date.getFullYear() - 2004;
}

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
    width: 20rem;
    height: 32rem;
  }
  h4 {
    margin: 0.5rem 0 1.5rem 0;
  }
 }
</style>
