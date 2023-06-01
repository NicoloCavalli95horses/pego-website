<template>
  <div class="grid" :class="{ mobile: device == 'mobile' }">
    <img :src="about_src" alt="chi siamo" />
    <div class="text-wrapper">
      <!-- <h4>Un'azienda a conduzione forem ipsum dolor sit.</h4> -->
      <p>
        Siamo un'azienda a conduzione familiare che da quasi vent'anni lavora
        nel campo degli impianti a pellet e legna come assistenza autorizzata.
        Siamo qualificati soprattutto nella <b>manutenzione</b> e
        <b>riparazione</b> di stufe e caminetti.
      </p>
      <br /><br />
      <p>
        I nostri punti di forza sono l'attenzione nei confronti del cliente e la
        conoscenza approfondita dei prodotti su cui lavoriamo, data dallo
        stretto rapporto con le aziende produttrici. Il nostro obiettivo è
        mantenere il tuo impianto efficiente negli anni: siamo convinti che una
        corretta gestione della tua stufa o caminetto possa garantirti il
        maggior grado di sicurezza, affidabilità e soddisfazione, oltre a
        <b>ridurre i consumi</b>. <br /><br />
        Siamo abilitati alla manutenzione degli apparecchi a biomassa secondo il
        <b>d.m. 37/2008</b> e in possesso di qualifica FER.
      </p>
    </div>
  </div>
</template>

<script setup>
//==============================
// Import
//==============================
import { getViewport } from "../utils/screen_size.js";

//==============================
// Consts
//==============================
const device = getViewport();
const about_src = "/img/about/img_1.jpeg";
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  gap: 4rem;
  margin: 0 auto;
  &.mobile {
    grid-template-columns: 1fr;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-height: 40rem;
    margin: 0 auto;
  }
  .text-wrapper {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
}
</style>
