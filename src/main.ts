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

import "vuetify/dist/vuetify.css";
import colors from "vuetify/es5/util/colors";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "./assets/css/style.sass";
//github.com/CompuIves/codesandbox-client/issues/646
https: // import "./assets/css/main.styl";
Vue.use(Vuetify, {
  theme: {
    primary: colors.purple,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
});
// Vue.use(Vuetify);
Vue.use(VuetifyDialog);

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
