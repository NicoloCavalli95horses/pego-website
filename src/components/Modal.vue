<template>
  <teleport to=".modals">
    <div class="backdrop" v-prevent-body-overflow @click="onBackdropClick()">
      <div
        ref="modal_ref"
        class="modal"
        :class="{ 'full-size' : full_size }"
        :style="{ 'width': `${width}rem`, 'height': `${height}rem` }"
        @click="(e) => e.stopPropagation()"
      >
        <!-- Header -->
        <header>
          <h3>{{ title }}</h3>
          <div class="top-24 bottom-24">
            <slot name="header" />
          </div>
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
import { reactive } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";

// ==============================
// Props
// ==============================
const props = defineProps({
  title: String,
  width: Number,
  height: Number,
  click_out_close: Boolean,
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
  if (props.click_out_close) {
    emit("closed");
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
.backdrop {
  .modal {
    border-radius: var(--radius-s);
    padding: 2.2rem 2.6rem;
    justify-content: space-around;
    gap: 2.2rem;
    background-color: var(--background);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: var(--box-shadow);
    footer {
      align-self: flex-end;
    }
    &.full-size {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: none;
      box-sizing: border-box;

      .body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
}
</style>
