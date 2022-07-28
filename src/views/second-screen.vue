<script lang="ts" setup>
import { useRouter, RouteLocation } from "vue-router";

const router = useRouter();
function goBack() {
  router.back()
}
const selectSnail = () => {


  const location = {
    name: 'game-screen',
    query: {
      "insect-id": 1
    }
  } as unknown as RouteLocation

  router.push(location)

}
const selectAnt = () => {
  router.push({ name: 'game-screen', query: { "insect-id": 2 } })
}
const selectBug = () => {
  router.push({ name: 'game-screen', query: { "insect-id": 3 } })
}
const selectWorm = () => {
  router.push({ name: 'game-screen', query: { "insect-id": 4 } })
}
</script>

<template>

  <button class="back" @click="goBack">
    <img src="https://cdn-icons-png.flaticon.com/512/130/130882.png" />
  </button>

  <div class="screen">
    <h1>Select an Insect</h1>
    <div class="buttons-class">
      <button class="insect-button" v-on:click="selectSnail">
        <p>Snail</p>
        <img src="@/assets/img/snail.png" referrerpolicy="no-referrer" />
      </button>
      <button class="insect-button" @click="selectAnt">
        <p>Ant</p>
        <img src="@/assets/img/ant.png" referrerpolicy="no-referrer" />
      </button>
      <button class="insect-button" @click="selectBug">
        <p>Lady Bug</p>
        <img
          src="@/assets/img/ladybug.png" />
      </button>
      <button class="insect-button" v-on:click="selectWorm">
        <p>Worm</p>
        <img
          src="@/assets/img/worm.png" />
      </button>
    </div>
  </div>
</template>

<style>
.back {
  position: absolute;
  background-color: transparent;
  height: 30px;
}

.back img {

  height: 10px;
}

.buttons-class {
  flex-direction: row;
  display: flex;
}

.insect-button {
  height: 150px;
  width: 150px;
  background-color: transparent;
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: column;
  margin-right: 40px;
}

.insect-button img {
  height: 80px;
  width: 80px;

}
</style>


