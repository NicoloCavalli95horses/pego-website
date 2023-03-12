<template>
  <div class="w-100 h-100 flex-column">
    <h1>S.T.A. di Pegorer</h1>
    <h2 class="top-32 c-text">Professionisti nell'installazione e manutenzione <br />di impianti termotecnici</h2>
    <SvgIcons><use href="#ink-blot" /></SvgIcons>
    <Btn class="top-32" text="contattaci" :def="true" @click="show.modal = true" />
  </div>

  <h1 class="bottom-12">Cosa offriamo</h1>
  <Carousel :show_dots="device !== 'mobile'">
    <Card 
      title="Manutenzione ordinaria"
      description="Su marchi Palazzetti, Royal, Cola, Last Calor, Star Calor, L'Artistico"
      img_src="/img/about.jpg"
    />
    <Card
      title="Assistenza tecnica e consulenza professionale"
      description="Aumentare l'efficienza e la sicurezza dell'impianto tramite regolare controllo e pulizia."
      img_src="/img/about.jpg"
    />
    <Card
      title="Rilascio libretto impianti"
      description="Previo possesso della certificazione della canna fumaria, dell'impianto elettrico e dell'installazione."
      img_src="/img/about.jpg"
    />
    <Card
      title="Contratti di manutenzione"
      description="Sconto del 10% sui pezzi di ricambistica"
      img_src="/img/about.jpg"
    />
  </Carousel>

  <div class="separator" />

  <div class="flex-center flex-wrap">
    <Counter
      label="clienti fidelizzati"
      :value="86"
      :animation_time="5000"
      icon="fa-solid fa-users"
    />
    <Counter
      label="anni di esperienza"
      :value="getExpYear()"
      :animation_time="5000"
      icon="fa-solid fa-cake-candles"
    />
    <Counter
      label="provice operative"
      :value="4"
      :animation_time="5000"
      icon="fa-solid fa-map-location-dot"
    />
  </div>

  <div class="separator" />

  <h1 class="bottom-12">Chi siamo</h1>
  <About />

  <div class="separator" />

  <FAQ />

  <div class="separator" />

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

<script setup>
//==============================
// Import
//==============================
import { reactive } from "@vue/reactivity";
import Btn from "../components/Btn.vue";
import Carousel from "../components/Carousel.vue";
import Counter from "../components/Counter.vue";
import Modal from "../components/Modal.vue";
import Card from "../components/Card.vue";
import ContactForm from "../components/ContactForm.vue";
import FAQ from "./FAQ.vue";
import About from "./About.vue";
import { getViewport } from "../utils/screen_size.js";

//==============================
// Function
//==============================
function getExpYear() {
  const date = new Date();
  return date.getFullYear() - 2004;
}

//==============================
// Consts
//==============================
const device = getViewport();
const show = reactive({
  modal: false,
});
</script>

<style lang="scss" scoped>
svg#ink-blot {
  position: absolute;
  max-width: 650px;
  max-height: 650px;
  min-width: 300px;
  min-height: 300px;
  z-index: -1;
  fill: #222;
  opacity: 50%;
}
</style>
