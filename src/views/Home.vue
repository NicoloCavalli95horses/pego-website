<template>
  <!-- <Icon icon="fa-solid fa-left-long" /> -->
  <h1>Homepage</h1>
  <div style="height: 800px;"></div>
</template>

<script setup>
//==============================
// Import
//==============================
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRightLong,
  faLeftLong,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

//==============================
// Consts
//==============================
library.add(faRightLong, faLeftLong, faMusic);
</script>

<style lang="scss" scoped>
</style>