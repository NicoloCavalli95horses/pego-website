<template>
  <Modal
    title="Contattaci"
    :width="device != 'mobile' ? 70 : undefined"
    :height="device != 'mobile' ? 55 : undefined"
    :click_out_close="true"
    :full_size="device == 'mobile'"
    @closed="$emit('closed')"
  >
    <template #header>
      <LineProgression :steps="steps" :active="active" />
    </template>
  
    <template #default>
      <div class="w-100" style="height:100%;">

        <!-- User info -->
        <form 
          action="https://formsubmit.co/1384cf3d2204cf8365f1091212d3525e"
          method="POST"
          class="form"
          autocomplete="off"
          autofill="off"
          enctype="multipart/form-data"
          @submit="onSubmit()"
          @keydown.enter.prevent="e => e.preventDefault()"
        >
          <div class="inputs">
            <template v-if="active == 0">
              <InputText
                placeholder="Nome"
                v-model="name.content"
                :is_required="true"
                :error="name.error"
              />
              <InputText
                placeholder="Cognome"
                v-model="surname.content"
                :is_required="true"
                :error="surname.error"
              />
              <InputText
                placeholder="Email"
                v-model="email.content"
                :error_message="email.error_msg"
                :error="email.error"
              />
              <InputText
                placeholder="Cellulare"
                v-model="tel.content"
                input_type="tel"
                :error_message="tel.error_msg"
                :error="tel.error"
              />
            </template>
            <template v-if="active == 1">
              <InputText
                placeholder="Provincia"
                v-model="district.content"
                :is_required="true"
                :error="district.error"
              />
              <InputText
                placeholder="Comune"
                v-model="city.content"
                :is_required="true"
                :error="city.error"
              />
              <InputText
                placeholder="Cap"
                v-model="cap.content"
                :is_required="true"
                :error="cap.error"
              />
            </template>
            <template v-if="active == 2">
              <DropDown
                title="Seleziona marchio"
                v-model="dropdown.selection"
                :is_required="true"
                :options="dropdown.options"
                :error="dropdown.error"
              />
              <DropDown
                title="Modello"
                v-model="dropdown.selection"
                :is_required="true"
                :options="dropdown.options"
                :error="dropdown.error"
              />
              <DropDown
                title="Matricola"
                v-model="dropdown.selection"
                :is_required="true"
                :options="dropdown.options"
                :error="dropdown.error"
              />
              <!-- <InputText
                input_type="date"
                v-model="date.content"
                placeholder="Anno di installazione"
                :error="date.error"
              /> -->
              <!-- MODELLO -->
              <!-- MATRICOLA -->
              <!-- ANNO DI INSTALLAZIONE -->
            </template>
            <template v-if="active == 3">
              <InputFile
                placeholder="Carica una foto"
                @upload="(f) => file = f"
                />
              <InputText
                input_type="textarea"
                v-model="textarea.content"
                placeholder="Ulteriori informazioni"
                :error="textarea.error"
              />
            </template>
          </div>

          <!-- Footer buttons -->
          <div class="footer-btns">
            <template v-if="active == 0">
              <Btn :bg="false" text="chiudi" @click="$emit('closed')" />
              <Btn class="l-12" text="avanti" :def="true" @click="(e) => onStepOne(e)" />
            </template>
            <template v-if="active == 1">
              <Btn :bg="false" text="indietro" @click="active--" />
              <Btn class="l-12" text="avanti" :def="true" @click="(e) => onStepTwo(e)" />
            </template>
            <template v-if="active == 2">
              <Btn :bg="false" text="indietro" @click="active--" />
              <Btn class="l-12" text="avanti" :def="true" @click="(e) => onStepThree(e)" />
            </template>
            <template v-else-if="active == 3">
              <Btn :bg="false" text="indietro" @click="active--" />
              <Btn text="conferma" :def="true" type="submit" />
            </template>
          </div>

          <input type="hidden" name="_next" value="https://192.168.73.63:5173/thanks">
          <input type="hidden" name="_subject" :value="name.content + ' ' + surname.content">
          <input type="hidden" name="_template" value="table">

          <!-- Email cells -->
          <input type="hidden" name="Nome" :value="name.content">
          <input type="hidden" name="Cognome" :value="surname.content">
          <input type="hidden" name="Email" :value="email.content">
          <input type="hidden" name="Cellulare" :value="tel.content">
          
          <input type="hidden" name="Provincia" :value="district.content">
          <input type="hidden" name="Città" :value="city.content">
          <input type="hidden" name="CAP" :value="cap.content">

          <input type="hidden" name="Marchio" :value="dropdown.selection">

          <input type="hidden" name="Ulteriori informazioni" :value="textarea.content">
        </form>
      </div>
    </template>
  </Modal>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { computed, reactive, ref, watch } from "vue";
import { getViewport } from "../utils/screen_size.js";

import Btn from "./Btn.vue";
import Modal from "./Modal.vue";
import DropDown from "./DropDown.vue";
import InputText from "./InputText.vue";
import InputFile from "./InputFile.vue";
import LineProgression from "./LineProgression.vue";

// ==============================
// Props, emits
// ==============================
const emit = defineEmits(['closed']);

// ==============================
// Consts
// ==============================
const device = getViewport();
const steps = [{ label: 'Chi sei' }, {label:'Da dove vieni'}, { label: 'Dettagli tecnici' }, { label: 'Avanzate' }];
const active = ref(0);

const name = reactive({
  content: '',
  error: false,
});
const surname = reactive({
  content: '',
  error: false,
});
const email = reactive({
  content: '',
  error_msg: '',
  error: false,
});
const tel = reactive({
  content: '',
  error_msg: '',
  error: false,
});
const district = reactive({
  content: '',
  error: false,
});
const city = reactive({
  content: '',
  error: false,
});
const cap = reactive({
  content: '',
  error: false,
});
const date = reactive({
  content: '',
  error: false,
});
const file = reactive({
  content: '',
  error: false,
});
const textarea = reactive({
  content: '',
  error: false,
});
const dropdown = reactive({
  selection: '',
  options: [ 'Palazzetti', 'MCZ', 'Cadel', 'Anselmo Cola', 'Last Calor', 'Royal', 'Freepoint', 'Termovana', 'Red', 'Brisach', 'Altro (non incluso)' ],
  error: false,
});

const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telReg = /^(?:(?:\+|00)39)?\s*(?:\d{2}\s*){2}\d{6,7}$/;
const capReg = /^[0-9]{5}$/;

const isEmailValid = computed(() => email.content.length && emailReg.test(email.content) );
const isTelValid = computed(() => tel.content.length && telReg.test(tel.content) );
const isCapValid = computed(() => cap.content && capReg.test(cap.content));

const isStepOneValid = computed(() => name.content && surname.content && ( email.content && isEmailValid.value || tel.content && isTelValid.value ));
const isStepTwoValid = computed(() => district.content && city.content && isCapValid.value );
const isStepThreeValid = computed(() => dropdown.selection.length );

// ==============================
// Functions
// ==============================
function onStepOne(e){
  // Prevent default browser error message
  e.preventDefault();

  if ( isStepOneValid.value ) {
    active.value++;
    return
  }

  name.error = !name.content ? true : false;
  surname.error = !surname.content ? true : false;
  tel.error = !isTelValid.value;
  email.error = !isEmailValid.value;

  if ( !isEmailValid.value && !isTelValid.value ){
    email.error_msg = 'Fornire una email o un telefono valido';
    tel.error_msg = 'Fornire una email o un telefono valido';
    return
  }
}

function onStepTwo(e){
  // Prevent default browser error message
  e.preventDefault();

  if ( isStepTwoValid.value ) {
    active.value++;
    return
  }

  district.error = !district.content ? true : false;
  city.error = !city.content ? true : false;
  cap.error = !isCapValid.value ? true : false;
}

function onStepThree(e){
  // Prevent default browser error message
  e.preventDefault();

  if ( isStepThreeValid.value ) {
    active.value++;
    return
  }

  dropdown.error = !dropdown.selection ? true : false;
}

// ==============================
// Watch
// ==============================
watch( () => name.content, (newVal) => {
  if (newVal.length) {
    name.error = false;
  }
});

watch( () => surname.content, (newVal) => {
  if (newVal.length) {
    surname.error = false;
  }
});

watch( [() => email.content, () => tel.content ], (newValEmail, newValTel) => {
  if (newValEmail.length || newValTel.length) {
    tel.error = false;
    email.error = false;
  }
});

watch( () => dropdown.selection, (newVal) => {
  if (newVal.length){
    dropdown.error = false;
  }
});

</script>

<style lang="scss" scoped>
 .form {
  .inputs {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .footer-btns {
    margin-top: 2.2rem;
    display: flex;
    justify-content: flex-end;
  }
 }
</style>
