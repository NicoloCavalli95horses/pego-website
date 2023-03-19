<template>
  <!-- Hero section -->
  <div class="w-100 h-100 flex-column">
    <h1>S.T.A. di Pegorer</h1>
    <h2 class="top-32 c-text">Professionisti nell'installazione e manutenzione <br />di impianti termotecnici</h2>
    <!-- <SvgIcons><use href="#ink-blot" /></SvgIcons> -->
    <Btn class="top-32" text="contattaci" :def="true" @click="show.modal = true" />
  </div>

  <!-- What we do -->
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

  <!-- Counters -->
  <div class="flex-center flex-wrap">
    <Counter
      label="clienti fidelizzati"
      :value="86"
      :animation_time="5000"
      icon="fa-solid fa-users"
    />
    <Counter
      label="anni di esperienza"
      :value="new Date().getFullYear() - 2004"
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

  <!-- About section -->
  <h1 class="bottom-12">Chi siamo</h1>
  <About />

  <div class="separator" />

  <!-- FAQ section -->
  <FAQ />
  
  <div class="separator" />

  <!-- CTA -->
  <div class="w-100 flex-column">
    <Btn text="contattaci" :def="true" @click="show.modal = true" />
  </div>
  
  <div class="separator" />

  <!-- Contact modal -->
  <ContactModal v-if="show.modal" @close="show.modal = false" />
</template>

<script setup>
//==============================
// Import
//==============================
import { reactive } from "@vue/reactivity";
import { getViewport } from "../utils/screen_size.js";

import FAQ from "./FAQ.vue";
import About from "./About.vue";
import Btn from "../components/Btn.vue";
import Card from "../components/Card.vue";
import Counter from "../components/Counter.vue";
import Carousel from "../components/Carousel.vue";
import ContactModal from "../components/ContactModal.vue";

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
