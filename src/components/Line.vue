<!--
 * @Author: licl
 * @Date: 2022-02-19 13:44:41
 * @LastEditTime: 2022-02-19 14:00:05
 * @LastEditors: licl
 * @Description: 
-->
<template></template>

<script setup lang="ts">
import { WebGL1Renderer, Scene, PerspectiveCamera, LineBasicMaterial, Vector3, BufferGeometry, Line } from 'three'

const scene = new Scene()
const render = new WebGL1Renderer()
render.setSize(window.innerWidth, window.innerHeight)

const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0)

const material = new LineBasicMaterial({ color: 0x0000ff })

const points = []
points.push(new Vector3(- 10, 0, 0));
points.push(new Vector3(0, 10, 0));
points.push(new Vector3(10, 0, 0));
const geometry = new BufferGeometry().setFromPoints(points);


const line = new Line(geometry, material)


scene.add(line)

render.render(scene, camera)

document.body.appendChild(render.domElement);

</script>

<style scoped>
</style>