<template>
  <Modal
    title="Grazie per averci contattato"
    :width="50"
    :height="25"
    :click_out_close="true"
    @closed="$router.push('/')"
  >
    <template #default>
      <h3>
        Il tuo messaggio è stato inviato con successo, verrai ricontattato nei
        prossimi giorni.
      </h3>
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

</script>
