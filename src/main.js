// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import CreateRouter from './router/index'
import createStore from './store/index'
import { sync } from 'vuex-router-sync'

Vue.config.devtools = true

Vue.config.productionTip = false

export default function () {
  const router = CreateRouter()
  const store = createStore()
  // 同步路由状态(route state)到 store
  sync(store, router)
  /* eslint-disable no-new */
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return {app, router, store}
}
