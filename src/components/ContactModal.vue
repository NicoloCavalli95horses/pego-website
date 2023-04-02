<template>
  <Modal
    title="Contattaci"
    :width="device != 'mobile' ? 65 : undefined"
    :height="device != 'mobile' ? 55 : undefined"
    :click_out_close="true"
    :full_size="device == 'mobile'"
    @closed="$emit('closed')"
  >
    <template #default>
      <div class="w-100">
        <StepProgression :steps="steps" :active="active" />

        <!-- User info -->
        <form 
          action="https://formsubmit.co/1384cf3d2204cf8365f1091212d3525e"
          method="POST"
          class="form"
          autocomplete="off"
          enctype="multipart/form-data"
        >
          <template v-if="active == 0">
            <InputText placeholder="Nome" v-model="name" :is_required="true" />
            <InputText placeholder="Cognome" v-model="surname" :is_required="true" />
            <InputText placeholder="Email" v-model="email" />
            <InputText placeholder="Cellulare" v-model="tel" input_type="tel" />
          </template>
          <template v-if="active == 1">
            <DropDown title="Seleziona marchio" :is_required="true" :options="options" />
            <InputText input_type="textarea" v-model="message" placeholder="Descrivi il problema qui"/>
          </template>
          <template v-if="active == 2">
            <InputFile placeholder="Carica una foto" @upload="f => onFileLoad(f)" />
          </template>

          <!-- Footer buttons -->
          <div class="footer-btns">
            <template v-if="active == 0">
              <Btn :bg="false" text="chiudi" @click="$emit('closed')" />
              <Btn class="l-12" text="avanti" :def="true" @click="active++" />
            </template>
            <template v-if="active == 1">
              <Btn :bg="false" text="indietro" @click="active--" />
              <Btn class="l-12" text="avanti" :def="true" @click="active++" />
            </template>
            <template v-else-if="active == 2">
              <Btn :bg="false" text="indietro" @click="active--" />
              <Btn text="conferma" :def="true" type="submit" />
            </template>
          </div>

          <input type="hidden" name="_next" value="https://192.168.41.63:5173/">
          <input type="hidden" name="_subject" :value="name + ' ' + surname">
          <input type="hidden" name="_template" value="table">

          <!-- Email cells -->
          <input type="hidden" name="Nome" :value="name">
          <input type="hidden" name="Cognome" :value="surname">
          <input type="hidden" name="Email" :value="email">
          <input type="hidden" name="Cellulare" :value="tel">
          <input type="hidden" name="Messaggio" :value="message">
          <input type="hidden" name="Allegati" :value="file">
        </form>

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
import DropDown from "./DropDown.vue";
import InputText from "./InputText.vue";
import InputFile from "./InputFile.vue";
import StepProgression from "./StepProgression.vue";

// ==============================
// Props, emits
// ==============================
const emit = defineEmits('closed');

// ==============================
// Consts
// ==============================
const device = getViewport();
const steps = [{ label: 'Chi sei' }, { label: 'Richiesta' }, { label: 'Dettagli' }];
const active = ref(0);

const name = ref( '' );
const surname = ref( '' );
const email = ref( '' );
const tel = ref( null );
const file = ref( null );
const message = ref( '' );
const options = [ 'Opzione 1', 'Opzione 2', 'Opzione 3' ];


function onFileLoad(f){
  file.value = f[0];
  console.log( file.value );
}
</script>

<style lang="scss" scoped>
 .form {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5rem 0 0 0;

  .footer-btns {
    width: 100%;
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
  }
 }
</style>
