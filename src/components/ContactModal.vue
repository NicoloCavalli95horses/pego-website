<template>
  <div class="w-100 h-100" />
  <Modal
    title="Contattaci"
    :max_width="device != 'mobile' ? '50%' : undefined"
    :min_width="device != 'mobile' ? '60em' : undefined"
    :max_height="device != 'mobile' ? '90%' : undefined"
    :min_height="device != 'mobile' ? '40em' : undefined"
    :click_out_close="true"
    :close_btn="device == 'mobile'"
    :full_size="device == 'mobile'"
    @closed="$router.push('/')"
  >
    <template #default>
      <LineProgression
        :steps="device == 'mobile' ? MOBILE_STEPS : STEPS"
        :active="device == 'mobile' ? mobile_active : active"
        class="top-12 bottom-12"
      />

      <!-- User info -->
      <form
        action="https://formsubmit.co/pegorer.ennio@gmail.com"
        method="POST"
        :class="['form', 'relative', { 'mobile': device == 'mobile' }]"
        id="form"
        autocomplete="off"
        autofill="off"
        enctype="multipart/form-data"
        @keydown.enter.prevent="(e) => e.preventDefault()"
      >
        <span>(*) campo obbligatorio</span>

        <!-- DESKTOP/TABLET FORM -->
        <template v-if="device != 'mobile'">
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
                label="Descrivi la tua richiesta"
                placeholder="Descrivi la tua richiesta o la problematica riscontrata."
                v-model="request.content"
                input_type="textarea"
                :is_required="true"
                :error_message="request.error_msg"
                :error="request.error"
                @reset="request.content = ''"
              />
            </template>
            <template v-if="active == 1">
              <div class="flex-center">
                <InputText
                  label="Nome"
                  placeholder="Nome"
                  v-model="name.content"
                  :is_required="true"
                  :error="name.error"
                  ext_class="w-50 r-12"
                  @reset="name.content = ''"
                />
                <InputText
                  label="Cognome"
                  placeholder="Cognome"
                  v-model="surname.content"
                  :is_required="true"
                  :error="surname.error"
                  ext_class="w-50"
                  @reset="surname.content = ''"
                />
              </div>
              <div class="flex-center">
                <InputText
                  label="Email"
                  placeholder="Email"
                  v-model="email.content"
                  :error_message="email.error_msg"
                  :error="email.error"
                  ext_class="w-50 r-12"
                  @reset="email.content = ''"
                />
                <InputText
                  label="Cellulare"
                  placeholder="Cellulare"
                  v-model="tel.content"
                  input_type="tel"
                  :length="10"
                  :error_message="tel.error_msg"
                  :error="tel.error"
                  ext_class="w-50"
                  @reset="tel.content = ''"
                />
              </div>
            </template>
            <template v-if="active == 2">
              <InputText
                label="Comune"
                placeholder="Comune"
                v-model="city.content"
                :tips="city.tips.filter((c) => c.includes(city.content.toLowerCase()))"
                :is_required="true"
                :error="city.error"
                :show_tips="city.show_tips"
                :display_uppercase="true"
                @focus="city.show_tips = true"
                @selectedtip="onselectedtip"
                @reset="city.content = ''"
              />

              <div class="flex-center">
                <InputText
                  label="Indirizzo"
                  placeholder="Indirizzo"
                  v-model="address.content"
                  :is_required="true"
                  :error="address.error"
                  ext_class="w-50 r-12"
                  @reset="address.content = ''"
                />
                <InputText
                  label="Numero"
                  placeholder="Numero"
                  v-model="house_number.content"
                  input_type="tel"
                  :is_required="true"
                  :error="house_number.error"
                  ext_class="w-50"
                  @reset="house_number.content = ''"
                />
              </div>
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
                label="Specificare marchio"
                placeholder="Specificare marchio"
                v-model="system.other.content"
                :is_required="true"
                :display_uppercase="true"
                :error="system.other.error"
                @reset="system.other.content = ''"
              />
              <div class="flex-center">
                <InputText
                  label="Anno installazione"
                  placeholder="Anno installazione"
                  v-model="system.year.content"
                  input_type="tel"
                  :length="4"
                  :error="system.year.error"
                  ext_class="w-33 r-12"
                  @reset="system.year.content = ''"
                />
                <InputText
                  label="Matricola"
                  placeholder="Matricola"
                  :tooltip="TOOLTIP.matricola"
                  v-model="system.register.content"
                  :error="system.register.error"
                  ext_class="w-33 r-12"
                  @reset="system.register.content = ''"
                />
                <InputText
                  label="Modello"
                  placeholder="Modello"
                  :tooltip="TOOLTIP.modello"
                  v-model="system.model.content"
                  :error="system.model.error"
                  ext_class="w-33"
                  @reset="system.model.content = ''"
                />
              </div>
            </template>
            <template v-if="active == 4">
              <InputFile
                label="Carica una foto"
                placeholder="Carica una foto"
                :tooltip="TOOLTIP.foto"
                @upload="(f) => (file.content = f)"
                @delete="file.content = undefined"
              />
              <InputText
                input_type="textarea"
                v-model="further.content"
                label="Ulteriori informazioni"
                :tooltip="TOOLTIP.ulteriori"
                placeholder="Ulteriori informazioni"
                :error="further.error"
                @reset="further.content = ''"
              />
            </template>
          </div>
        </template>

        <!-- MOBILE FORM -->
        <template v-else>
          <div class="inputs top-48">
            <Checkbox
              v-if="mobile_active == 0"
              v-model="request.selected"
              placeholder="Tipo di richiesta"
              type="radio"
              :options="request.options"
              :is_required="true"
              :error="request.error"
            />
            <InputText
              v-if="mobile_active == 1"
              label="Descrivi la tua richiesta"
              placeholder="Descrivi la tua richiesta o la problematica riscontrata."
              v-model="request.content"
              input_type="textarea"
              :is_required="true"
              :error_message="request.error_msg"
              :error="request.request_description_error"
              @reset="request.content = ''"
            />
            <div v-if="mobile_active == 2">
              <InputText
                label="Nome"
                placeholder="Nome"
                v-model="name.content"
                :is_required="true"
                :error="name.error"
                @reset="name.content = ''"
              />
              <InputText
                label="Cognome"
                placeholder="Cognome"
                v-model="surname.content"
                :is_required="true"
                :error="surname.error"
                @reset="surname.content = ''"
              />
            </div>
            <div v-if="mobile_active == 3">
              <InputText
                label="Email"
                placeholder="Email"
                v-model="email.content"
                :error_message="email.error_msg"
                :error="email.error"
                @reset="email.content = ''"
              />
              <InputText
                label="Cellulare"
                placeholder="Cellulare"
                v-model="tel.content"
                input_type="tel"
                :length="10"
                :error_message="tel.error_msg"
                :error="tel.error"
                @reset="tel.content = ''"
              />
            </div>
            <div v-if="mobile_active == 4">
              <InputText
                label="Comune"
                placeholder="Comune"
                v-model="city.content"
                :tips="city.tips.filter((c) => c.includes(city.content.toLowerCase()))"
                :is_required="true"
                :error="city.error"
                :show_tips="city.show_tips"
                :display_uppercase="true"
                @focus="city.show_tips = true"
                @selectedtip="onselectedtip"
                @reset="city.content = ''"
              />
              <div class="flex-center">
                <InputText
                 label="Indirizzo"
                 placeholder="Indirizzo"
                 v-model="address.content"
                 :is_required="true"
                 :error="address.error"
                 ext_class="r-12"
                 @reset="address.content = ''"
                />
                <InputText
                 label="Numero"
                 placeholder="N"
                 v-model="house_number.content"
                 input_type="tel"
                 :is_required="true"
                 :error="house_number.error"
                 ext_class="w-33"
                 @reset="house_number.content = ''"
                />
              </div>
            </div>
            <div v-if="mobile_active == 5">
              <div class="top-12">
                <DropDown
                  title="Seleziona marchio"
                  v-model="system.brand.content"
                  :is_required="true"
                  :options="system.brand.options"
                  :display_uppercase="true"
                  :error="system.brand.error"
                  :max_options="5"
                  ext_class="top-12"
                />
              </div>
              <InputText
                v-if="system.brand.content == OTHER"
                label="Specificare marchio"
                placeholder="Specificare marchio"
                v-model="system.other.content"
                :is_required="true"
                :display_uppercase="true"
                :error="system.other.error"
                @reset="system.other.content = ''"
              />
            </div>

            <div v-if="mobile_active == 6">
              <InputText
                label="Anno installazione"
                placeholder="Anno installazione"
                v-model="system.year.content"
                input_type="tel"
                :length="4"
                :error="system.year.error"
                @reset="system.year.content = ''"
              />
            </div>
            <div v-if="mobile_active == 7">
              <InputText
                label="Matricola"
                placeholder="Matricola"
                :tooltip="TOOLTIP.matricola"
                v-model="system.register.content"
                :error="system.register.error"
                @reset="system.register.content = ''"
              />
              <InputText
                label="Modello"
                placeholder="Modello"
                :tooltip="TOOLTIP.modello"
                v-model="system.model.content"
                :error="system.model.error"
                @reset="system.model.content = ''"
              />
            </div>
            <div v-if="mobile_active == 8">
              <InputText
                ext_class="top-12"
                input_type="textarea"
                v-model="further.content"
                label="Ulteriori informazioni"
                :tooltip="TOOLTIP.ulteriori"
                placeholder="Ulteriori informazioni"
                :error="further.error"
                @reset="further.content = ''"
              />
            </div>
            <!-- input type="file" to be the last one for security reasons -->
            <div v-if="mobile_active == 9">
              <InputFile
                label="Carica una foto"
                placeholder="Carica una foto"
                :tooltip="TOOLTIP.foto"
                @upload="(f) => (file.content = f)"
                @delete="file.content = undefined"
              />
            </div>
          </div>

          <div class="flex-center top-32">
            <Btn v-if="mobile_active == 0" :bg="false" text="chiudi" @click.prevent="$router.push('/')" class="w-100 r-12" />
            <Btn v-else :bg="false" text="indietro" @click.prevent="mobile_active--" class="w-100 r-12" />
            <Btn v-if="mobile_active == 9" text="invia" :def="true" type="submit" form="form" />
            <Btn v-else class="w-100" text="avanti" :def="true" @click.prevent="validateMobileForm" />
          </div>
        </template>

        <!-- Redirect -->
        <input type="hidden" name="_next" value="https://www.pegorersta.it/thanks" />
        <input type="hidden" name="_subject" :value="getEmailObject" />
        <input type="hidden" name="_template" value="table" />

        <!-- Email fields -->
        <input type="hidden" name="Richiesta" :value="request.selected" />
        <input type="hidden" name="Descrizione" :value="request.content" />
        <input type="hidden" name="Nome" :value="name.content" />
        <input type="hidden" name="Cognome" :value="surname.content" />
        <input type="hidden" name="Email" :value="email.content" />
        <input type="hidden" name="Cellulare" :value="tel.content" />
        <input type="hidden" name="Città" :value="city.content" />
        <input type="hidden" name="Via" :value="address.content" />
        <input type="hidden" name="Numero civico" :value="house_number.content" />
        <input v-if="system.brand.content != OTHER" type="hidden" name="Marchio" :value="system.brand.content" />
        <input v-else type="hidden" name="Marchio (altro)" :value="system.other.content" />
        <input type="hidden" name="Modello" :value="system.model.content" />
        <input type="hidden" name="Matricola" :value="system.register.content" />
        <input type="hidden" name="Anno installazione" :value="getSystemYear" />
        <input type="hidden" name="Ulteriori informazioni" :value="further.content" />
      </form>
    </template>

    <!-- Desktop/tablet footer buttons -->
    <template v-if="device != 'mobile'" #footer>
      <Btn v-if="active == 0" :bg="false" text="chiudi" @click.prevent="$router.push('/')" />
      <Btn v-else :bg="false" text="indietro" @click.prevent="active--" />
      <Btn v-if="active == 4" text="invia" :def="true" type="submit" form="form" />
      <Btn v-else text="avanti" :def="true" @click.prevent="validateDesktopForm" />
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
import Modal from "./Modal.vue";
import Checkbox from "./Checkbox.vue";
import DropDown from "./DropDown.vue";
import InputText from "./InputText.vue";
import InputFile from "./InputFile.vue";
import LineProgression from "./LineProgression.vue";


// ==============================
// Consts
// ==============================
const OTHER = "Altro (non incluso)";
const STEPS = [
  { label: "Richiesta" },
  { label: "Nominativo" },
  { label: "Indirizzo" },
  { label: "Dettagli tecnici" },
  { label: "Opzionale" },
];
const MOBILE_STEPS = [
  { label: "Tipo di richiesta" },
  { label: "Descrizione richiesta" },
  { label: "Nominativo" },
  { label: "Contatti" },
  { label: "Indirizzo" },
  { label: "Dettagli tecnici" },
  { label: "Dettagli tecnici" },
  { label: "Dettagli tecnici" },
  { label: "Opzionale" },
  { label: "Opzionale" },
];

const TOOLTIP = {
  matricola: "La matricola è un codice che si trova generalmente dietro la stufa, sulle pareti interne del serbatoio pellet e allegato al libretto istruzioni.",
  modello: "Il modello è il nome della tua stufa, solitamente posto nella targhetta matricola o nel libretto di istruzioni.",
  foto: "Carica una foto dell'impianto o del guasto per aiutarci ad identificare il problema.",
  ulteriori: "Hai richieste o altro che volevi comunicarci? Siamo a disposizione."
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TEL_REGEX = /^(?:(?:\+|00)39)?\s*(?:\d{2}\s*){2}\d{6,7}$/;


// ==============================
// Consts
// ==============================
const device = getViewport();
const active = ref( 0 );
const mobile_active = ref( 0 );

const request = reactive({
  options: ["Riparazione", "Manutenzione", "Informazioni generali"],
  selected: "",
  content: "",
  error: false,
  request_description_error: false, // mobile only
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
  tips: [...config.cities],
  show_tips: false,
  error: false,
});
const address = reactive({
  content: "",
  error: false,
});
const house_number = reactive({
  content: "",
  error: false,
});
const file = reactive({
  content: "",
  error: false,
});
const further = reactive({
  content: "",
  error: false,
});
const system = reactive({
  brand: {
    content: "",
    options: [...config.brand.map((b) => b.name), OTHER],
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

const isEmailValid = computed(() => email.content.length && EMAIL_REGEX.test(email.content));
const isTelValid = computed(() => tel.content.length && TEL_REGEX.test(tel.content));
const isHouseNumberValid = computed(() => house_number.content.length );

const getEmailObject = computed(() => request.selected + " - " + name.content + " " + surname.content );
const getSystemYear = computed(() => {
  let year = parseInt(system.year.content);
  return year ? `${year}, (${new Date().getFullYear() - year} anni fa)` : 'non disponibile';
});


// ==============================
// Functions
// ==============================
function validateMobileForm() {
    switch (mobile_active.value) {
      case 0:
        if (request.selected.length) {
          mobile_active.value++;
          return;
        }
        request.error = true;
        break;
      case 1:
        if (request.content.length) {
          mobile_active.value++;
          return;
        }
        request.request_description_error = true;
        break;
      case 2:
        if (name.content.length && surname.content.length) {
          mobile_active.value++;
          return;
        }
        name.error = !name.content ? true : false;
        surname.error = !surname.content ? true : false;
        break;
      case 3:
        if ((email.content && isEmailValid.value) || (tel.content && isTelValid.value)) {
          mobile_active.value++;
          return;
        }
        tel.error = !isTelValid.value;
        email.error = !isEmailValid.value;
        if (!isEmailValid.value && !isTelValid.value) {
          email.error_msg = "Fornire una email o un telefono valido";
          tel.error_msg = "Fornire una email o un telefono valido";
          return;
        }
        break;
      case 4:
        if (address.content && city.content && isHouseNumberValid.value) {
          mobile_active.value++;
          return;
        }
        address.error = !address.content ? true : false;
        city.error = !city.content ? true : false;
        house_number.error = !isHouseNumberValid.value ? true : false;
        break;
      case 5:
        if (
          (system.brand.content.length && system.brand.content != OTHER) ||
          (system.brand.content == OTHER && system.other.content.length)
        ) {
          mobile_active.value++;
          return;
        }
        system.brand.error = !system.brand.content ? true : false;
        system.other.error = !system.other.content ? true : false;
        break;
      case 6:
        mobile_active.value++;
        return;
      case 7:
        mobile_active.value++;
        return;
      case 8:
        mobile_active.value++;
        return;
      case 9:
        mobile_active.value++;
        return;
    }
}

function validateDesktopForm() {
  switch (active.value) {
    case 0:
      if ( request.selected.length && request.content.length ) {
        active.value++;
        return;
      }
      request.error = !request.content || !request.selected ? true : false;
      break;
    case 1:
      if ( name.content && surname.content && ((email.content && isEmailValid.value) || (tel.content && isTelValid.value)) ) {
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
      if ( address.content && city.content && isHouseNumberValid.value ) {
        active.value++;
        return;
      }

      address.error = !address.content ? true : false;
      city.error = !city.content ? true : false;
      house_number.error = !isHouseNumberValid.value ? true : false;
      break;
    case 3:
      if ( (system.brand.content.length && system.brand.content != OTHER) || (system.brand.content == OTHER && system.other.content.length) ) {
        active.value++;
        return;
      }

      system.brand.error = !system.brand.content ? true : false;
      system.other.error = !system.other.content ? true : false;
      break;
  }
}

function onselectedtip(val) {
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
      request.request_description_error = false;
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
    display: flex;
    flex-direction: column;
  }
  span {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 1.5rem;
    font-size: 1.2rem;
    opacity: 0.5;
  }
}
</style>
