<script>
import Home from './Home.vue'
import Template from './Template.vue'
import Reactivity from './Reactivity.vue'

const routes = {
  '/': Home,
  '/template': Template,
  '/reactivity': Reactivity
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/template">Template</a> |
  <a href="#/reactivity">Reactivity</a>
  <component :is="currentView" />
</template>
