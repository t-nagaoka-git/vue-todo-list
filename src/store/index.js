import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: 'すべて',
    todo: '',
    todos: [],
  },
  getters: {
    status(state) {
      return state.status;
    },
    todo(state) {
      return state.todo;
    },
    todos(state) {
      return state.todos;
    },
  },
  mutations: {
    setStatus(state, status) {
      state.status = status;
    },
    setTodo(state, todo) {
      state.todo = todo;
    },
    setTodos(state, todos) {
      state.todos = todos;
    },
    addToDo(state) {
      const todo = { todo: state.todo, status: '作業中' };
      state.todos.push(todo);
      state.todo = '';
    },
    changeStatus(state, index) {
      const status = state.todos[index].status === '作業中' ? '完了' : '作業中';
      state.todos[index].status = status;
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
