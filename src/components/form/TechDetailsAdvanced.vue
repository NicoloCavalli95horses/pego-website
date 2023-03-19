<template>
  <form class="form" autocomplete="off">
    <InputText input_type="textarea" class="top-12" placeholder="Descrivi il problema qui"/>
  </form>
</template>

<script setup>
//==============================
// Import
//==============================
import InputText from "../InputText.vue";
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  margin: 5rem 0 0 0;
}
</style>
