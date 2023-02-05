import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init();
Vue.config.productionTip = false
Vue.prototype.$https = axios.create({
  baseURL: '//helaleman.ir'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
