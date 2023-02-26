<template>
  <teleport to=".modals">
    <div class="backdrop" v-prevent-body-overflow @click="onBackdropClick()">
      <div
        ref="modal_ref"
        class="modal"
        :class="{ 'mobile': screen.width <= 500 }"
        :style="{ 'width': `${width}px`, 'height': `${height}px` }"
        @click="e => e.stopPropagation()"
      >
        <!-- Header -->
        <header>
          <h2>{{ title }}</h2>
        </header>
        <!-- Body -->
        <div class="body">
          <slot />
        </div>
        <!-- Footer -->
        <footer>
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </teleport>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { reactive, ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";

// ==============================
// Props
// ==============================
const props = defineProps({
  title: String,
  width: Number,
  click_out_close: Boolean,
  height: Number,
  full_size: Boolean,
});

const emit = defineEmits(["closed"]);

//==================================
// Consts
//==================================
const screen = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
});

//==================================
// Functions
//==================================
function onResize() {
  screen.width = window.innerWidth;
  screen.height = window.innerHeight;
}

function onBackdropClick() {
  if ( props.click_out_close ){
    emit('closed');
  }
}

//==================================
// Life cycle
//==================================
onMounted(() => {
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--radius-s);
  background-color: var(--dark-grey);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2.2rem 2.6rem;
  gap: 2.2rem;
  background-color: var(--background);
  &.mobile {
    width: 80%;
  }
  .body {
    display: flex;
    align-items: center;
    height: 100%;
  }

  footer {
    align-self: flex-end;
  }
}
</style>
