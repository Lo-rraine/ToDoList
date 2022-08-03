<script lang="ts" setup>
import {computed} from 'vue'//named imports
import {useRoute} from 'vue-router'
import ChosenInsect from "@/components/chosen-insect.vue"


const route = useRoute();
const currentInsectId = computed(() => Number(route.query["insect-id"]))

</script>

<template>
<div class="screen">
    <h2>Bugs Collected:</h2>
    <ChosenInsect :id="currentInsectId"/>
   
     
</div>
</template>

<style>

</style>