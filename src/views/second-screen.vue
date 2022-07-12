<script lang="ts" setup>
import { useRouter } from "vue-router";

const routerVar = useRouter();
function goBack() {
  routerVar.back()
}
const selectSnail = () => {
  alert("You selected a snail");
  routerVar.push('/gameScreen')
}
const selectAnt = () => {
  alert("You selected an Ant")
}
const selectBug = () => {
  alert("You selected a Bug")
}
const selectWorm = () => {
  alert("You selected a worm")
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
        <img
          src="https://cdn-icons.flaticon.com/png/512/2153/premium/2153123.png?token=exp=1657662904~hmac=9e2abbd5372ef11f4f3ba40780b20fee" />
      </button>
      <button class="insect-button" @click="selectAnt">
        <p>Ant</p>
        <img src="https://cdn-icons-png.flaticon.com/512/7816/7816744.png" />
      </button>
      <button class="insect-button" @click="selectBug">
        <p>Lady Bug</p>
        <img
          src="https://cdn-icons.flaticon.com/png/512/2831/premium/2831684.png?token=exp=1657663992~hmac=3471ac0c318160320253118d2f8b4894" />
      </button>
      <button class="insect-button" v-on:click="selectWorm">
        <p>Worm</p>
        <img
          src="https://cdn-icons.flaticon.com/png/512/765/premium/765839.png?token=exp=1657663902~hmac=93413f559b0468dc560599a062e7e8f4" />
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


