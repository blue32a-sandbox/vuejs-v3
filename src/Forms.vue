<!-- https://ja.vuejs.org/guide/essentials/forms.html -->
<script>
export default {
  data() {
    return {
      single: '',
      multiple: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      multipleSelected: [],
      toggle: '',
      dynamicTrueValue: 'YES',
      dynamicFalseValue: 'NO',
      pick: '',
      first: 'First',
      second: 'Second',
      selectNumber: {},
      msg: '',
      age: 0,
      trm: ''
    }
  }
}
</script>
<template>
  <h1>フォーム入力バインディング</h1>

  <h2>基本的な使い方</h2>

  <h3>テキスト</h3>
  <p>Message is: {{ single }}</p>
  <input v-model="single" placeholder="edit me" /><br>

  <h3>複数行テキスト</h3>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;">{{ multiple }}</p>
  <textarea v-model="multiple" placeholder="add multiple lines"></textarea>

  <h3>チェックボックス</h3>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <div>Checked names: {{ checkedNames }}</div>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>

  <h3>ラジオ</h3>
  <div>Picked: {{ picked }}</div>
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>
  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>

  <h3>セレクト</h3>
  <div>Selected: {{ selected }}</div>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <div>Selected: {{ multipleSelected }}</div>
  <select v-model="multipleSelected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <h2>値のバインディング</h2>
  <h3>チェックボックス</h3>
  <input
    type="checkbox"
    v-model="toggle"
    :true-value="dynamicTrueValue"
    :false-value="dynamicFalseValue" />
  <label>{{ toggle }}</label>

  <h3>ラジオ</h3>
  <div>Picked: {{ pick }}</div>
  <input type="radio" v-model="pick" :value="first" />
  <input type="radio" v-model="pick" :value="second" />

  <h3>セレクトオプション</h3>
  <div>Selected: {{ selectNumber.number }}</div>
  <select v-model="selectNumber">
    <option :value="{ number: 123 }">123</option>
    <option :value="{ number: 456 }">456</option>
  </select>

  <h2>修飾子</h2>
  <p>Message is: {{ msg }}</p>
  <input v-model.lazy="msg" />

  <p>Age is: {{ age }}</p>
  <input v-model.number="age" />

  <p>Message is: {{ trm }}</p>
  <input v-model.trim="trm" />
</template>
