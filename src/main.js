import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import VueRouter from "vue-router";
import { sync } from "vuex-router-sync";
import store from "./store/store";
import router from "./router";

import "ant-design-vue/dist/antd.less";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueRouter);

sync(store, router);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
