<template>
  <form class="form">
    <InputText ref="first_input_ref" placeholder="Nome" />
    <InputText class="top-12" placeholder="Cognome" />
    <InputText class="top-12" placeholder="Email" />
    <InputText :textarea="true" class="top-12" placeholder="Descrivi il problema qui" />
    </form>
</template>

<script setup>
//==============================
// Import
//==============================
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
import InputText from './InputText.vue'

//==============================
// Consts
//==============================
const first_input_ref = ref(undefined);

</script>

<style lang="scss" scoped>
 .form {
    width: 100%;
    display: flex;
    flex-direction: column;
 }
</style>
