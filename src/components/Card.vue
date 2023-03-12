<template>
  <div class="card">
    <img :src="img_src" :alt="title" />
    <div class="text-wrapper">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
// ==============================
// Props
// ==============================
const props = defineProps({
  title: String,
  description: String,
  img_src: String,
});
</script>

<style lang="scss" scoped>
.card {
  display: inline-block;
  width: 25rem;
  overflow: hidden;
  margin: 0 0.8rem;
  background-color: var(--karry);
  border-radius: var(--radius-l);
  img {
    width: 100%;
  }
  .text-wrapper {
    margin: 1.5rem;
    height: 15rem;
    white-space: normal;
    h4, p {
      padding: 1rem 0;
      color: var(--font-dark);
    }
    h4 {
      border-bottom: 1px solid var(--font-dark);
    }
  }
}
</style>
