<!-- https://ja.vuejs.org/guide/essentials/template-refs.html -->
<script>
import SubTemplateRef from './components/SubTemplateRefs.vue'

export default {
  components: {
    SubTemplateRef
  },
  data() {
    return {
      list: ['one', 'two', 'three'],
      input: undefined
    }
  },
  mounted() {
    this.$refs.input.focus()

    console.log('items', this.$refs.items)

    console.log('child', this.$refs.child)
    console.log('child publicData', this.$refs.child.publicData)
    this.$refs.child.publicMethod()
    console.log('child privateData', this.$refs.child.privateData) // undefined
    // this.$refs.child.privateMethod()
  },
  methods: {
    inputRef(el) {
      this.input = el
    },
    showInputRef() {
      console.log(this.input)
    }
  }
}
</script>

<template>
  <h1>テンプレート参照</h1>

  <h2>参照へのアクセス</h2>
  <input ref="input" />

  <h2>v-for の中の参照</h2>
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>

  <h2>関数を使った参照</h2>
  <input :ref="inputRef" />
  <button @click="showInputRef">Show</button>

  <h2>コンポーネントでの参照</h2>
  <SubTemplateRef ref="child" />
</template>
