import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App),
}).$mount('#app')

//import 'plugins/bootstrapVue'

Vue.config.productionTip = false

new Vue({
  render: h => h(),
}).$mount('#app')
