import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.directive("footer-content", {
  bind(el, binding) {
    let today = new Date();
    today = today.getFullYear();
    let footerTxt = `Copyright © ${today} Quebec Inc. - MLWeb - All Rights Reserved`
    if (binding.value == "wide") {
      console.log(today);
    }
    el.textContent = footerTxt
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
