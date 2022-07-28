<script lang="ts" setup>
    const props = defineProps({id: Number})
</script>

<template>
<img src="@/assets/img/snail.png" alt="" v-if="id === 1">
    <img src="@/assets/img/ant.png" alt="" v-else-if="id === 2">
    <img src="@/assets/img/ladybug.png" alt="" v-else-if="id === 3">
    <img src="@/assets/img/worm.png" alt="" v-else/> 

</template>