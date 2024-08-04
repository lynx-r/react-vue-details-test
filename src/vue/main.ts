import { createPinia } from "pinia";
import { createApp } from "vue";
import { default as VueApp } from "./App.vue";

const pinia = createPinia();

const app = createApp(VueApp);
app.use(pinia);
app.mount("#appVue");
