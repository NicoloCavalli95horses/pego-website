<template>
  <footer>
    <template v-if="device != 'mobile'">
      <div class="flex">
        <div class="col r-24">
          <h3>S.T.A. di Pegorer</h3>
          <h5 class="top-12">
            Manutenzione e assistenza tecnica autorizzata <br />
            per impianti a biomassa
          </h5>
          <Btn
            class="top-24"
            text="contattaci"
            :def="true"
            @click="$router.push('/contact')"
          />
        </div>

        <div class="col">
          <h4>Contatti</h4>
          <div class="contacts-wrapper">
            <div>
              <Icon icon="fa-solid fa-phone" class="svg-18" />
              <h6>+346 xxx xxxx</h6>
            </div>
            <div>
              <Icon icon="fa-solid fa-envelope" class="svg-18" />
              <h6>pegorersta@gmail.com</h6>
            </div>
            <div>
              <Icon icon="fa-solid fa-money-check" class="svg-18" />
              <h6>P. IVA xxx xxx xxxx xxx</h6>
            </div>
            <div>
              <Icon icon="fa-solid fa-location-dot" class="svg-18" />
              <h6>Carbonera, TV (31030)</h6>
            </div>
          </div>

          <h4 class="top-24">Partner</h4>
          <Carousel>
            <template v-for="(b, i) in config.brand" :key="i">
              <a :href="b.url" class="brand">
                <img v-if="b.src" :src="b.src" :alt="b.name" />
                <span v-else>{{ b.name }}</span>
              </a>
            </template>
          </Carousel>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="mobile">
        <div class="separator" />
        <h3>S.T.A. di Pegorer</h3>
        <h5 class="top-12">
          Manutenzione e assistenza <br />
          tecnica autorizzata <br />
          per impianti a biomassa
        </h5>
        <Btn
          class="btn"
          text="contattaci"
          :def="true"
          @click="$router.push('/contact')"
        />

        <div class="top-32">
          <h4 class="l-text">Partner</h4>
          <Carousel>
            <template v-for="(b, i) in config.brand" :key="i">
              <a :href="b.url" class="brand">
                <img v-if="b.src" :src="b.src" :alt="b.name" />
                <span v-else>{{ b.name }}</span>
              </a>
            </template>
          </Carousel>
        </div>

        <div class="contacts-wrapper top-32">
          <h4 class="l-text">Contatti</h4>
          <div class="flex-center start bottom-6">
            <Icon icon="fa-solid fa-phone" class="svg-18 r-12" />
            <h6>+346 xxx xxxx</h6>
          </div>
          <div class="flex-center start bottom-6">
            <Icon icon="fa-solid fa-envelope" class="svg-18 r-12" />
            <h6>pegorersta@gmail.com</h6>
          </div>
          <div class="flex-center start bottom-6">
            <Icon icon="fa-solid fa-money-check" class="svg-18 r-12" />
            <h6>P. IVA xxx xxx xxxx xxx</h6>
          </div>
          <div class="flex-center start">
            <Icon icon="fa-solid fa-location-dot" class="svg-18 r-12" />
            <h6>Carbonera, TV (31030)</h6>
          </div>
        </div>
      </div>
    </template>
    <div class="sign">Nicolò Cavalli &copy; ({{ new Date().getFullYear() }})</div>
  </footer>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { config } from "../utils/config.js";
import { getViewport } from "../utils/screen_size";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Btn from "./Btn.vue";
import Carousel from "./Carousel.vue";

// ==============================
// Consts
// ==============================
library.add( fas );
const device = getViewport();
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--footer-bg);
  box-shadow: var(--box-shadow-footer);
  padding: 0 2.3rem;
  .flex {
    height: 50rem;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .col {
      max-width: 50%;
      height: 30rem;
    }
    .partners-wrapper {
      height: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .partner-img {
        width: 100px;
        height: 60px;
        opacity: 90%;
      }
    }
    .contacts-wrapper {
      display: flex;
      flex-direction: column;
      margin: 0.5rem 0 1.5rem 0;
      div {
        display: flex;
        margin: 0.2rem 0;
        svg {
          margin-right: 1rem;
        }
      }
    }
  }
}
.mobile {
  width: 100%;
  height: 70rem;
  margin: 0 auto;
  text-align: center;
  .btn {
    margin: 1.5rem auto;
  }
}

h3 {
  font-size: 3rem;
}
h4 {
  width: 100%;
  margin: 0 0 1.2rem 0;
  color: var(--secondary);
}

.brand {
  display: inline-block;
  width: 10rem;
  height: 10rem;
  border-radius: var(--radius-s);
  border: 0.1rem solid var(--font-light);
  background-color: white;
  margin: 0.5rem;
  box-sizing: border-box;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  span {
    color: var(--font-dark);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    display: grid;
    place-content: center;
    height: 100%;
    font-size: 0.8rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.sign {
  width: 100%;
  text-align: center;
  padding: 0 0 10rem 0;
  font-size: 0.8rem;
  color: var(--font-light);
  font-family: monospace;
}
</style>
