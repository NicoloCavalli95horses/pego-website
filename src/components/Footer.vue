<template>
  <footer>
    <div class="text-wrapper">
      <h4>Pegorer S.T.A.</h4>
      <h5 class="top-12">
        Professionisti nell'installazione e manutenzione di impianti termotecnici
      </h5>
      <div class="top-12">
        <div class="partners-wrapper">
          <img class="partner-img" :src=palazzetti_img />
          <img class="partner-img" :src="mcz_img" />
        </div>
      </div>
      <div class="top-12">
        <div class="contacts-wrapper">
          <h6>+346 xxx xxxx</h6>
          <h6>pegorersta@gmail.com</h6>
          <h6>P. IVA xxx xxx xxxx xxx</h6>
          <h6>Carbonera, TV (31030)</h6>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { defineAsyncComponent } from "vue";
import Chip from "./Chip.vue";

//==============================
// Const
//==============================
const palazzetti_img = 'icons/palazzetti.jpg';
const mcz_img = 'icons/mcz.png';
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--apple-blossom);
  .text-wrapper {
    padding: 4rem;
    max-width: 300px;
    text-align: center;
  }

  .partners-wrapper {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .partner-img {
      width: 100px;
      height: 60px;
      margin: 0.5rem;
      opacity: 90%;
    }
  }
  .contacts-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
