//引入初始化样式文件
import "@/styles/common.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { lazyPlugin } from "@/directives/index";
import { componentPlugin } from "@/components/index";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia)
app.use(router);
app.use(lazyPlugin);
//注册通用组件的插件
app.use(componentPlugin);

app.mount("#app");
