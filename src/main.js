import Vue from 'vue'
import App from './App'
import router from './router'
import VueDND from 'awe-dnd'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// DatePicker


Vue.use(VueDND)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
