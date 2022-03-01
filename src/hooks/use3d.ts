import { MeshBasicMaterial } from 'three'
/*
 * @Author: licl
 * @Date: 2022-03-01 15:24:51
 * @LastEditTime: 2022-03-01 16:21:50
 * @LastEditors: licl
 * @Description:
 */

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  TextureLoader,
  LoadingManager
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { createMaterialList } from '../utils/index'
import config from '../config/index'

export default () => {
  const scene = new Scene()
  const camera = new PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  )

  const renderer = new WebGLRenderer()

  // 解决图片模糊
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  camera.position.z = 0.01
  document.body.appendChild(renderer.domElement)

  //@ts-ignore
  const controls = new OrbitControls(
    camera,
    renderer.domElement
  )

  const loadingManager = new LoadingManager()
  const loader = new TextureLoader(loadingManager)

  let materials: MeshBasicMaterial[]
  let cube: Mesh

  loadingManager.onLoad = () => {
    console.log('onload')

    changeMaterial('37-42')
    cube.geometry.scale(10, 10, -10)
    controls.update()
    animate()
  }

  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }

  function changeMaterial(key: string) {
    console.log(materials)

    if (materials !== undefined) {
      cube.geometry.dispose()
      scene.remove(cube)
    }

    materials = createMaterialList(
      loader,
      config.home[key],
      '..'
    )
    const geometry = new BoxGeometry(10, 10, 10)
    cube = new Mesh(geometry, materials)
    scene.add(cube)
  }

  return {
    changeMaterial
  }
}
