<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useGame } from "@/stores/game";

const router = useRouter();
function startGame() {
  router.push('/selectionScreen');
}

const number = useGame();


</script>

<template>
  <div class="screen">
    <button class="start-button" @click="startGame">Start Game</button>
    <button @click="number.increase">{{number.count}}</button>
  </div>
</template>

<style>
.screen {
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

.start-button {
  padding: 10px;
}
</style>
