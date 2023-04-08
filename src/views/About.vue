<template>
  <template v-if="device == 'desktop'">
    <div class="wrapper desktop">
      <div class="img-wrapper">
        <img src="/img/about.jpg" alt="repairs" />
      </div>
      <div class="text-wrapper">
        <h4>Un'attività a gestione familiare che ha a cuore il cliente.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo
          rerum numquam deserunt dolor optio odio nesciunt necessitatibus hic
          unde? Dolores ipsam blanditiis magni laborum facere error non debitis
          ducimus! Ad veritatis aperiam magnam suscipit.
        </p>
        <br><br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo
          rerum numquam deserunt dolor optio odio nesciunt necessitatibus hic
          unde? Dolores ipsam blanditiis magni laborum facere error non debitis
          ducimus! Ad veritatis aperiam magnam suscipit.
        </p>
      </div>
    </div>
  </template>

  <template v-else>
    <div class="wrapper mobile">
      <img src="/img/about.jpg" alt="repairs" />
      <div class="text-wrapper">
        <h4>Lorem ipsum dolor sit</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo
          rerum numquam deserunt dolor optio odio nesciunt necessitatibus hic
          unde? Dolores ipsam blanditiis magni laborum facere error non debitis
          ducimus! Ad veritatis aperiam magnam suscipit.
        </p>
      </div>
    </div>
  </template>
</template>

<script setup>
//==============================
// Import
//==============================
import { getViewport } from "../utils/screen_size.js";

//==============================
// Consts
//==============================
const device = getViewport();
</script>

<style lang="scss" scoped>
.responsive-text {
  max-width: 50%;
  min-height: 100%;
  margin: 0 0 0 5rem;
}

.wrapper {
  &.desktop {
    width: 100%;
    display: flex;
    .img-wrapper {
      width: 50%;
      img {
        width: 100%;
        max-width: 500px;
        height: auto;
      }
    }
    .text-wrapper {
      width: calc(50% - 2.2rem);
      margin-left: 2.2rem;
      h4 {
        margin-bottom: 2.2rem;
        padding-bottom: 1.4rem;
      }
    }
  }
  &.mobile {
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      max-width: 500px;
      height: auto;
    }
    .text-wrapper {
      h4 {
        padding: 2.2rem 0;
      }
    }
  }
}
</style>
