<template>
  <form class="form">
    <DropDown title="Seleziona marchio" :is_required="true" :options="options" />
    <InputText input_type="textarea" placeholder="Descrivi il problema qui"/>
  </form>
</template>

<script setup>
//==============================
// Import
//==============================
import InputText from "../InputText.vue";
import DropDown from "../DropDown.vue";

//==============================
// Consts
//==============================
const options = [ 'Opzione 1', 'Opzione 2', 'Opzione 3' ];

</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  margin: 5rem 0 0 0;
}
</style>
