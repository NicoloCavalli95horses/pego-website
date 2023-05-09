<template>
  <Modal
    title="Contattaci"
    :width="device != 'mobile' ? 80 : undefined"
    :height="device != 'mobile' ? 65 : undefined"
    :click_out_close="true"
    :full_size="device == 'mobile'"
    @closed="$router.push('/')"
  >
    <template #default>
      <LineProgression :steps="steps" :active="active" class="top-12" />

      <!-- User info -->
      <form
        action="https://formsubmit.co/1384cf3d2204cf8365f1091212d3525e"
        method="POST"
        class="form"
        id="form"
        autocomplete="off"
        autofill="off"
        enctype="multipart/form-data"
        @submit="onSubmit()"
        @keydown.enter.prevent="(e) => e.preventDefault()"
      >
        <div class="inputs top-24">
          <template v-if="active == 0">
            <Checkbox
              v-model="request.selected"
              placeholder="Tipo di richiesta"
              type="radio"
              :options="request.options"
              :is_required="true"
              :error="request.error"
            />
            <InputText
              placeholder="Descrivi la tua richiesta"
              v-model="request.content"
              input_type="textarea"
              tooltip="Descrivi la tua richiesta."
              :is_required="true"
              :error_message="request.error_msg"
              :error="request.error"
            />
          </template>
          <template v-if="active == 1">
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
          <template v-if="active == 2">
            <InputText
              placeholder="Comune"
              v-model="city.content"
              :tips="city.tips.filter(c => c.includes(city.content.toLowerCase()))"
              :is_required="true"
              :error="city.error"
              :show_tips="city.show_tips"
              :display_uppercase="true"
              @focus="city.show_tips = true"
              @selectedtip="onselectedtip"
            />
            <InputText
              placeholder="Indirizzo"
              v-model="address.content"
              :is_required="true"
              :error="address.error"
            />
            <InputText
              placeholder="Numero"
              v-model="houseNumber.content"
              input_type="tel"
              :is_required="true"
              :error="houseNumber.error"
            />
          </template>
          <template v-if="active == 3">
            <DropDown
              title="Seleziona marchio"
              v-model="system.brand.content"
              :is_required="true"
              :options="system.brand.options"
              :display_uppercase="true"
              :error="system.brand.error"
              :max_options="5"
            />
            <InputText
              v-if="system.brand.content == OTHER"
              placeholder="Specificare marchio"
              v-model="system.other.content"
              :is_required="true"
              :display_uppercase="true"
              :error="system.other.error"
            />
            <InputText
              placeholder="Anno installazione"
              v-model="system.year.content"
              input_type="tel"
              :error="system.year.error"
            />
            <div class="flex-center">
              <InputText
                placeholder="Matricola"
                tooltip="La matricola identificativa dell'impianto si trova su una apposita etichetta."
                tooltip_dir="up"
                v-model="system.register.content"
                :error="system.register.error"
                ext_class="w-50 r-12"
              />
              <InputText
                placeholder="Modello"
                tooltip="L'indicazione del modello dell'impianto si trova su una apposita etichetta."
                v-model="system.model.content"
                :error="system.model.error"
                ext_class="w-50"
              />
            </div>
          </template>
          <template v-if="active == 4">
            <InputFile
              placeholder="Carica una foto"
              tooltip="Carica una foto dell'impianto o del libretto per aiutarci ad identificare il problema."
              @upload="(f) => (file = f)"
              @delete="file = undefined"
            />
            <InputText
              input_type="textarea"
              v-model="textarea.content"
              tooltip="Inserire qui ulteriori informazioni utili alla comprensione del problema."
              placeholder="Ulteriori informazioni"
              :error="textarea.error"
            />
          </template>
        </div>

        <input type="hidden" name="_next" value="https://pegorersta.netlify.app/thanks" />
        <input type="hidden" name="_subject" :value="getEmailObject" />
        <input type="hidden" name="_template" value="table" />

        <!-- Email cells -->
        <input type="hidden" name="Richiesta" :value="request.selected" />
        <input type="hidden" name="Descrizione" :value="request.content" />

        <input type="hidden" name="Nome" :value="name.content" />
        <input type="hidden" name="Cognome" :value="surname.content" />
        <input type="hidden" name="Email" :value="email.content" />
        <input type="hidden" name="Cellulare" :value="tel.content" />

        <input type="hidden" name="Città" :value="city.content" />
        <input type="hidden" name="Via" :value="address.content" />
        <input type="hidden" name="Numero civico" :value="houseNumber.content" />

        <input v-if="system.brand.content != OTHER" type="hidden" name="Marchio" :value="system.brand.content" />
        <input v-else type="hidden" name="Marchio (altro)" :value="system.other.content" />
        <input type="hidden" name="Modello" :value="system.model.content" />
        <input type="hidden" name="Matricola" :value="system.register.content" />
        <input type="hidden" name="Anno installazione" :value="getSystemYear" />

        <input type="hidden" name="Ulteriori informazioni" :value="textarea.content" />
      </form>
    </template>

    <!-- Footer buttons -->
    <template #footer>
      <template v-if="active == 0">
        <Btn :bg="false" text="chiudi" @click="$router.push('/')" />
        <Btn class="l-12" text="avanti" :def="true" @click="validate" />
      </template>
      <template v-if="active == 1">
        <Btn :bg="false" text="indietro" @click="active--" />
        <Btn class="l-12" text="avanti" :def="true" @click="validate" />
      </template>
      <template v-if="active == 2">
        <Btn :bg="false" text="indietro" @click="active--" />
        <Btn class="l-12" text="avanti" :def="true" @click="validate" />
      </template>
      <template v-else-if="active == 3">
        <Btn :bg="false" text="indietro" @click="active--" />
        <Btn class="l-12" text="avanti" :def="true" @click="validate" />
      </template>
      <template v-else-if="active == 4">
        <Btn :bg="false" text="indietro" @click="active--" />
        <Btn text="conferma" :def="true" type="submit" form="form" />
      </template>
    </template>
  </Modal>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { computed, reactive, ref, watch } from "vue";
import { getViewport } from "../utils/screen_size.js";
import { config } from "../utils/config.js";

import Btn from "./Btn.vue";
import Checkbox from "./Checkbox.vue";
import Modal from "./Modal.vue";
import DropDown from "./DropDown.vue";
import InputText from "./InputText.vue";
import InputFile from "./InputFile.vue";
import LineProgression from "./LineProgression.vue";

// ==============================
// Props, emits
// ==============================
const OTHER = 'Altro (non incluso)';  

// ==============================
// Consts
// ==============================
const device = getViewport();
const active = ref(0);
const steps = [
  { label: "Richiesta" },
  { label: "Nominativo" },
  { label: "Indirizzo" },
  { label: "Dettagli tecnici" },
  { label: "Opzionale" },
];

const request = reactive({
  options: ["Riparazione", "Manutenzione stagionale", "Informazioni generali"],
  selected: "",
  content: "",
  error: false,
});
const name = reactive({
  content: "",
  error: false,
});
const surname = reactive({
  content: "",
  error: false,
});
const email = reactive({
  content: "",
  error_msg: "",
  error: false,
});
const tel = reactive({
  content: "",
  error_msg: "",
  error: false,
});
const city = reactive({
  content: "",
  tips: [ ...config.cities ],
  show_tips: false,
  error: false,
});
const address = reactive({
  content: "",
  error: false,
});
const houseNumber = reactive({
  content: "",
  error: false,
});
const file = reactive({
  content: "",
  error: false,
});
const textarea = reactive({
  content: "",
  error: false,
});
const system = reactive({
  brand: {
    content: "",
    options: [ ...config.brand.map(b => b.name), OTHER ],
    error: false,
  },
  other: {
    content: "",
    error: false,
  },
  model: {
    content: "",
    error: false,
  },
  register: {
    content: "",
    error: false,
  },
  year: {
    content: "",
    error: false,
  },
});

// RegEx
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telReg = /^(?:(?:\+|00)39)?\s*(?:\d{2}\s*){2}\d{6,7}$/;
const houseNumberReg = /^\d+(\s*[a-zA-Z]?)$/;

const isEmailValid = computed(() => email.content.length && emailReg.test(email.content));
const isTelValid = computed(() => tel.content.length && telReg.test(tel.content));
const isHouseNumberValid = computed(() => houseNumber.content && houseNumberReg.test(houseNumber.content));
const isStepZeroValid = computed(() => request.selected.length && request.content.length);
const isStepOneValid = computed(() => name.content && surname.content && ((email.content && isEmailValid.value) || (tel.content && isTelValid.value)));
const isStepTwoValid = computed(() => address.content && city.content && isHouseNumberValid.value);
const isStepThreeValid = computed(() => ( system.brand.content.length && system.brand.content != OTHER ) || ( system.brand.content == OTHER && system.other.content.length ));

const getEmailObject = computed(() => request.selected + " - " + name.content + " " + surname.content);
const getSystemYear = computed(() => {
  let year = parseInt(system.year.content);
  return `${year}, (${new Date().getFullYear() - year} anni fa)`;
});

// ==============================
// Functions
// ==============================
function validate(e){
  // Prevent default browser error message
  e.preventDefault();

  switch (active.value) {
    case 0:
      if (isStepZeroValid.value) {
        active.value++;
        return;
      }
      request.error = !request.content || !request.selected ? true : false;
      break;
    case 1:
      if (isStepOneValid.value) {
        active.value++;
        return;
      }

      name.error = !name.content ? true : false;
      surname.error = !surname.content ? true : false;
      tel.error = !isTelValid.value;
      email.error = !isEmailValid.value;

      if (!isEmailValid.value && !isTelValid.value) {
        email.error_msg = "Fornire una email o un telefono valido";
        tel.error_msg = "Fornire una email o un telefono valido";
        return;
      }
      break;
    case 2:
      if (isStepTwoValid.value) {
      active.value++;
      return;
      }

      address.error = !address.content ? true : false;
      city.error = !city.content ? true : false;
      houseNumber.error = !isHouseNumberValid.value ? true : false;
      break;
    case 3:
      if (isStepThreeValid.value) {
        active.value++;
        return;
      }

      system.brand.error = !system.brand.content ? true : false;
      system.other.error = !system.other.content ? true : false;
      break;
  }
}

function onselectedtip(val){
  city.content = val;
  city.show_tips = false;
}

// ==============================
// Watch
// ==============================
watch(
  () => request.content,
  (newVal) => {
    if (newVal.length) {
      request.error = false;
    }
  }
);

watch(
  () => name.content,
  (newVal) => {
    if (newVal.length) {
      name.error = false;
    }
  }
);

watch(
  () => surname.content,
  (newVal) => {
    if (newVal.length) {
      surname.error = false;
    }
  }
);

watch([() => email.content, () => tel.content], (newValEmail, newValTel) => {
  if (newValEmail.length || newValTel.length) {
    tel.error = false;
    email.error = false;
  }
});

watch(
  () => system.brand.content,
  (newVal) => {
    if (newVal.length) {
      system.brand.error = false;
    }
  }
);

watch(
  () => system.other.content,
  (newVal) => {
    if (newVal.length) {
      system.other.error = false;
    }
  }
);
</script>

<style lang="scss" scoped>
.form {
  .inputs {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
