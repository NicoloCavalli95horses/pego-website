import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
app.use(createPinia());

app.directive("prevent-body-overflow", {
  beforeMount(el, binding) {
    document.querySelector("body").style.overflow = "hidden";
  },
  beforeUnmount(el, binding) {
    document.querySelector("body").style.overflow = "auto";
  },
});

app.directive('click-outside', {
  mounted(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
});

app.use(router);
app.component("Icon", FontAwesomeIcon);
app.mount("#app");
