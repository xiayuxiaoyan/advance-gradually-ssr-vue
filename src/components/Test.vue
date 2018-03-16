<template>
  <div>
    Just a test page.
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div><h2>{{mode}}</h2></div>
    <div><span>{{count}}</span></div>
    <div><button @click="count++">+1</button></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      mode: process.env.VUE_ENV === 'server' ? 'server' : 'client',
      count: 2
    }
  },
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem', 'id1')
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return this.$store.state.items[this.$route.params.id]
    }
  }
}
</script>
