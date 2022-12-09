import "./styles/lib/tailwind.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { createNaiveMeta } from "./core/naiveMeta";

const app = createApp(App);

app.use(createPinia());
app.use(router);
createNaiveMeta();
app.mount("#app");
