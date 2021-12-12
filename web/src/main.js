import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import axios from "axios";
import http from './http'

Vue.prototype.$http = http

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});