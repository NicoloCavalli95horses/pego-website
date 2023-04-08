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
          @submit="onSubmit()"
        >
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
            <DropDown
              title="Seleziona marchio"
              v-model="dropdown.selection"
              :is_required="true"
              :options="dropdown.options"
              :error="dropdown.error"
            />
            <InputText
              input_type="textarea"
              v-model="textarea.content"
              placeholder="Descrivi il problema qui"
              :error="textarea.error"
            />
          </template>
          <template v-if="active == 2">
            <InputFile
              placeholder="Carica una foto"
              @upload="(f) => file = f"
              />
          </template>

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
            <template v-else-if="active == 2">
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
          <input type="hidden" name="Messaggio" :value="textarea.content">
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
import StepProgression from "./StepProgression.vue";

// ==============================
// Props, emits
// ==============================
const emit = defineEmits(['closed']);

// ==============================
// Consts
// ==============================
const device = getViewport();
const steps = [{ label: 'Chi sei' }, { label: 'Richiesta' }, { label: 'Dettagli' }];
const active = ref(0);
const show_thanks = ref( false );

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
  options: [ 'Opzione 1', 'Opzione 2', 'Opzione 3' ],
  error: false,
});

const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telReg = /^(?:(?:\+|00)39)?\s*(?:\d{2}\s*){2}\d{6,7}$/;
const isEmailValid = computed(() => email.content.length && emailReg.test(email.content) );
const isTelValid = computed(() => tel.content.length && telReg.test(tel.content) );
const isStepOneValid = computed(() => name.content && surname.content && ( email.content && isEmailValid.value || tel.content && isTelValid.value ));
const isStepTwoValid = computed(() => dropdown.selection.length );

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

  dropdown.error = !dropdown.selection ? true : false;
}

function onSubmit(){
  show_thanks.value = true;
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
