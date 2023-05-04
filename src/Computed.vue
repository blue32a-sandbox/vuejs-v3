<!-- https://ja.vuejs.org/guide/essentials/computed.html -->
<script>
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    publishedBooksMessage() {
      console.log('publishedBooksMessage')
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    now() {
      const now = Date.now()
      console.log(now)
      return now
    },
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName
      },
      set(newValue) {
        ;[this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  },
  methods: {
    calculateBooksMessage() {
      console.log('calculateBooksMessage')
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}
</script>

<template>
  <h1>算出プロパティ</h1>
  <p>Has published books:</p>
  <span>算出プロパティ: {{ publishedBooksMessage }} {{ publishedBooksMessage }}</span><br>
  <span>メソッド: {{ calculateBooksMessage() }} {{ calculateBooksMessage() }}</span>
  <p>now:</p>
  <span>{{ now }} {{ now }} {{ now }}</span><br>
  <p>name:</p>
  <span>{{ fullName }}</span><br>
  <span>{{ fullName = 'fuga hoge' }}</span><br>
  <span>{{ fullName }}</span>
</template>
