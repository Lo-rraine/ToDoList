import Home from "@/views/home.vue";
import SecondScreen from "@/views/second-screen.vue";
import GameScreen from "@/views/game-screen.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: 'home-screen',
    component: Home,
  },
  {
    path: "/selectionScreen",
    name: "second-screen",
    component: SecondScreen,
  },
  {
    path: "/gameScreen",
    name: "game-screen",
    component: GameScreen,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
