<!-- https://ja.vuejs.org/guide/essentials/event-handling.html -->
<script>
export default {
  data() {
    return {
      count: 0,
      name: 'Vue.js'
    }
  },
  methods: {
    greet(event) {
      alert(`Hello ${this.name}!`)
      if (event) {
        alert(event.target.tagName)
      }
    },
    say(message) {
      alert(message)
    },
    warn(message, event) {
      if (event) {
        event.preventDefault()
        alert(event.target.tagName)
      }
      alert(message)
    },
    doThis() {
      console.log('do this')
    },
    onSubmit() {
      console.log('on submit')
    },
    doThat() {
      console.log('do that')
    },
    child() {
      console.log('child')
    },
    onScroll() {
      console.log('on scroll')
    },
    onPageDown() {
      console.log('on page down')
    },
    clear() {
      console.log('clear')
    },
    doSomething() {
      console.log('do something')
    },
    onClick() {
      console.log('on click')
    },
    onCtrlClick() {
      console.log('on ctrl click')
    }
  }
}
</script>

<template>
  <h1>イベントハンドリング</h1>

  <h2>インラインハンドラー</h2>
  <button @click="count++">Add 1</button>
  <p>Count is: {{ count }}</p>

  <h2>メソッドハンドラー</h2>
  <button @click="greet">Greet</button>

  <h2>インラインハンドラー下でのメソッドの呼び出し</h2>
  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>

  <h2>インラインハンドラーのイベント引数へのアクセス</h2>
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit ($event)
  </button>
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit (arrow function)
  </button>

  <h2>イベント修飾子</h2>
  <a @click.stop="doThis">do this</a><br>
  <br>
  <form @submit.prevent="onSubmit">
    <button>submit</button>
  </form>
  <br>
  <a @click.stop.prevent="doThat">do that</a><br>
  <br>
  <form @submit.prevent>
    <button>submit</button>
  </form>
  <br>
  <div @click.self="doThat">
    self
    <div>child</div>
  </div>
  <div @click.capture="doThis">
    <div @click="child">child</div>
  </div>
  <a @click.once="doThis">once</a><br>
  <br>
  <div @scroll.passive="onScroll">...</div>

  <h2>キー修飾子</h2>
  <input @keyup.enter="onSubmit" placeholder="Enter" /><br>
  <input @keyup.page-down="onPageDown" placeholder="PageDown" /><br>
  <br>
  <input @keyup.alt.enter="clear" placeholder="Alt + Enter" /><br>
  <div @click.ctrl="doSomething">Do something</div>

  <button @click.ctrl="onClick">A</button><br>
  <button @click.ctrl.exact="onCtrlClick">A</button><br>
  <button @click.exact="onClick">A</button><br>
  <br>
  <button @click.right="onClick">mouse right</button><br>
</template>
