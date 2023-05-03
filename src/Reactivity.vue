<!-- https://ja.vuejs.org/guide/essentials/reactivity-fundamentals.html -->
<script>
import { nextTick } from 'vue'
import { debounce } from 'lodash-es'

export default {
  data() {
    return {
      count: 0,
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      }
    }
  },
  methods: {
    async increment() {
      this.count++;

      console.log('before nextTick', document.getElementById('counter').textContent)

      await nextTick()

      console.log('after nextTick', document.getElementById('counter').textContent)
    },
    mutateDeeply() {
      this.obj.nested.count++
      this.obj.arr.push('baz')
    },
    click() {
      console.log('click!!!')
    }
  },
  mounted() {
    console.log(this.count);
  },
  created() {
    this.debouncedClick = debounce(this.click, 500)
  },
  unmounted() {
    this.debouncedClick.cancel()
  }
}
</script>

<template>
  <h1>Reactivity</h1>
  <button id="counter" @click="increment">{{ count }}</button><br>
  <br>
  <button @click="mutateDeeply">mutate deeply</button>
  <p>{{ obj.nested.count }}</p>
  <p>{{ obj.arr.join(' ') }}</p>
  <br>
  <button @click="debouncedClick">debounced click</button>
</template>
