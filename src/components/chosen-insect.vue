<script lang="ts" setup>
import { remove } from '@vue/shared';

const props = defineProps({ id: Number })
const removeInsect = () => {
   
}
</script>

<template>
    <button v-if="id === 1" @click="removeInsect()">
        <img src="@/assets/img/snail (1).png" alt="">
    </button>

    <button v-else-if="id === 2">
        <img src="@/assets/img/ant.png" alt="">
    </button>

    <button v-else-if="id === 3" >
        <img src="@/assets/img/ladybug (1).png" alt="">
    </button>

    <button v-else>
        <img src="@/assets/img/bee.png" alt="" />
    </button>

</template>