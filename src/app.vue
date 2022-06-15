<script>
import { ref } from "vue";
export default {
  setup() {
    const score = ref(0);
    const increment = () => {
      score.value++;
      console.log(score.value);
    };

    return { count: score, increment };
  },
};
</script>
<template>
  <div>
    <h1 class="number">{{ count }}</h1>
    <button class="btn" @click="increment">Increment</button>
  </div>
</template>

<style>
div {
  display: grid;
  grid-gap: 100px;
  justify-content: center;
  padding: 20px;
}
.number {
  text-align: center;
}
</style>
