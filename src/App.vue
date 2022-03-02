

<template>
  <div class="btns">
    <div class="btn" @click="changeMaterial('37-43')">change</div>
    <div class="btn" @click="changeMaterial('38-42')">change2</div>
  </div>

  <div v-show="!load" id="loading">
    <div class="progress">
      <div class="progressbar" :style="{ transform: `scaleX(${progress})` }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import use3d from './hooks/use3d'
const { progress, load, animate, changeMaterial } = use3d('37-43')
animate()
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
#loading .progress {
  margin: 1.5em;
  border: 1px solid white;
  width: 50vw;
}
#loading .progressbar {
  margin: 2px;
  background: white;
  height: 1em;
  transform-origin: top left;
  transform: scaleX(0);
}

.btns {
  position: fixed;
  bottom: 5vh;
  left: 1vw;
  display: flex;
}

.btn {
  padding: 10px 20px;
  background-color: #fff;
  margin-right: 15px;
}
</style>
