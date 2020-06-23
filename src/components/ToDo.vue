<template>
  <div class="container">
    <h1>ToDoリスト</h1>

    <div class="status">
      <input type="radio" name="status" value="すべて" v-model="status" />すべて
      <input type="radio" name="status" value="作業中" v-model="status" />作業中
      <input type="radio" name="status" value="完了" v-model="status" />完了
    </div>

    <div class="todos">
      <table>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
        </tr>
        <tr v-for="(todo, index) in filterTodos" :key="index">
          <th>{{ index }}</th>
          <th>{{ todo.todo }}</th>
          <button @click="changeStatus(index)">{{ todo.status }}</button>
          <button @click="deleteTodo(index)">削除</button>
        </tr>
      </table>
    </div>

    <h2>新規タスクの追加</h2>
    <input type="text" v-model="todo" /><button @click="addToDo">追加</button>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  computed: {
    status: {
      get() {
        return this.$store.getters.status;
      },
      set(value) {
        this.$store.commit('setStatus', value);
      },
    },
    todo: {
      get() {
        return this.$store.getters.todo;
      },
      set(value) {
        this.$store.commit('setTodo', value);
      },
    },
    todos: {
      get() {
        return this.$store.getters.todos;
      },
      set(value) {
        this.$store.commit('setTodos', value);
      },
    },
    filterTodos() {
      return this.$store.getters.todos.filter((todo) => {
        const status = this.$store.getters.status;
        return status === 'すべて' || status === todo.status;
      });
    },
  },
  methods: {
    addToDo() {
      this.$store.commit('addToDo');
    },
    changeStatus(index) {
      this.$store.commit('changeStatus', index);
    },
    deleteTodo(index) {
      this.$store.commit('deleteTodo', index);
    },
  },
};
</script>

<style scoped>
table {
  margin: 10px auto;
}
</style>
