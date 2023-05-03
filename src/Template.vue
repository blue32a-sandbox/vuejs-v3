<!-- https://ja.vuejs.org/guide/essentials/template-syntax.html -->
<script>
export default {
  data() {
    return {
      msg: 'Hello Vue!!',
      rawHtml: '<span style="color: red">This should be red.</span>',
      dynamicId: 1374,
      isButtonDisabled: true,
      objectOfAttrs: {
        id: 'bind-multiple-attributes',
        class: 'hoge',
      },
      number: 1,
      ok: true,
      message: 'xyz',
      id: 'hoge',
      date: new Date(),
      toTitleDate: (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      },
      formatDate: (date) => {
        return date.toString()
      },
      seen: true,
      url: 'https://example.com',
      doSomething: () => alert('click!'),
      attributename: 'href',
      eventname: 'click',
      onSubmit: () => alert('submit!'),
    }
  }
}
</script>

<template>
  <h1>Template</h1>
  <span>Message: {{ msg }}</span>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  <div v-bind:id="dynamicId">id is bound</div>
  <div v-bind:id="notExist">id is not bound</div>
  <button :disabled="isButtonDisabled">Button</button>
  <div v-bind="objectOfAttrs">Bind multiple attributes</div>
  <p>{{ number + 1 }}</p>
  <p>{{ ok ? 'YES' : 'NO' }}</p>
  <p>{{ message.split('').reverse().join('') }}</p>
  <div :id="`list-${id}`">id:list-hoge</div>
  <span :title="toTitleDate(date)">
    {{ formatDate(date) }}
  </span>
  <p>{{ Math.random() }}</p>
  <p>{{ new Date() }}</p>
  <p v-if="seen">Now you see me</p>
  <a v-bind:href="url">example.com</a><br>
  <a v-on:click="doSomething">Click</a><br>
  <a v-bind:[attributename]="url">dynamic arguments: attribute {{ attributename }}</a><br>
  <a v-on:[eventname]="doSomething">dynamic arguments: event {{ eventname }}</a><br>
  <form @submit.prevent="onSubmit">
    <button type="submit">Submit</button>
  </form>
</template>
