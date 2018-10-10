import Vue from 'vue'
import App from './App.vue'
import router from './routerConfig'
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
