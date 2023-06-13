<template>
  <teleport to=".modals">
    <div class="backdrop" v-prevent-body-overflow @click="onBackdropClick()">
      <div
        ref="modal_ref"
        class="modal"
        data-cy="modal"
        :class="{ 'full-size': full_size }"
        :style="{ 
          'max-width': `${ max_width }`,
          'min-width': `${ min_width }`,
          'max-height': `${ max_height }`,
          'min-height': `${ min_height }`
        }"
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
        <!-- scrollable-content -->
        <div :class="['scrollable-content', { 'no-padding' : no_scrollable_padding, 'no-scrollbar' : no_scrollbar }]">
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
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";


// ==============================
// Props
// ==============================
const props = defineProps({
  title: String,
  max_width: String,  // em or %
  min_width: String,
  max_height: String,
  min_height: String,
  click_out_close: Boolean,
  full_size: Boolean,
  close_btn: Boolean,
  no_scrollbar: Boolean,
  no_scrollable_padding: Boolean,
});

const emit = defineEmits(["closed"]);


//==================================
// Consts
//==================================
library.add(fas);


//==================================
// Functions
//==================================
function onBackdropClick() {
  if (props.click_out_close) {
    emit("closed");
  }
}


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
    width: 100%;
    height: 100%;
    header {
      width: 100%;
    }
    .scrollable-content {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      max-height: calc(100% - $header-h - $footer-h);
      height: calc(100% - $header-h - $footer-h);
      overflow-y: auto;
      padding: 0 2rem; // scrollbar padding
      &.no-padding {
        padding: 0;
      }
      &.no-scrollbar {
        &::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
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
