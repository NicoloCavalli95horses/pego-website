<template>
  <div class="card">
    <img :src="img_src" />
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
  margin: 0 0.8rem;
  box-sizing: border-box;
  background-color: var(--karry);
  border-radius: var(--radius-l);
  img {
    width: 100%;
    border-radius: var(--radius-l) var(--radius-l) 0 0;
  }
  .text-wrapper {
    display: flex;
    flex-direction: column;
    height: 20rem;
    h4, p {
      padding: 16px;
      color: var(--font-dark);
      white-space: normal;
    }
  }
}
</style>
