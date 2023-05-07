<!-- https://ja.vuejs.org/guide/essentials/watchers.html -->
<script>
export default {
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
      someObject: {
        foo: 'foo'
      },
      eager: '',
      timingPre: '',
      timingPost: '',
      thisWatch: '',
      stopping: '',
      watchStopping: undefined
    }
  },
  watch: {
    question(newQuestion, oldQuestion) {
      console.log('watch question', {newQuestion, oldQuestion})
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    },
    someObject: {
      handler(newValue, oldValue) {
        // 注意：オブジェクト自体が置き替わらない限り、
        // ネストした変更では、 `newValue` は、`oldValue` と等しくなる。
        console.log(newValue == oldValue)
      },
      deep: true
    },
    eager: {
      handler(newValue) {
        console.log('watch eager', newValue)
      },
      immediate: true
    },
    timingPre: {
      handler() {
        console.log('watch timing pre')
      },
    },
    timingPost: {
      handler() {
        console.log('watch timing post')
      },
      flush: 'post'
    }
  },
  methods: {
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    }
  },
  beforeUpdate() {
    console.log('before update')
  },
  updated() {
    console.log('updated')
  },
  created() {
    this.$watch('thisWatch', () => console.log('watch thisWatch'))
    const stoppingUnwatch = this.$watch('stopping', () => {
      console.log('watch stopping')
      stoppingUnwatch()
    })
  }
}
</script>

<template>
  <h1>ウォッチャー</h1>

  <h2>基本の例</h2>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>

  <h2>ディープ・ウォッチャー</h2>
  <input v-model="someObject.foo" />

  <h2>即時ウォッチャー</h2>
  <input v-model="eager" />

  <h2>コールバックが実行されるタイミング</h2>
  <input v-model="timingPre" placeholder="timing pre" /><br>
  <input v-model="timingPost" placeholder="timing post" /><br>

  <h2>this.$watch()</h2>
  <input v-model="thisWatch" />

  <h2>ウォッチャーの停止</h2>
  <input v-model="stopping" />
</template>
