<template>
  <template v-if="device != 'mobile'">
    <div class="wrapper">
      <div class="text-wrapper">
        <h4>
          Raggiungiamo tutti i comuni in provincia di Treviso, e alcuni comuni
          in provincia di Venezia.
        </h4>
        <div class="w-100 top-32">
          <Btn
            class="c-margin"
            text="scopri tutti i comuni"
            :def="true"
            @click="show.modal = true"
          />
        </div>
      </div>
      <div class="map-wrapper desktop">
        <iframe
          :src="iframe.src"
          width="100%"
          height="500"
          style="border: 0; margin-top: -100px"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </template>

  <template v-else>
    <div class="flex-column">
      <h4>
        Raggiungiamo tutti i comuni in provincia di Treviso, e alcuni comuni in
        provincia di Venezia.
      </h4>
      <div class="w-100 top-32">
        <Btn
          class="c-margin"
          text="scopri tutti i comuni"
          :def="true"
          @click="show.modal = true"
        />
      </div>
      <div class="map-wrapper top-24">
        <iframe
          :src="iframe.src"
          width="100%"
          height="500"
          style="border: 0; margin-top: -100px"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </template>

  <Modal
    v-if="show.modal"
    title="Copertura dei comuni"
    :width="device != 'mobile' ? 65 : undefined"
    :full_size="device == 'mobile'"
    :click_out_close="true"
    @closed="show.modal = false"
  >
    <div class="flex-column w-100">
      <div class="input">
        <InputText placeholder="Il mio comune" v-model="filter" :prevent_focus_mode="true" />
      </div>

      <div class="city-list top-12">
        <template v-if="filteredCities.length">
          <template v-for="(city, i) in filteredCities" :key="i">
            <div class="city">
              <p>{{ city }}</p>
            </div>
          </template>
        </template>
        <p v-else>
          Ci dispiace, ma attualmente non raggiungiamo questo comune.
        </p>
      </div>
    </div>

    <template #footer>
      <Btn
        :bg="false"
        text="chiudi"
        @click="
          show.modal = false;
          filter = '';
        "
      />
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

//==============================
// Consts
//==============================
const device = getViewport();
const filter = ref("");
const iframe = reactive({
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d355998.234002185!2d12.2138719!3d45.80652769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47793e99135113bd%3A0x307098715907f00!2sProvincia%20di%20Treviso!5e0!3m2!1sit!2sit!4v1679677465768!5m2!1sit!2sit",
});

const show = reactive({
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
.wrapper {
  display: flex;
  .text-wrapper {
    width: calc(50% - 2.2rem);
    margin-right: 4.4rem;
    h4 {
      padding-bottom: 2.2rem;
    }
  }
}

.map-wrapper {
  &.desktop {
    width: 50%;
  }
  overflow: hidden;
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
