<script>
export default {
  props: {
    id: Number,
    title: String,
    completed: Boolean,
  },
  methods: {
    deleteTask() {
      this.$emit("delete", this.id);
    },
    toggleCompleted() {
      this.$store.dispatch("updateTodo", {
        id: this.id,
        completed: !this.completed,
      });
    },
  },
};
</script>

<template>
  <div class="item">
    <div class="item-name">
      <input type="checkbox" :checked="completed" @change="toggleCompleted()" />
      <h1>{{ title }}</h1>
    </div>
    <div class="btn">
      <button @click="deleteTask()">Delete</button>
    </div>
  </div>
</template>
