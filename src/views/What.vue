<template>
  <Carousel :show_dots="device !== 'mobile'">
    <template v-for="(card, i) in cards" :key="card.title">
      <Card :title="card.title" :description="card.description" :img_src="`/img/cards/img_${i+1}.jpeg`" />
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
    title: "Manutenzione straordinaria",
    description: "Su stufe a pellet Palazzetti, MCZ, Cadel, Anselmo Cola, Last Calor, Royal, Freepoint, Termovana, Red, Brisach. Una regolare manutenzione garantisce la sicurezza e diminuisce i consumi.",
  },
  {
    title: "Assistenza tecnica autorizzata",
    description: "Nelle riparazioni utilizziamo ricambi originali e offriamo la garanzia prevista dalla legislazione vigente.",
  },
  {
   title: "Rilascio libretto impianti",
   description: "Se ne sei sprovvisto, chiedici informazioni. Possiamo inserire e gestire il tuo libretto impianto nel catasto C.I.R.C.E.",
  },
  {
    title: "Prove di ventilazione",
    description: "La prova di ventilazione certifica che gli ambienti di installazione non superino la soglia di 4 Pascal di pressione negativa, laddove non è possibile effettuare un foro di aerazione permanente secondo la norma tecnica vigente.",
  },
]
</script>

<style lang="scss" scoped></style>
