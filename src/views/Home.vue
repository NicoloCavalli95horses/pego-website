<template>
  <!-- Hero section -->
  <div class="w-100 h-100 flex-column">
    <h1 class="spacing">S.T.A. di Pegorer</h1>
    <h2 class="top-32 c-text" :class="{'spacing' : device != 'mobile' }">Manutenzione e assistenza tecnica autorizzata <br />per impianti a biomassa</h2>
    <Btn class="top-32" text="contattaci" :def="true" @click="$router.push('/contact')" />
  </div>

  <!-- What we do -->
  <h3 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']">Cosa offriamo</h3>
  <What />

  <div class="separator" />

  <!-- Counters -->
  <div class="flex-center flex-wrap">
    <Counter
      label="clienti fidelizzati"
      :value="2000"
      :plus="true"
      :animation_time="3000"
      :multiplier="4"
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
      :value="config.cities.length"
      :animation_time="3000"
      icon="fa-solid fa-map-location-dot"
    />
  </div>

  <div class="separator" />

  <!-- About section -->
  <h3 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']" id="about">Chi siamo</h3>
  <About />
  
  <div class="separator" />
  
  <!-- Partner section -->
  <h3 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']" id="partners">Partners</h3>
  <Partners />
  
  <div class="separator" />
  
  <!-- Where section -->
  <h3 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']" id="where">Dove operiamo</h3>
  <Where />

  <div class="separator" />

  <!-- FAQ section -->
  <div id="faq">
    <h3 v-if="device != 'mobile'" class="bottom-12">Domande frequenti (FAQ)</h3>
    <h3 v-else class="bottom-36">Domande frequenti</h3>
  </div>
  <FAQ />
  
  <div class="separator" />
  
  <!-- Go back on top button -->
  <OnTopBtn />
</template>

<script setup>
//==============================
// Import
//==============================
import { getViewport } from "../utils/screen_size.js";
import { config } from "../utils/config.js";

import FAQ from "./FAQ.vue";
import About from "./About.vue";
import What from "./What.vue";
import Where from "./Where.vue";
import Partners from "./Partners.vue";
import Btn from "../components/Btn.vue";
import OnTopBtn from "../components/OnTopBtn.vue";
import Counter from "../components/Counter.vue";

//==============================
// Consts
//==============================
const device = getViewport();

</script>

<style lang="scss" scoped>
</style>
