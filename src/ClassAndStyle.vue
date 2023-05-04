<!-- https://ja.vuejs.org/guide/essentials/class-and-style.html -->
<script>
import SubClassAndStyle from './components/SubClassAndStyle.vue'

export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      error: null,
      classObject: {
        active: true,
        'text-danger': false
      },
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'red',
        fontSize: '13px'
      }
    }
  },
  computed: {
    classObjectMethod() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  },
  components: {
    SubClassAndStyle
  }
}
</script>

<template>
  <h1>クラスとスタイルのバインディング</h1>

  <h2>HTML クラスのバインディング</h2>

  <p>binding to objects:</p>
  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"
  >static active</div>
  <div :class="classObject">active</div>
  <div :class="classObjectMethod">active</div>

  <p>binding to arrays:</p>
  <div :class="[activeClass, errorClass]">active text-danger</div>
  <div :class="[isActive ? activeClass : '', errorClass]">active text-danger</div>
  <div :class="[{ active: isActive }, errorClass]">active text-danger</div>

  <p>with components:</p>
  <SubClassAndStyle class="baz boo" />

  <h2>インラインスタイルのバインディング</h2>

  <p>binding to objects:</p>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">red 30px</div>
  <div :style="styleObject">red 30px</div>

  <p>binding to arrays:</p>
  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">display: -webkit-box -ms-flexbox flex</div>
</template>
