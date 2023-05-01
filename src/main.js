import { createApp } from 'vue/dist/vue.esm-bundler'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})
app.mount('#app')

const app2 = createApp({
  data() {
    return {
      count: 0
    }
  }
})
app2.mount('#app2')
