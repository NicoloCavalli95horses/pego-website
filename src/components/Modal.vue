<template>
  <teleport to=".modals">
    <div class="backdrop" v-prevent-body-overflow @click="onBackdropClick()">
      <div
        ref="modal_ref"
        class="modal"
        data-cy="modal"
        :class="{ 'full-size': full_size }"
        :style="{ 'width': `${width}rem`, 'height': `${height}rem` }"
        @click="(e) => e.stopPropagation()"
      >
        <div v-if="close_btn" class="top-right-corner" @click="emit('closed')">
          <Icon icon="fa-solid fa-xmark" class="svg-24" />
        </div>

        <!-- header -->
        <header>
          <h3>{{ title }}</h3>
          <div class="top-24 bottom-24">
            <slot name="header" />
          </div>
        </header>
        <!-- content -->
        <div class="content">
          <slot />
        </div>
        <!-- footer -->
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
import { reactive } from "vue";
import { onMounted, onUnmounted } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// ==============================
// Props
// ==============================
const props = defineProps({
  title: String,
  width: Number,
  height: Number,
  click_out_close: Boolean,
  full_size: Boolean,
  close_btn: Boolean,
});

const emit = defineEmits(["closed"]);

//==================================
// Consts
//==================================
library.add(fas);
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
$header-h: 6rem;
$footer-h: 8rem;
$gap: 2.2rem;
.backdrop {
  .modal {
    border-radius: var(--radius-s);
    padding: $gap 2.6rem;
    justify-content: space-around;
    gap: $gap;
    background-color: var(--background);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: var(--box-shadow);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    header {
      width: 100%;
      min-height: $header-h;
      height: $header-h;
    }
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      max-height: calc(100% - $header-h - $footer-h);
      height: calc(100% - $header-h - $footer-h);
    }

    footer {
      width: 100%;
      min-height: $footer-h;
      height: $footer-h;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }

    &.full-size {
      width: 100%;
      min-height: 100%;
      top: 0;
      left: 0;
      transform: none;
      box-sizing: border-box;
    }
  }
}
</style>
