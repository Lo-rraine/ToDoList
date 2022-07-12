<script lang="ts" setup>
function startGame() {
  alert("text");
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
  height: 1000px;
}

.start-button {
  padding: 10px;
}
</style>
