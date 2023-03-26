<template>
  <form action="https://formsubmit.co/1384cf3d2204cf8365f1091212d3525e" method="POST" class="form" autocomplete="off">
    <InputText placeholder="Nome" :is_required="true" @update="val => name = val"/>
    <InputText placeholder="Cognome" :is_required="true" @update="val => surname = val" />
    <InputText placeholder="Email" />
    <InputText placeholder="Cellulare" input_type="tel" />
    <InputText placeholder="Messaggio" name="message" />

    <!-- IL FORM DEVE ESSERE TUTTO IN UNICO COMPONENTE, DIVISO IN SEZIONI CHE APPAIONO SOTTO CONDIZIONE-->


    <!-- input nascosto che invia a FormSubmit quello che è in chiave value come soggetto della email -->
    <input type="hidden" name="_subject" :value="name + ' ' + surname">

    <!-- Dove sarà rimandato l'utente -->
    <input type="hidden" name="_next" value="https://192.168.41.63:5173/">
  </form>
</template>

<script setup>
//==============================
// Import
//==============================
import { ref } from 'vue'
import InputText from '../InputText.vue'

const name = ref('');
const surname = ref('');

</script>

<style lang="scss" scoped>
 .form {
    display: flex;
    flex-direction: column;
    margin: 5rem 0 0 0;
 }
</style>
