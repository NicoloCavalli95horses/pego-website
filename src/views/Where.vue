<template>
   <template v-if="device != 'mobile'">
     <div class="wrapper">
         <div class="text-wrapper">
           <h3>Raggiungiamo la maggior parte dei comuni in provincia di Treviso, e alcuni in provincia di Venezia</h3>
           <div class="w-100 top-32">
               <Btn class="c-margin" text="scopri tutti i comuni" :def="true" />
           </div> 
         </div>
         <iframe
           :src="iframe.src"
           width="50%"
           height="400"
           style="border:0;"
           allowfullscreen=""
           loading="lazy"
           referrerpolicy="no-referrer-when-downgrade"
         />
     </div>
   </template>
</template>

<script setup>
//==============================
// Import
//==============================
import { reactive } from "vue";
import { getViewport } from "../utils/screen_size.js";
import Btn from '../components/Btn.vue';

//==============================
// Consts
//==============================
const device = getViewport();
const iframe = reactive({
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d355998.234002185!2d12.2138719!3d45.80652769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47793e99135113bd%3A0x307098715907f00!2sProvincia%20di%20Treviso!5e0!3m2!1sit!2sit!4v1679677465768!5m2!1sit!2sit'
})

</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    .text-wrapper {
      width: calc(50% - 2.2rem);
      margin-right: 4.4rem;
      h3 {
        padding-bottom: 2.2rem;
        border-bottom: 1px solid var(--font-light);
      }
    }
}
</style>
