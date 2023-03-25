<template>
  <!-- Hero section -->
  <div class="w-100 h-100 flex-column">
    <h1 class="spacing">S.T.A. di Pegorer</h1>
    <h2 class="top-32 c-text" :class="{'spacing' : device != 'mobile' }">Manutenzione e assistenza tecnica autorizzata <br />per impianti a biomassa</h2>
    <Btn class="top-32" text="contattaci" :def="true" @click="show.modal = true" />
  </div>

  <!-- What we do -->
  <h1 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']">Cosa offriamo</h1>
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
      :value="150"
      :animation_time="3000"
      icon="fa-solid fa-map-location-dot"
    />
  </div>

  <div class="separator" />

  <!-- About section -->
  <h1 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']" id="about">Chi siamo</h1>
  <About />
  
  <div class="separator" />
  
  <!-- FAQ section -->
  <h1 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']" id="faq">Domande frequenti (FAQ)</h1>
  <FAQ />
  
  <div class="separator" />

  <!-- Where section -->
  <h1 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']">Dove operiamo</h1>
  <Where />

  <div class="separator" />
  <div class="separator" />
  
  <!-- <h1 class="bottom-24">Hai bisogno di noi?</h1> -->
  <!-- CTA -->
  <!-- <div class="w-100 flex-column"> -->
    <!-- <Btn text="contattaci" :def="true" @click="show.modal = true" /> -->
  <!-- </div> -->
  
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
