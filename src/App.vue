<script>
import Home from './Home.vue'
import Template from './Template.vue'

const routes = {
  '/': Home,
  '/template': Template
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
  <a href="#/template">Template</a>
  <component :is="currentView" />
</template>
