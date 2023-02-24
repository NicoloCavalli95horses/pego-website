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
app.use(router);
app.component("Icon", FontAwesomeIcon);
app.mount("#app");
