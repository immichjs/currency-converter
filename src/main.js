import Vue from 'vue'
import App from './App.vue'
import titleMixin from './mixin'
import VueCurrencyFilter from 'vue-currency-filter'

import store from './store'

Vue.use(VueCurrencyFilter,  {
  symbol : '$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true,
  avoidEmptyDecimals: undefined,
})
Vue.mixin(titleMixin)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
