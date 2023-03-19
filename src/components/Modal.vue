<template>
  <teleport to=".modals">
    <div class="backdrop" v-prevent-body-overflow @click="onBackdropClick()">
      <div
        ref="modal_ref"
        class="modal"
        :class="{ 'full-size' : full_size }"
        :style="{ 'width': `${width}px`, 'height': `${height}px` }"
        @click="(e) => e.stopPropagation()"
      >
        <!-- Header -->
        <header>
          <h1>{{ title }}</h1>
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
    display: flex;
    flex-direction: column;
    padding: 2.2rem 2.6rem;
    justify-content: space-around;
    gap: 2.2rem;
    background-color: var(--background);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 350px;
    .body {
      display: flex;
      align-items: center;
    }

    footer {
      align-self: flex-end;
    }
    &.full-size {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      footer {
        margin-bottom: 4.5rem;
      }
    }
  }
}
</style>
