import { createStore } from "vuex";
import todos from "./modules/todos.js";

const store = createStore({
  modules: {
    todos,
  },
});

export default store;
