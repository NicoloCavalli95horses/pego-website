<template>
  <div class="banner-wrapper">
    <div class="title">
      <h4>Cookies</h4>
      <Icon icon="fa-solid fa-cookie" />
    </div>
    <div class="content">
      <p>Questo sito web non fa utilizzo di cookies di profilazione o di terze parti. Alcuni cookies tecnici sono dovuti all'incorporazione di mappe Google Maps. Non trattenendo alcuna informazione non è richiesto di esprimere alcun consenso.
        <a @click="show_more = !show_more">Clicca qui per saperne di più.</a>
      </p>
      <p v-if="show_more" class="top-12 bottom-12">
        I cookies salvati da un sito web devono essere trasparenti all'utente <a href="https://www.garanteprivacy.it/faq/cookie">per legge</a>.
        Ad esempio, se utilizzi il browser Google Chrome, puoi cliccare il tasto destro del mouse, selezionare 'ispeziona', e navigare nella sezione 'application' della finestra degli strumenti di sviluppo per visualizzare i cookies salvati.
      </p>
      <Btn class="top-12" :def="true" text="chiudi" @click="onClick" />
    </div>
  </div> 
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref, onMounted } from 'vue';
import Btn from './Btn.vue';

// ==============================
// Const
// ==============================
const emit = defineEmits(['close']);

const show_more = ref( false );

// ==============================
// Function
// ==============================
function onClick() {
  document.cookie = "show_banner=false";
  emit('close');
}

//==============================
// Life cycle
//==============================
onMounted(() => {
  if ( document.cookie ) {
    emit('close');
  }
})


</script>

<style lang="scss" scoped>
 .banner-wrapper {
  position: fixed;
  bottom: 1.2rem;
  left: 50%;
  width: calc( 100% - 4.4rem);
  max-width: 90rem;
  transform: translate(-50%, 0);
  border-radius: var(--radius-s);
  background-color: var(--footer-bg);
  padding: 1.2rem;
  z-index: 3;
  .title {
    display: flex;
    align-items: center;
    svg {
      width: 2.2rem;
      font-size: 2.2rem;
      margin-left: 1.2rem;
    }
  }
  .content {
    margin-top: 1.1rem;
    a {
      color: var(--primary);
      cursor: pointer;
    }
  }
 }
</style>