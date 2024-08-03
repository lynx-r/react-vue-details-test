// import { createRoot } from "react-dom/client";
import { createPinia } from "pinia";
import { createRoot } from "react-dom/client";
import "virtual:uno.css";
import { createApp } from "vue";
import { default as ReactApp } from "./react/App";
import "./style.scss";
import { default as VueApp } from "./vue/App.vue";

const pinia = createPinia();

const app = createApp(VueApp);
app.use(pinia);
app.mount("#appVue");

// Render your React component instead
const root = createRoot(document!.getElementById("appReact"));
root.render(<ReactApp />);
