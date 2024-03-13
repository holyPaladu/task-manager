<script setup>
import { reactive, ref, computed, watchEffect, onMounted } from "vue";
import { useStore } from "vuex";
import TodoList from "./TodoList.vue";

const store = useStore();

// states
const newTodoTitle = ref("");

// computed
const allTodos = computed(() => store.getters.allTodos);

// methods
onMounted(() => {
  store.dispatch("fetchTodos");
});

const addTodo = async () => {
  if (!newTodoTitle.value.trim()) return;

  const newTodo = {
    userId: 1,
    id: Math.random(),
    title: newTodoTitle.value,
    completed: false,
  };

  await store.dispatch("addTodo", newTodo);
  newTodoTitle.value = "";
};

const deleteTodo = (todoId) => {
  store.dispatch("deleteTodo", todoId);
};
</script>

<template>
  <div class="task-main">
    <div class="add-todo">
      <input type="text" v-model="newTodoTitle" placeholder="Enter new task" />
      <button @click="addTodo">Add Task</button>
    </div>
    <TodoList
      v-for="todo in allTodos"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      :completed="todo.completed"
      @delete="deleteTodo"
    />
  </div>
</template>
