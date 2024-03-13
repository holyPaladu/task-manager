import { createApp } from "vue";
import "@/style/style.scss";
import App from "./App.vue";
import axios from "axios";
import router from "./router.js";
import store from "./store/index.js";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

createApp(App).use(router, axios).use(store).mount("#app");
