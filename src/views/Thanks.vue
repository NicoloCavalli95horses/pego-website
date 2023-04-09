<template>
  <Modal
    title="Grazie per averci contattato"
    :width="device != 'mobile' ? 50 : undefined"
    :height="device != 'mobile' ? 20 : undefined"
    :click_out_close="true"
    :full_size="device == 'mobile'"
    @closed="$router.push('/')"
  >
    <template #default>
      <h4>
        Il tuo messaggio è stato inviato con successo, verrai ricontattato nei
        prossimi giorni.
      </h4>
    </template>
    <template #footer>
      <Btn :bg="false" text="chiudi" @click="$router.push('/')" />
    </template>
  </Modal>
</template>

<script setup>
//==============================
// Consts
//==============================
import Modal from "../components/Modal.vue";
import Btn from "../components/Btn.vue";
import { getViewport } from "../utils/screen_size.js";

// ==============================
// Consts
// ==============================
const device = getViewport();
</script>
