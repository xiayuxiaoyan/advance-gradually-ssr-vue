// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import CreateRouter from './router'

Vue.config.productionTip = false

export default function () {
  const router = CreateRouter()
  /* eslint-disable no-new */
  const app = new Vue({
    router,
    render: h => h(App)
  })
  return {app, router}
}
