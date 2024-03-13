import axios from "axios";
import { reactive } from "vue";

const state = reactive({
  todos: [],
  length: 0,
});

const actions = {
  async fetchTodos({ commit }) {
    //   const res = await axios.get("/todos?userId=1");
    //   commit("set_todos", res.data);
    // },
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      commit("set_todos", JSON.parse(storedTodos));
    } else {
      const res = await axios.get("/todos?userId=1");
      commit("set_todos", res.data);
      localStorage.setItem("todos", JSON.stringify(res.data));
    }
  },
  async addTodo({ commit }, newTodo) {
    commit("add_todo", newTodo);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  async deleteTodo({ commit, state }, todoId) {
    const index = state.todos.findIndex((todo) => todo.id === todoId);
    if (index !== -1) {
      state.todos.splice(index, 1);
      state.length--;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
  },
  async updateTodo({ commit }, { id, completed }) {
    commit("update_todo", { id, completed });
    console.log(id, completed);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
};

const mutations = {
  set_todos: (state, todos) => (state.todos = todos),
  add_todo: (state, todo) => {
    state.todos.push(todo);
    state.length++;
  },
  update_todo: (state, { id, completed }) => {
    const todo = state.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = completed;
    }
  },
};

const getters = {
  allTodos: (state) => state.todos,
};

const todos = {
  state,
  actions,
  mutations,
  getters,
};

export default todos;
