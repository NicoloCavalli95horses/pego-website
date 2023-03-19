<template>
  <!-- Hero section -->
  <div class="w-100 h-100 flex-column">
    <h1>S.T.A. di Pegorer</h1>
    <h2 class="top-32 c-text">Professionisti nell'installazione e manutenzione <br />di impianti termotecnici</h2>
    <!-- <SvgIcons><use href="#ink-blot" /></SvgIcons> -->
    <Btn class="top-32" text="contattaci" :def="true" @click="show.modal = true" />
  </div>

  <!-- What we do -->
  <h1 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']">Cosa offriamo</h1>
  <WhatWeDo />

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
  <h1 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']">Chi siamo</h1>
  <About />
  
  <div class="separator" />
  
  <!-- FAQ section -->
  <h1 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']">Domande frequenti</h1>
  <FAQ />
  
  <div class="separator" />

  <!-- CTA -->
  <div class="w-100 flex-column">
    <Btn text="contattaci" :def="true" @click="show.modal = true" />
  </div>
  
  <div class="separator" />

  <!-- Contact modal -->
  <ContactModal v-if="show.modal" @closed="show.modal = false" />
</template>

<script setup>
//==============================
// Import
//==============================
import { reactive } from "@vue/reactivity";
import { getViewport } from "../utils/screen_size.js";

import FAQ from "./FAQ.vue";
import About from "./About.vue";
import WhatWeDo from "./WhatWeDo.vue";
import Btn from "../components/Btn.vue";
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
// svg#ink-blot {
//   position: absolute;
//   max-width: 650px;
//   max-height: 650px;
//   min-width: 300px;
//   min-height: 300px;
//   z-index: -1;
//   fill: #222;
//   opacity: 50%;
// }
</style>
