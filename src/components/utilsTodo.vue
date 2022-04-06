<template>
  <div class="container_utils">
    <span class="count_todo">{{todos.length}} item left</span>
    <div class="filter">
      <button 
        class="btn"
        :class="{ active: activeFilter === item }" 
        v-for="item in filters" :key="item"
        @click="filter(item)"
        >
          {{item}}
        </button>
    </div>
    <button 
      class="btn"
      @click="clearTodos"
      v-show="todos.filter(t => t.completed).length"
    >
      Clear completed
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: ['All', 'Active', 'Completed'],
      activeFilter: null,
    }
  },
  computed: {
    todos() {
      return this.$store.getters.todos
    }
  },
  methods: {
    clearTodos() { 
      this.$store.dispatch('deleteCompletedTodo')
    },
    filter(flr) {
      this.$store.dispatch('filterTodos', flr)
      this.activeFilter = flr
    }
  }
}
</script>

<style lang="css">
  .container_utils {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    font-size: 12px;
    color: rgb(100, 100, 100);

  }
  .btn {
    background: none;
    padding: 5px;
    border: none;
    cursor: pointer;
    color: rgb(100, 100, 100);
  }
  .active { 
    border: 1px solid grey;
  }
  .filter>.btn:nth-child(n+2) {
    margin-left: 10px;
  }
</style>