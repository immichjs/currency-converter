import Vue from 'vue'
import App from './App.vue'
import titleMixin from './mixin'

import store from './store'

Vue.mixin(titleMixin)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
