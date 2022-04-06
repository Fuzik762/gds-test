<template>
  <div class="container_list">
    <ul 
      class="list_todo"
      v-if="todos.length"  
    >
      <li 
        class="list_item"
        v-for="(todo, id) in todos" 
        :key="id"
        @click.prevent="todoId(todo.id)"  
      > 
        <span
          class="material-icons status"
          v-if="todo.completed"
        >
          check_circle
        </span>
        <span
          class="material-icons status"
          v-else
        > 
          radio_button_unchecked
        </span> 
        {{todo.title}}
      </li>
    </ul>
    <h2 
      style="textAlign: center; padding: 10px"
      v-else
    >
      To-do list is empty
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    todos() {
      return this.$store.getters.todos
    },
  },
  methods: {
    todoId(id) {
      this.$store.dispatch('completeTodo', id)
    }
  }
}
</script>

<style lang="css" scoped>
  .container_list {
    width: 100%;
  }
  .list_todo {
    list-style: none;
  }
  .list_item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid rgb(180, 180, 180);
    cursor: pointer;
  } 
  .status { 
    margin-right: 10px;
  }
</style>

