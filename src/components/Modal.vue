<template>
  <div class="backdrop">
    <div class="modal" :style="{ width: `${width}px`, height: `${height}px` }">
      <!-- Header -->
      <header>
        <h2>{{ title }}</h2>
      </header>
      <!-- Body -->
      <div class="body">
        <slot />
      </div>
      <!-- Footer -->
      <footer>
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script setup>
// ==============================
// Props
// ==============================
const props = defineProps({
  title: String,
  width: Number,
  height: Number,
});
</script>

<style lang="scss" scoped>
.backdrop {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 400px;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    background-color: #222;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 22px 26px;
    gap: 22px;
    .body {
      display: flex;
      align-items: center;
      height: 100%;
    }

    footer {
      align-self: flex-end;
    }
  }
}
</style>
