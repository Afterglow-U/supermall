import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue()


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

// 解决移动端300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

// 使用图片懒加载插件 img用v-lazy
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/placeholder.png')
})

// 安装toast插件
import toast from 'components/common/toast/index'
Vue.use(toast)
