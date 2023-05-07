<!-- https://ja.vuejs.org/guide/essentials/lifecycle.html -->
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  setup() {
    console.log('setup')
  },
  beforeCreate() {
    console.log('before create')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('before mount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('before update')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('before unmount')
  },
  unmounted() {
    console.log('unmounted')
  }
}
</script>

<template>
  <h1>ライフサイクルフック</h1>
  <button @click="count++">{{ count }}</button>
</template>
