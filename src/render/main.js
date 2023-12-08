import Vue from 'vue'
import App from './App.vue'
import {a} from './util'

console.log(a)

new Vue({
  render: h => h(App)
}).$mount('#app')
