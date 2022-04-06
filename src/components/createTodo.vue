<template>
  <div class="container_create">
    <span class="material-icons">
      expand_more
    </span>
    <form @submit.prevent="submitHandler">
      <input 
      type='text' 
      placeholder="What needs to be done?"
      v-model="title"
      class="create_todo"
      /> 
    </form>
  </div>  
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  
  data() {
    return {
      title: '',
    }
  },
  methods: {
    submitHandler() {
      const todo = {
        title: this.title,
        id: uuidv4(),
        completed: false,
      }

      this.title = ''
      this.$store.dispatch('createTodo', todo)
    }
  },
}
</script>

<style lang="css" scoped>
  .container_create {
    display: flex;
    padding: 10px;
    border-bottom: 2px solid rgb(170, 170, 170);
  }
  .create_todo {
    font-size: 20px;
    font-style: italic;
    border: none;
  }
  .create_todo:focus-visible {
    outline: none;
  }
</style>