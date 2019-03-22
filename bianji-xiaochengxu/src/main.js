import Vue from 'vue'
import App from './App'
import router from './router'
import VueDND from 'awe-dnd'
import DatePicker from 'element-ui'

Vue.use(VueDND)
Vue.use(DatePicker)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
