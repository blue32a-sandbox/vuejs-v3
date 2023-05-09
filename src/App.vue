<script>
import ClassAndStyle from './ClassAndStyle.vue'
import ComponentBasics from './ComponentBasics.vue'
import Computed from './Computed.vue'
import Conditional from './Conditional.vue'
import Home from './Home.vue'
import EventHandling from './EventHandling.vue'
import Forms from './Forms.vue'
import Lifecycle from './Lifecycle.vue'
import List from './List.vue'
import Reactivity from './Reactivity.vue'
import Template from './Template.vue'
import TemplateRefs from './TemplateRefs.vue'
import Watchers from './Watchers.vue'

const routes = {
  '/': Home,
  '/template': Template,
  '/reactivity': Reactivity,
  '/computed':  Computed,
  '/class-and-style': ClassAndStyle,
  '/conditional': Conditional,
  '/list': List,
  '/event-handling': EventHandling,
  '/forms': Forms,
  '/lifecycle': Lifecycle,
  '/watchers': Watchers,
  '/template-refs': TemplateRefs,
  '/component-basics': ComponentBasics
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
  <a href="#/computed">Computed</a> |
  <a href="#/class-and-style">Class And Style</a> |
  <a href="#/conditional">Conditional</a> |
  <a href="#/list">List</a> |
  <a href="#/event-handling">Event Handling</a> |
  <a href="#/forms">Forms</a> |
  <a href="#/lifecycle">Lifecycle</a> |
  <a href="#/watchers">Watchers</a> |
  <a href="#/template-refs">Template Refs</a> |
  <a href="#/component-basics">Component Basics</a>
  <component :is="currentView" />
</template>
