<template>
   <TodoForm/>
  <Todo />
</template>

<script>
import Todo from './components/todoApp.vue'
import TodoForm from "./components/todoForm.vue";
export default {
  name: 'App',
  components: {
    Todo,
    TodoForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
