import { createPinia } from "pinia";
import { createApp } from "vue";
import { default as VueApp } from "./App.vue";
import vuexStore from "./store";

const pinia = createPinia();

const app = createApp(VueApp);
app.use(pinia);
app.use(vuexStore);
app.mount("#appVue");
