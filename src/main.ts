import { createApp } from "vue";
import router from "./router";
import { createPinia } from 'pinia'
import App from "./app.vue";

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
