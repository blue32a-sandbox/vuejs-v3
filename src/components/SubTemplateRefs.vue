<script>
export default {
  expose: ['publicData', 'publicMethod'],
  data() {
    return {
      publicData: 'foo',
      privateData: 'bar'
    }
  },
  methods: {
    publicMethod() {
      console.log('public method')
    },
    privateMethod() {
      console.log('private method')
    }
  }
}
</script>

<template>
  <input />
</template>
