<template>
  <!-- Hero section -->
  <div class="w-100 h-100 flex-column">
    <h1 class="spacing c-text">S.T.A. di Pegorer</h1>
    <h2 class="top-32 c-text" :class="{'spacing' : device != 'mobile' }">
      Manutenzione e assistenza tecnica autorizzata <br />per impianti a biomassa
    </h2>
    <Btn class="top-32" text="contattaci" :def="true" @click="$router.push('/contact')" />
  </div>

  <!-- What we do -->
  <h3 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']">Cosa offriamo</h3>
  <Carousel :show_dots="device !== 'mobile'">
    <Card
      v-for="card in config.cards"
      :key="card.title"
      :title="card.title"
      :description="card.description"
      :img_src="card.src"
    />
  </Carousel>

  <div class="separator" />

  <!-- Counters -->
  <div class="flex-center flex-wrap">
    <Counter
      v-for="(counter, i) in config.counters"
      :key="i"
      :label="counter.label"
      :value="counter.value"
      :plus="counter.plus"
      :animation_time="counter.animation_time"
      :multiplier="counter.multiplier"
      :icon="counter.icon"
    />
  </div>

  <div class="separator" />

  <!-- About section -->
  <h3 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']" id="about">Chi siamo</h3>
  <About />
  
  <div class="separator" />
  
  <!-- Partner section -->
  <h3 :class="[ device == 'mobile' ? 'bottom-12' : 'bottom-36']" id="partners">Partners</h3>
  <Partners :items="config.brand" />
  
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
  <Accordion :items="config.faq" />
  
  <div class="separator" />

  <!-- Cookies banner -->
  <CookiesBanner v-if="!hide_cookies" @close="hide_cookies = true" />
  
  <!-- Go back on top button -->
  <OnTopBtn />
</template>

<script setup>
//==============================
// Import
//==============================
import { ref } from "vue";
import { config } from "../utils/config.js";
import { getViewport } from "../utils/screen_size.js";

import About from "./About.vue";
import Where from "./Where.vue";
import Partners from "./Partners.vue";
import Btn from "../components/Btn.vue";
import Card from "../components/Card.vue";
import Counter from "../components/Counter.vue";
import OnTopBtn from "../components/OnTopBtn.vue";
import Carousel from "../components/Carousel.vue";
import Accordion from "../components/Accordion.vue";
import CookiesBanner from "../components/CookiesBanner.vue";


//==============================
// Consts
//==============================
const device = getViewport();
const hide_cookies = ref( false );

</script>

<style lang="scss" scoped>
</style>
