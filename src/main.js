import Vue from 'vue'
import App from './App.vue'
import titleMixin from './mixin'

Vue.mixin(titleMixin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
