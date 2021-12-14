import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from './http'
import beforeEach from './router/beforeEach'

Vue.config.productionTip = false
Vue.use(Elementui)
Vue.prototype.$http = http
beforeEach(router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
