import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem('todos') || '[]'),
  },
  mutations: {
    createTodo(state, todoitem) { 
      state.todos.push(todoitem)

      localStorage.setItem('todos',JSON.stringify(state.todos))
    },
    completeTodo(state, todoId) {
      const todos = state.todos.concat()

      todos.map(t => {
        if(t.id === todoId) {
          t.completed = true
        }
      })

      localStorage.setItem('todos',JSON.stringify(todos))
    }, 
    deleteCompletedTodo(state) {
      const todos = state.todos.filter(t => !t.completed)

      state.todos = todos
      localStorage.setItem('todos',JSON.stringify(todos))
    },
    filterTodos(state, filter) {
      let todos = state.todos
      if(filter === 'Active') {
        todos = JSON.parse(localStorage.getItem('todos') || '[]').filter(t => !t.completed)
      }
      if(filter === 'Completed') {
        todos = JSON.parse(localStorage.getItem('todos') || '[]').filter(t => t.completed)
      } 
      if(filter === 'All') {
        todos = JSON.parse(localStorage.getItem('todos') || '[]')
      }
      state.todos = todos
    }   
  },
  actions: {
    createTodo({commit}, todoitem) {
      commit('createTodo', todoitem)
    },
    completeTodo({commit}, todoId) {
      commit('completeTodo', todoId)
    },
    deleteCompletedTodo({commit}){ 
      commit('deleteCompletedTodo')
    },
    filterTodos({commit}, filter) {
      commit('filterTodos', filter)
    }
  },
  modules: {
  },
  getters: {
    todos: s => s.todos
  }
})
