<!-- https://ja.vuejs.org/guide/essentials/component-basics.html -->
<script>
import AlertBox from './components/AlertBox.vue'
import BlogPost from './components/BlogPost.vue'
import ButtonCounter from './components/ButtonCounter.vue'
import ToggleOff from './components/ToggleOff.vue'
import ToggleOn from './components/ToggleOn.vue'

export default {
  components: {
    AlertBox,
    BlogPost,
    ButtonCounter,
    ToggleOff,
    ToggleOn
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1,
      toggle: 'off'
    }
  },
  computed: {
    dynamicComponent() {
      return this.toggle === 'on' ? ToggleOn : ToggleOff
    }
  },
  methods: {
    toggleOnOff() {
      if (this.toggle === 'on') {
        this.toggle = 'off'
      } else {
        this.toggle = 'on'
      }
    }
  }
}
</script>

<template>
  <h1>コンポーネントの基礎</h1>

  <h2>コンポーネントの使用</h2>
  <ButtonCounter />
  <ButtonCounter />
  <ButtonCounter />

  <h2>プロパティの受け渡し</h2>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    />
  </div>

  <h2>スロットを使ったコンテンツ配信</h2>
  <AlertBox>
    Something bad happened.
  </AlertBox>

  <h2>動的コンポーネント</h2>
  <component :is="dynamicComponent" />
  <button @click="toggleOnOff">Toggle</button>
</template>
