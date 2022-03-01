

<template>
  <!-- <ThreeHome></ThreeHome> -->

  <div @click="changeMaterial('37-43')">change</div>
  <!-- <Line></Line> -->
</template>

<script setup lang="ts">
// import ThreeHome from './components/ThreeHome.vue'
import use3d from './hooks/use3d'
const { changeMaterial } = use3d()

</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
