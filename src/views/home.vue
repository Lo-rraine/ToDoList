<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter() 
function startGame() {
  router.push('/selectionScreen')
}
</script>

<template>
  <div class="screen">
    <button class="start-button" @click="startGame">Start Game</button>
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
