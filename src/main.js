import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import '@/assets/app.scss'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
