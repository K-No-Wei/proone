import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import '@/plugins/element'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
import service from './service'
Vue.config.productionTip = false
// 可在全局使用
Vue.prototype.service = service

Vue.use(ElementUI)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
