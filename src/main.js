import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { VBPopover } from 'bootstrap-vue'

// Note: Vue automatically prefixes the directive name with 'v-'
Vue.directive('b-popover', VBPopover)
Vue.config.productionTip = false;

// Directive qui permet de générer le contenu du footer
Vue.directive("footer-content", {
  bind(el, binding) {
    let today = new Date();
    today = today.getFullYear();
    let footerTxt = `Copyright © ${today} Quebec Inc. - ${binding.value}- All Rights Reserved <code><a href="https://choosealicense.com/licenses/mit/" target="_blank">MIT License</a></code>`
    el.innerHTML = footerTxt
  },
});


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
