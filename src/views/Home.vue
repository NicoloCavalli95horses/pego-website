<template>
  <!-- Hero section -->
  <div class="w-100 h-100 flex-column">
    <h1 class="spacing">S.T.A. di Pegorer</h1>
    <h2 class="top-32 c-text" :class="{'spacing' : device != 'mobile' }">Manutenzione e assistenza tecnica autorizzata <br />per impianti a biomassa</h2>
    <Btn class="top-32" text="contattaci" :def="true" @click="show.modal = true" />
  </div>

  <!-- What we do -->
  <h3 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']">Cosa offriamo</h3>
  <What />

  <div class="separator" />

  <!-- Counters -->
  <div class="flex-center flex-wrap">
    <Counter
      label="clienti fidelizzati"
      :value="86"
      :animation_time="3000"
      icon="fa-solid fa-users"
    />
    <Counter
      label="anni di esperienza"
      :value="new Date().getFullYear() - 2004"
      :animation_time="3000"
      icon="fa-solid fa-cake-candles"
    />
    <Counter
      label="comuni coperti"
      :value="96"
      :animation_time="3000"
      icon="fa-solid fa-map-location-dot"
    />
  </div>

  <div class="separator" />

  <!-- About section -->
  <h3 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']" id="about">Chi siamo</h3>
  <About />
  
  <div class="separator" />
  
  <!-- Where section -->
  <h3 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']">Dove operiamo</h3>
  <Where />

  <div class="separator" />

    <!-- FAQ section -->
  <h3 v-if="device != 'mobile'" class="bottom-12" id="faq">Domande frequenti (FAQ)</h3>
  <h3 v-else class="bottom-36">Domande frequenti</h3>
  <FAQ />
  
  <div class="separator" />
  
  <h3 class="bottom-24">Possiamo aiutarti?</h3>
  <h4>La manutenzione è obbligatoria per legge e aumenta l'efficienza dell'impianto, migliorandone la resa e riducendone i consumi.</h4>
  <div class="w-100 flex-column top-24">
    <Btn text="contattaci" :def="true" @click="show.modal = true" />
  </div>
  
  <div class="separator" />

  <!-- Contact modal -->
  <ContactModal v-if="show.modal" @closed="show.modal = false" />

  <!-- Go back on top button -->
  <OnTopBtn />
</template>

<script setup>
//==============================
// Import
//==============================
import { reactive } from "@vue/reactivity";
import { getViewport } from "../utils/screen_size.js";

import FAQ from "./FAQ.vue";
import About from "./About.vue";
import What from "./What.vue";
import Where from "./Where.vue";
import Btn from "../components/Btn.vue";
import OnTopBtn from "../components/OnTopBtn.vue";
import Counter from "../components/Counter.vue";
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
</style>
