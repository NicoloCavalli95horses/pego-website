<template>
  <div class="w-100 h-100" />
  <Modal
    title="Grazie per averci contattato"
    :max_width="device != 'mobile' ? '40rem' : undefined"
    :min_width="device != 'mobile' ? '30em' : undefined"
    :max_height="device != 'mobile' ? '25rem' : undefined"
    :click_out_close="true"
    :full_size="device == 'mobile'"
    :no_scrollable_padding="true"
    @closed="$router.push('/')"
    class="modal-wrapper"
  >
    <p> Il tuo messaggio è stato inviato con successo, verrai ricontattato il prima possibile. </p>
    <Btn class="btn" :bg="false" text="chiudi" @click="$router.push('/')" />
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

<style lang="scss" scoped>
.btn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1.2rem;
}
</style>
