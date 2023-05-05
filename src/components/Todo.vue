<script>
export default {
	props: ['todo']
}
</script>

<template>
  <li>
    {{ todo.id }} - {{ todo.name }}
  </li>
</template>
