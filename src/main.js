import Vue from 'vue'
import App from './App'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
