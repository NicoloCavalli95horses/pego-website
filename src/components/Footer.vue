<template>
  <footer>
    <div class="text-wrapper">
      <h4>Pegorer S.T.A.</h4>
      <h5 class="top-12">
        Professionisti nell'installazione e manutenzione di impianti termotecnici
      </h5>
      <div class="top-12">
        <div class="partners-wrapper">
          <div class="partner-img" :style="{ 'background-image' :  `url('icons/palazzetti.jpg')` }" />
          <div class="partner-img" :style="{ 'background-image' :  `url('icons/mcz.png')` }" />
          <!-- <div class="partner-img"></div> -->
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
import Chip from "./Chip.vue";

//==============================
// Const
//==============================
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
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
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
