<template>
  <div class="container">
    <CreateTodo />
    <ListTodo />
    <UtilsTodo />
  </div>
</template>

<script>
import CreateTodo from '@/components/createTodo.vue'
import ListTodo from '@/components/listTodo.vue'
import UtilsTodo from '@/components/utilsTodo.vue'

export default {
  name: 'Home',
  components: {CreateTodo, ListTodo, UtilsTodo},
  computed: {
    todos() {
      return this.$store.getters.todos
    }
  }
}
</script>

<style lang="css" scoped>
  .container {
    min-width: 450px;
  }
</style>
