<template>
  <form class="form" autocomplete="off">
    <InputText placeholder="Nome" :is_required="true" />
    <InputText placeholder="Cognome" :is_required="true" />
    <InputText placeholder="Email" />
    <InputText placeholder="Cellulare" input_type="tel" />
  </form>
</template>

<script setup>
//==============================
// Import
//==============================
import InputText from '../InputText.vue'

</script>

<style lang="scss" scoped>
 .form {
    display: flex;
    flex-direction: column;
    margin: 5rem 0 0 0;
 }
</style>
