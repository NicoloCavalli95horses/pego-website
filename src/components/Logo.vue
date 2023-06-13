<template>
  <div class="logo" @click="$router.push('/')">
    <h4>S.T.A. di Pegorer</h4>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.logo {
  width: max-content;
  display: grid;
  place-content: center;
  user-select: none;
}
</style>