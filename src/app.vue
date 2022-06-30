<script setup>
import { ref, computed } from "vue";

const newTodo = ref("");
const hideCompleted = ref(false);
const todos = ref([]);

function addTodo() {
  todos.value = [
    ...todos.value,
    {
      id: todos.value.length + 1,
      text: newTodo.value,
      done: false,
    },
  ];
  newTodo.value = "";
}

const filteredTodos = computed(() => {
  // return filtered todos based on
  // `todos.value` & `hideCompleted.value`
  if (hideCompleted.value) {
    return todos.value.filter((element) => {
      if (element.done === false) {
        return true;
      }
      return false;
    });
  }
  return todos.value;
});

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? "Show all" : "Hide completed" }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
