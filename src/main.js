import Vue from 'vue'
import App from './App.vue'
//import '.bootstrapVue/plugins/bootstrapVue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
