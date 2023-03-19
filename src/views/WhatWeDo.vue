<template>
  <Carousel :show_dots="device !== 'mobile'">
    <template v-for="card in cards" :key="card.title">
      <Card :title="card.title" :description="card.description" :img_src="card.img_src" />
    </template>
  </Carousel>
</template>

<script setup>
//==============================
// Import
//==============================
import { getViewport } from "../utils/screen_size.js";
import Carousel from "../components/Carousel.vue";
import Card from "../components/Card.vue";

//==============================
// Consts
//==============================
const device = getViewport();
const cards = [
  { 
    title: "Manutenzione ordinaria",
    description: "Su marchi Palazzetti, Royal, Cola, Last Calor, Star Calor, L'Artistico",
    img_src: "/img/about.jpg"
  },
  {
    title: "Assistenza tecnica e consulenza professionale",
    description: "Aumentare l'efficienza e la sicurezza dell'impianto tramite regolare controllo e pulizia.",
    img_src: "/img/about.jpg"
  },
  {
   title: "Rilascio libretto impianti",
   description: "Previo possesso della certificazione della canna fumaria, dell'impianto elettrico e dell'installazione.",
   img_src: "/img/about.jpg"
  },
  {
    title: "Contratti di manutenzione",
    description: "Sconto del 10% sui pezzi di ricambistica",
    img_src: "/img/about.jpg"
  },
]
</script>

<style lang="scss" scoped></style>
