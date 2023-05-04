<script>
import Computed from './Computed.vue'
import Home from './Home.vue'
import Template from './Template.vue'
import Reactivity from './Reactivity.vue'

const routes = {
  '/': Home,
  '/template': Template,
  '/reactivity': Reactivity,
  '/computed':  Computed,
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
  <a href="#/reactivity">Reactivity</a> |
  <a href="#/computed">Computed</a>
  <component :is="currentView" />
</template>
