<template>
  <div class="form">
    <InputText placeholder="Nome" />
    <InputText class="top-12" placeholder="Cognome" />
    <InputText class="top-12" placeholder="Email" />

    <InputText :textarea="true" class="top-12" placeholder="Descrivi il problema qui" />
  </div>
</template>

<script setup>
//==============================
// Import
//==============================
import InputText from './InputText.vue'

//==============================
// Consts
//==============================
</script>

<style lang="scss" scoped>
 .form {
  width: 100%;
  display: flex;
  flex-direction: column;
 }
</style>
