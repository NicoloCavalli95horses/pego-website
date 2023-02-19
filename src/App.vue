<template>
  <!-- Nav bar -->
  <NavBar />

  <!-- Body -->
  <div class="margins" :style="{ 'overflow' : show.modal ? 'hidden' : 'auto' }">
    <RouterView />
  </div>
  
  <!-- Footer -->
  <Footer />

  <!-- CTA -->
  <Btn class="fix-bottom-right" text="contattaci" :def="true" @click="show.modal = true" />

  <!-- Contact modal -->
  <teleport to=".modals" v-if="show.modal">
    <Modal :click_out_close="true" @close="show.modal = false" title="Contattaci">
      <template #default>
        <ContactForm />
      </template>
      <template #footer>
        <div class="flex-center">
          <Btn :bg="false" text="chiudi" @click="show.modal = false" />
          <Btn class="l-12" text="invia" :def="true" @click="show.modal = false" />
        </div>
      </template>
    </Modal>
  </teleport>

</template>
<script setup>
//==================================
// Import
//==================================
import { reactive, ref } from "@vue/reactivity";
import { RouterLink, RouterView } from "vue-router";
import Btn from "./components/Btn.vue";
import Modal from "./components/Modal.vue";
import ContactForm from "./components/ContactForm.vue";
import NavBar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue"
import { onMounted, watch } from "@vue/runtime-core";

//==================================
// Const
//==================================
const show = reactive({
  modal: false,
});
const body_ref = ref( undefined );

//==================================
// Life cycle
//==================================
onMounted(() => {
  body_ref.value = document.querySelector('body');
})

//==================================
// Watch
//==================================
watch(() => show.modal, () => {
  show.modal ? body_ref.value.classList.add('no-overflow') : body_ref.value.classList.remove('no-overflow'); 
})
</script>

<style lang="scss" scoped>
.modals {
  overflow: hidden;
}
.margins {
  margin: 2.3rem;
}
</style>
