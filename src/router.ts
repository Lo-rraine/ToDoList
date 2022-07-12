import Home from "@/views/home.vue";
import SecondScreen from "@/views/second-screen.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/foo",
    component: SecondScreen,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
