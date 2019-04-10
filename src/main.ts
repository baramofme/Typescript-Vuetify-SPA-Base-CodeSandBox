// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import * as Vue from "vue";
// import { Vue } from "vue-property-decorator";
import * as VueRouter from "vue-router";
import * as Vuetify from "vuetify";
import * as App from "./App";
import { router } from "./router";
import * as VuetifyDialog from "vuetify-dialog";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VuetifyDialog);

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
