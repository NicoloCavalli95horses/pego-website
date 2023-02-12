<template>
  <!-- Nav bar -->
  <nav>
    <RouterLink to="/">
      <span>Home</span>
    </RouterLink>
    <RouterLink to="/about">
      <span>About</span>
    </RouterLink>
    <RouterLink to="/faq">
      <span>FAQ</span>
    </RouterLink>
    <Btn text="contattaci" :def="true" @click="show.modal = true" />
  </nav>

  <!-- Contact modal -->
  <teleport to=".modals" v-if="show.modal">
    <Modal
      :click_out_close="true"
      @close="show.modal = false"
      title="Contattaci"
    >
      <template #default>
        <ContactForm />
      </template>
      <template #footer>
        <div class="flex-center">
          <Btn text="chiudi" @click="show.modal = false" />
          <Btn
            class="l-12"
            text="conferma"
            :def="true"
            @click="show.modal = false"
          />
        </div>
      </template>
    </Modal>
  </teleport>

  <!-- Space from navbar -->
  <div :style="{ width: '100%', height: NAV_HEIGHT }" />

  <!-- Default margins -->
  <div class="margins">
    <RouterView />
  </div>
</template>
<script setup>
//==================================
// Import
//==================================
import { reactive } from "@vue/reactivity";
import { RouterLink, RouterView } from "vue-router";
import Btn from "./components/Btn.vue";
import Modal from "./components/Modal.vue";
import ContactForm from "./components/ContactForm.vue";

//==================================
// Const
//==================================
const NAV_HEIGHT = "120px";
const show = reactive({
  modal: false,
});
</script>

<style lang="scss" scoped>
.modals {
  overflow: hidden;
}
nav {
  position: fixed;
  width: 100%;
  height: v-bind("NAV_HEIGHT");
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.4);
  span {
    text-transform: uppercase;
    letter-spacing: 5px;
    padding: 8px 12px;
    cursor: pointer;
  }
}

.margins {
  margin: 46px;
}
</style>
