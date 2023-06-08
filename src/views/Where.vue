<template>
  <div class="grid" :class="{ 'mobile' : device == 'mobile' }"> 
    <div class="btn-wrapper">
      <h4 class="bottom-36">
        Raggiungiamo tutti i comuni in provincia di Treviso, e alcuni comuni in provincia di Venezia.
      </h4>
      <Btn class="c-margin top-32" text="scopri tutti i comuni" :def="true" @click="show.modal = true" />
    </div>
    
    <div class="map-wrapper">
      <div v-if="!show.iframe" class="placeholder-map">
        <LoadingSpinner />
      </div>
      <iframe
        :src="iframe.src"
        width="100%"
        height="500"
        style="border: 0; margin-top: -100px"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        @load="show.iframe = true"
      />
    </div>
  </div>

  <Modal
    v-if="show.modal"
    title="Copertura dei comuni"
    :max_width="device != 'mobile' ? '70%' : undefined"
    :min_width="device != 'mobile' ? '40rem' : undefined"
    :min_height="device != 'mobile' ? '40rem' : undefined"
    :max_height="device != 'mobile' ? '65rem' : undefined"
    :full_size="device == 'mobile'"
    :click_out_close="true"
    @closed="show.modal = false"
  >
    <div class="flex-column w-100">
      <InputText class="input" placeholder="Il mio comune" v-model="filter" />
      <div class="city-list top-12" :class="{ 'mobile' : device == 'mobile' }">
        <template v-if="filteredCities.length">
          <div v-for="(city, i) in filteredCities" :key="i" class="city">
            <p>{{ city }}</p>
          </div>
        </template>
        <p v-else> Ci dispiace, ma attualmente non raggiungiamo questo comune.</p>
      </div>
    </div>
    
    <div v-if="device == 'mobile'" class="flex-center end top-24">
      <Btn :def="true" text="chiudi" @click="() => { show.modal = false; filter = ''; }" />
    </div>

    <template v-if="device != 'mobile'" #footer>
      <Btn :def="true" text="chiudi" @click="() => { show.modal = false; filter = ''; }" />
    </template>
  </Modal>
</template>

<script setup>
//==============================
// Import
//==============================
import { reactive, ref, computed } from "vue";
import { getViewport } from "../utils/screen_size.js";
import { config } from "../utils/config.js";

import Btn from "../components/Btn.vue";
import Modal from "../components/Modal.vue";
import InputText from "../components/InputText.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

//==============================
// Consts
//==============================
const device = getViewport();
const filter = ref("");
const iframe = reactive({
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d355998.234002185!2d12.2138719!3d45.80652769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47793e99135113bd%3A0x307098715907f00!2sProvincia%20di%20Treviso!5e0!3m2!1sit!2sit!4v1679677465768!5m2!1sit!2sit",
});

const show = reactive({
  iframe: false,
  modal: false,
});

const cities = [...config.cities];

const filteredCities = computed(() =>
  cities.filter((city) =>
    city.toLocaleLowerCase().includes(filter.value.toLocaleLowerCase())
  )
);
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  place-content: center;
  gap: 2rem;
  &.mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .map-wrapper {
      margin-top: 2rem;
    }
  }
  .map-wrapper {
    overflow: hidden;
  }
  .btn-wrapper {
    width: 100%;
    &:deep( button ) {
      width: auto;
    }
  }
  .placeholder-map {
    width: 100%;
    height: 40rem;
    background-color: var(--footer-bg-05);
    position: relative;
  }
}

.input {
  width: 100%;
  &:deep(input) {
    margin-top: 0.6rem;
  }
}

.city-list {
  width: 100%;
  height: 35rem;
  overflow-y: auto;
  &.mobile {
    height: 100%;
    max-height: 30rem;
  }
  .city {
    display: flex;
    align-items: center;
    height: 4rem;
    padding-left: 2rem;
    text-transform: uppercase;
    &:nth-of-type(odd) {
      background-color: var(--footer-bg);
    }
  }
}

.footer {
  display: flex;
  justify-content: flex-end;
}
</style>
