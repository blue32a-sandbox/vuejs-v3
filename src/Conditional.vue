<!-- https://ja.vuejs.org/guide/essentials/conditional.html -->
<script>
export default {
  data() {
    return {
      awesome: true,
      type: 'C',
      ok: true,
      show: true,
      ifNow: false,
      showNow: false,
      now: Date.now()
    }
  }
}
</script>

<template>
  <h1>条件付きレンダリング</h1>

  <h2>v-if</h2>
  <p v-if="awesome">Vue is awesome!</p>

  <h2>v-else</h2>
  <button @click="awesome = !awesome">Toggle</button>
  <p v-if="awesome">Vue is awesome!</p>
  <p v-else>Oh no 😢</p>

  <h2>v-else-if</h2>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>

  <h2>template に v-if を適用する</h2>
  <template v-if="ok">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>

  <h2>v-show</h2>
  <p v-show="show">Hello!</p>

  <h2>v-if vs. v-show</h2>
  <p>now: {{ now }}</p>
  <p>Date.now(): {{ Date.now() }}</p>
  <button @click="ifNow = !ifNow">Toggle IF</button><br>
  <p v-if="ifNow">Date.now(): {{ Date.now() }}</p>
  <button @click="showNow = !showNow">Toggle Show</button><br>
  <p v-show="showNow">Date.now(): {{ Date.now() }}</p>
</template>
