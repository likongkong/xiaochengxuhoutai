import Vue from 'vue'
import App from './App'
import router from './router'
import VueDND from 'awe-dnd'

Vue.use(VueDND)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
