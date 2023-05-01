import { createApp } from 'vue/dist/vue.esm-bundler'

const app = createApp({
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
})
app.mount('#app')
