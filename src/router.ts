import Home from "@/views/home.vue";
import SecondScreen from "@/views/second-screen.vue";
import GameScreen from "@/views/game-screen.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/selectionScreen",
    component: SecondScreen,
  },
  {
    path: "/gameScreen",
    component: GameScreen,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
