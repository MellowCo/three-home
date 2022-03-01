<!--
 * @Author: licl
 * @Date: 2021-11-30 11:15:24
 * @LastEditTime: 2022-03-01 15:23:44
 * @LastEditors: licl
 * @Description: 
-->

<template></template>

<script setup lang="ts">
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, Mesh, TextureLoader, LoadingManager } from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { createMaterialList } from '../utils/index'
import config from '../config/index'

const scene = new Scene();
const camera = new PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 1000);
const renderer = new WebGLRenderer();

// 解决图片模糊
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 0.01
document.body.appendChild(renderer.domElement);


//@ts-ignore
const controls = new OrbitControls(camera, renderer.domElement);

const loadingManager = new LoadingManager()
const loader = new TextureLoader(loadingManager)
const geometry = new BoxGeometry(10, 10, 10);

const materials = createMaterialList(loader, config.home['37-42'], '..')

const cube = new Mesh(geometry, materials);

loadingManager.onLoad = () => {
  scene.add(cube);
  cube.geometry.scale(10, 10, -10);
  controls.update();
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
</script>