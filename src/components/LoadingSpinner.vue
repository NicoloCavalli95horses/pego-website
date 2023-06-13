<template>
  <div class="abs-center">
    <div class="wrapper">
      <h2>Loading</h2>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrapper {
 display: flex;
 align-items: baseline;
  .dot {
    width: 2px;
    height: 2px;
    border-radius: 50%;
    border: 2px solid var(--secondary);
    margin: 2px;
    &:first-of-type {
      margin-left: 8px;
      animation: infinite 500ms loading 0ms;
    }
    &:nth-of-type(2) {
      animation: infinite 500ms loading 200ms;
    }
    &:nth-of-type(3) {
      animation: infinite 500ms loading 400ms;
    }
  }
}

@keyframes loading {
  0% {
    background-color: transparent;
  }  
  100% {
    background-color: var(--secondary);
  }
}
</style>