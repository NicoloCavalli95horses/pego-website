<template>
  <div class="w-100 h-100" />
  <Modal
    title="Contattaci"
    :max_width="device != 'mobile' ? '50%' : undefined"
    :min_width="device != 'mobile' ? '60em' : undefined"
    :max_height="device != 'mobile' ? '80%' : undefined"
    :min_height="device != 'mobile' ? '40em' : undefined"
    :click_out_close="true"
    :full_size="device == 'mobile'"
    @closed="$router.push('/')"
  >
    <template #default>
      <LineProgression
        v-if="device != 'mobile'"
        :steps="steps"
        :active="active"
        class="top-12 bottom-12"
      />
      <LineProgression
        v-else
        :steps="mobile_steps"
        :active="active_mobile"
        class="top-12 bottom-12"
      />

      <!-- User info -->
      <form
        action="https://formsubmit.co/pegorer.ennio@gmail.com"
        method="POST"
        :class="['form', 'relative', { mobile: device == 'mobile' }]"
        id="form"
        autocomplete="off"
        autofill="off"
        enctype="multipart/form-data"
        @submit="onSubmit()"
        @keydown.enter.prevent="(e) => e.preventDefault()"
      >
        <span>(*) campo obbligatorio</span>
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
                />
                <InputText
                  label="Cognome"
                  placeholder="Cognome"
                  v-model="surname.content"
                  :is_required="true"
                  :error="surname.error"
                  ext_class="w-50"
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
                />
                <InputText
                  label="Cellulare"
                  placeholder="Cellulare"
                  v-model="tel.content"
                  input_type="tel"
                  :error_message="tel.error_msg"
                  :error="tel.error"
                  ext_class="w-50"
                />
              </div>
            </template>
            <template v-if="active == 2">
              <InputText
                label="Comune"
                placeholder="Comune"
                v-model="city.content"
                :tips="
                  city.tips.filter((c) =>
                    c.includes(city.content.toLowerCase())
                  )
                "
                :is_required="true"
                :error="city.error"
                :show_tips="city.show_tips"
                :display_uppercase="true"
                @focus="city.show_tips = true"
                @selectedtip="onselectedtip"
              />

              <div class="flex-center">
                <InputText
                  label="Indirizzo"
                  placeholder="Indirizzo"
                  v-model="address.content"
                  :is_required="true"
                  :error="address.error"
                  ext_class="w-50 r-12"
                />
                <InputText
                  label="Numero"
                  placeholder="Numero"
                  v-model="houseNumber.content"
                  input_type="tel"
                  :is_required="true"
                  :error="houseNumber.error"
                  ext_class="w-50"
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
              />
              <div class="flex-center">
                <InputText
                  label="Anno installazione"
                  placeholder="Anno installazione"
                  v-model="system.year.content"
                  input_type="tel"
                  :error="system.year.error"
                  ext_class="w-33 r-12"
                />
                <InputText
                  label="Matricola"
                  placeholder="Matricola"
                  tooltip="La matricola identificativa dell'impianto si trova su una apposita etichetta."
                  tooltip_dir="up"
                  v-model="system.register.content"
                  :error="system.register.error"
                  ext_class="w-33 r-12"
                />
                <InputText
                  label="Modello"
                  placeholder="Modello"
                  tooltip="L'indicazione del modello dell'impianto si trova su una apposita etichetta."
                  v-model="system.model.content"
                  :error="system.model.error"
                  ext_class="w-33"
                />
              </div>
            </template>
            <template v-if="active == 4">
              <InputFile
                label="Carica una foto"
                placeholder="Carica una foto"
                tooltip="Carica una foto dell'impianto o del libretto per aiutarci ad identificare il problema."
                @upload="(f) => (file = f)"
                @delete="file = undefined"
              />
              <InputText
                input_type="textarea"
                v-model="textarea.content"
                label="Ulteriori informazioni"
                tooltip="Inserire qui ulteriori informazioni utili alla comprensione del problema."
                placeholder="Ulteriori informazioni"
                :error="textarea.error"
              />
            </template>
          </div>
        </template>

        <!-- MOBILE FORM -->
        <template v-else>
          <div class="inputs top-48">
            <Checkbox
              v-if="active_mobile == 0"
              v-model="request.selected"
              placeholder="Tipo di richiesta"
              type="radio"
              :options="request.options"
              :is_required="true"
              :error="request.error"
            />
            <InputText
              v-if="active_mobile == 1"
              label="Descrivi la tua richiesta"
              placeholder="Descrivi la tua richiesta o la problematica riscontrata."
              v-model="request.content"
              input_type="textarea"
              :is_required="true"
              :error_message="request.error_msg"
              :error="request.request_description_error"
            />
            <div v-if="active_mobile == 2">
              <InputText
                label="Nome"
                placeholder="Nome"
                v-model="name.content"
                :is_required="true"
                :error="name.error"
              />
              <InputText
                label="Cognome"
                placeholder="Cognome"
                v-model="surname.content"
                :is_required="true"
                :error="surname.error"
              />
            </div>
            <div v-if="active_mobile == 3">
              <InputText
                label="Email"
                placeholder="Email"
                v-model="email.content"
                :error_message="email.error_msg"
                :error="email.error"
              />
              <InputText
                label="Cellulare"
                placeholder="Cellulare"
                v-model="tel.content"
                input_type="tel"
                :error_message="tel.error_msg"
                :error="tel.error"
              />
            </div>
            <div v-if="active_mobile == 4">
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
              />
              <InputText
                label="Indirizzo"
                placeholder="Indirizzo"
                v-model="address.content"
                :is_required="true"
                :error="address.error"
              />
              <InputText
                label="Numero"
                placeholder="Numero"
                v-model="houseNumber.content"
                input_type="tel"
                :is_required="true"
                :error="houseNumber.error"
              />
            </div>
            <div v-if="active_mobile == 5">
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
              />
              <InputText
                label="Anno installazione"
                placeholder="Anno installazione"
                v-model="system.year.content"
                input_type="tel"
                :error="system.year.error"
              />
            </div>
            <div v-if="active_mobile == 6">
              <InputText
                label="Matricola"
                placeholder="Matricola"
                tooltip="La matricola identificativa dell'impianto si trova su una apposita etichetta."
                v-model="system.register.content"
                :error="system.register.error"
              />
              <InputText
                label="Modello"
                placeholder="Modello"
                tooltip="L'indicazione del modello dell'impianto si trova su una apposita etichetta."
                v-model="system.model.content"
                :error="system.model.error"
              />
            </div>
            <div v-if="active_mobile == 7">
              <InputFile
                label="Carica una foto"
                placeholder="Carica una foto"
                tooltip="Carica una foto dell'impianto o del libretto per aiutarci ad identificare il problema."
                @upload="(f) => (file = f)"
                @delete="file = undefined"
              />
              <InputText
                ext_class="top-12"
                input_type="textarea"
                v-model="textarea.content"
                label="Ulteriori informazioni"
                tooltip="Inserire qui ulteriori informazioni utili alla comprensione del problema."
                placeholder="Ulteriori informazioni"
                :error="textarea.error"
              />
            </div>
          </div>

          <div class="flex-center top-48">
            <Btn v-if="active_mobile == 0" :bg="false" text="chiudi" @click.prevent="$router.push('/')" class="w-100 r-12" />
            <Btn v-else :bg="false" text="indietro" @click.prevent="active_mobile--" class="w-100 r-12" />
            <Btn v-if="active_mobile == 7" text="invia" :def="true" type="submit" form="form" />
            <Btn v-else class="w-100" text="avanti" :def="true" @click.prevent="validate" />
          </div>
        </template>

        <!-- Redirect -->
        <input type="hidden" name="_next" value="https://www.pegorersta.it/thanks" />
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

        <input
          v-if="system.brand.content != OTHER"
          type="hidden"
          name="Marchio"
          :value="system.brand.content"
        />
        <input
          v-else
          type="hidden"
          name="Marchio (altro)"
          :value="system.other.content"
        />
        <input type="hidden" name="Modello" :value="system.model.content" />
        <input
          type="hidden"
          name="Matricola"
          :value="system.register.content"
        />
        <input type="hidden" name="Anno installazione" :value="getSystemYear" />

        <input
          type="hidden"
          name="Ulteriori informazioni"
          :value="textarea.content"
        />
      </form>
    </template>

    <!-- Desktop/tablet footer buttons -->
    <template v-if="device != 'mobile'" #footer>
      <Btn v-if="active == 0" :bg="false" text="chiudi" @click.prevent="$router.push('/')" />
      <Btn v-else :bg="false" text="indietro" @click.prevent="active--" />
      <Btn v-if="active == 4" text="invia" :def="true" type="submit" form="form" />
      <Btn v-else text="avanti" :def="true" @click.prevent="validate" />
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
const OTHER = "Altro (non incluso)";

// ==============================
// Consts
// ==============================
const device = getViewport();

const active = ref(0);
const active_mobile = ref(0);

const steps = [
  { label: "Richiesta" },
  { label: "Nominativo" },
  { label: "Indirizzo" },
  { label: "Dettagli tecnici" },
  { label: "Opzionale" },
];
const mobile_steps = [
  { label: "Tipo di richiesta" },
  { label: "Descrizione richiesta" },
  { label: "Nominativo" },
  { label: "Contatti" },
  { label: "Indirizzo" },
  { label: "Dettagli tecnici" },
  { label: "Dettagli tecnici" },
  { label: "Opzionale" },
];

const request = reactive({
  options: ["Riparazione", "Manutenzione", "Informazioni generali"],
  selected: "",
  content: "",
  error: false,
  request_description_error: false, //mobile only
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

// RegEx
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telReg = /^(?:(?:\+|00)39)?\s*(?:\d{2}\s*){2}\d{6,7}$/;
const houseNumberReg = /^\d+(\s*[a-zA-Z]?)$/;

const isEmailValid = computed(
  () => email.content.length && emailReg.test(email.content)
);
const isTelValid = computed(
  () => tel.content.length && telReg.test(tel.content)
);
const isHouseNumberValid = computed(
  () => houseNumber.content && houseNumberReg.test(houseNumber.content)
);
const isStepZeroValid = computed(
  () => request.selected.length && request.content.length
);
const isStepOneValid = computed(
  () =>
    name.content &&
    surname.content &&
    ((email.content && isEmailValid.value) || (tel.content && isTelValid.value))
);
const isStepTwoValid = computed(
  () => address.content && city.content && isHouseNumberValid.value
);
const isStepThreeValid = computed(
  () =>
    (system.brand.content.length && system.brand.content != OTHER) ||
    (system.brand.content == OTHER && system.other.content.length)
);

const getEmailObject = computed(
  () => request.selected + " - " + name.content + " " + surname.content
);
const getSystemYear = computed(() => {
  let year = parseInt(system.year.content);
  return `${year}, (${new Date().getFullYear() - year} anni fa)`;
});

// ==============================
// Functions
// ==============================
function validate() {
  if (device.value == "mobile") {
    switch (active_mobile.value) {
      case 0:
        if (request.selected.length) {
          active_mobile.value++;
          return;
        }
        request.error = true;
        break;
      case 1:
        if (request.content.length) {
          active_mobile.value++;
          return;
        }
        request.request_description_error = true;
        break;
      case 2:
        if (name.content.length && surname.content.length) {
          active_mobile.value++;
          return;
        }
        name.error = !name.content ? true : false;
        surname.error = !surname.content ? true : false;
        break;
      case 3:
        if (
          (email.content && isEmailValid.value) ||
          (tel.content && isTelValid.value)
        ) {
          active_mobile.value++;
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
          active_mobile.value++;
          return;
        }
        address.error = !address.content ? true : false;
        city.error = !city.content ? true : false;
        houseNumber.error = !isHouseNumberValid.value ? true : false;
        break;
      case 5:
        if (
          (system.brand.content.length && system.brand.content != OTHER) ||
          (system.brand.content == OTHER && system.other.content.length)
        ) {
          active_mobile.value++;
          return;
        }
        system.brand.error = !system.brand.content ? true : false;
        system.other.error = !system.other.content ? true : false;
        break;
      case 6:
        active_mobile.value++;
        return;
      case 7:
        active_mobile.value++;
        return;
    }
    return;
  }

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
    height: 100%;
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

  &.mobile {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
  }
}
</style>
