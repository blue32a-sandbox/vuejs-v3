<!-- https://ja.vuejs.org/guide/essentials/list.html -->
<script>
import Todo from './components/Todo.vue';

export default {
  components: { Todo },
  data() {
    return {
      parentMessage: 'Parent',
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      todos: [
        { id: 3, name: 'hoge' },
        { id: 2, name: 'bar' },
        { id: 1, name: 'foo' }
      ],
      numbers: [1, 2, 3, 4, 5, 6, 7],
      sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
    }
  },
  methods: {
    todoSort() {
      this.todos.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        }
        return 0;
      })
    },
    even(numbers) {
      return numbers.filter(number => number % 2 === 0)
    }
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(n => n % 2 === 0)
    }
  }
}
</script>

<template>
  <h1>リストレンダリング</h1>

  <h2>v-for</h2>
  <ul>
    <li v-for="(item, index) in items">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
  </ul>

  <h2>v-for をオブジェクトに適用する</h2>
  <ul>
    <li v-for="(value, key, index) in myObject">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>

  <h2>v-for で範囲を使用する</h2>
  <span v-for="n in 10">{{ n }}</span>

  <h2>template に v-for を適用する</h2>
  <ul>
    <template v-for="item in items">
      <li>{{ item.message }}</li>
      <li class="divider" role="presentation"></li>
    </template>
  </ul>

  <h2>key による状態管理</h2>
  <button @click="todoSort">sort</button>
  <ul>
    <template v-for="todo in todos" :key="todo.id">
      <li>{{ todo.id }} {{ todo.name }}</li>
    </template>
  </ul>

  <h2>v-for をコンポーネントに適用する</h2>
  <Todo
    v-for="todo in todos"
    :todo="todo"
    :key="todo.id"
  />

  <h2>フィルタリング/並べ替えの結果を表示する</h2>
  <ul>
    <li v-for="n in evenNumbers">{{ n }}</li>
  </ul>
  <ul v-for="numbers in sets">
    <li v-for="n in even(numbers)">{{ n }}</li>
  </ul>
</template>
