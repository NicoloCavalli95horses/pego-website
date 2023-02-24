<template>
  <footer>
    <div class="wrapper">
      <h4>Pegorer Srl</h4>
      <h6 class="top-12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quia
        similique minima eveniet et officia animi, natus illo at
      </h6>
      <div class="top-12">
        <div class="chip-wrapper">
          <Chip>
            <template #default>
              <h6>+346 xxx xxxx</h6>
            </template>
          </Chip>
          <Chip>
            <template #default>
              <h6>P.IVA xxx xxxx xxx</h6>
            </template>
          </Chip>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// ==============================
// Import
// ==============================
import Chip from "./Chip.vue";

//==============================
// Const
//==============================
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  .wrapper {
    padding: 3rem;
    max-width: 300px;
    text-align: center;
  }

  .chip-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }
}
</style>
