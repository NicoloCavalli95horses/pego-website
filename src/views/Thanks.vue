<template>
  <Modal
    title="Grazie per averci contattato"
    :width="device != 'mobile' ? 50 : undefined"
    :click_out_close="true"
    :full_size="device == 'mobile'"
    @closed="$router.push('/')"
  >
    <template #default>
      <p>
        Il tuo messaggio è stato inviato con successo, verrai ricontattato nei
        prossimi giorni.
      </p>
    </template>
    <template #footer>
      <div class="btn top-24">
        <Btn :bg="false" text="chiudi" @click="$router.push('/')" />
      </div>
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

<style lang="scss" scoped>
.btn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

</style>