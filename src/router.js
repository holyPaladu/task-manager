import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/Home.vue"),
    },
    {
      path: "/tasks",
      name: "tasks",
      component: () => import("@/components/MyTask.vue"),
    },
  ],
});

export default router;
