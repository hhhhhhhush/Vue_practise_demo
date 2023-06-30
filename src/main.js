import Vue from 'vue'
import App from './App.vue'
// 全局组件
// 1.导入组件
import MyButton from '@/components/MyButton.vue'

Vue.config.productionTip = false

// 2.注册组件
// Vue.component('标签名',组件名)
Vue.component('MyButton', MyButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
