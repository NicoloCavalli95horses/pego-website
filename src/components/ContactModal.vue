<template>
  <Modal
    title="Contattaci"
    :width="device != 'mobile' ? 65 : undefined"
    :click_out_close="true"
    :full_size="device == 'mobile'"
    @closed="$emit('close')"
  >
    <template #default>
      <div class="w-100">
        <StepProgression :steps="steps" :active="active" />
        <UserInfo v-if="active == 0" />
        <TechDetails v-if="active == 1" />
        <TechDetailsAdvanced v-if="active == 2" />
      </div>
    </template>
    <template #footer>
      <div class="flex-center">
        <template v-if="active == 0">
          <Btn :bg="false" text="chiudi" @click="$emit('close')" />
        </template>
        <template v-else>
          <Btn :bg="false" text="indietro" @click="active--" />
        </template>
        <Btn class="l-12" text="avanti" :def="true" @click="active++" />
      </div>
    </template>
  </Modal>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref } from "vue";
import { getViewport } from "../utils/screen_size.js";

import Btn from "./Btn.vue";
import Modal from "./Modal.vue";
import UserInfo from "./form/UserInfo.vue";
import TechDetails from "./form/TechDetails.vue";
import TechDetailsAdvanced from "./form/TechDetailsAdvanced.vue";
import StepProgression from "./StepProgression.vue";

// ==============================
// Props, emits
// ==============================
const emit = defineEmits('close');

// ==============================
// Consts
// ==============================
const device = getViewport();
const steps = [{ label: 'chi sei' }, { label: 'richiesta' }, { label: 'dettagli' }];
const active = ref(0);
</script>

<style></style>
