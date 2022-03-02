/*
 * @Author: licl
 * @Date: 2022-03-01 15:24:51
 * @LastEditTime: 2022-03-02 16:13:58
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
import { Ref, ref } from 'vue'

export default (key: string) => {
  let progress = ref<number>(0)
  let load = ref<boolean>(false)

  let scene = initScene()
  let camera = initCamera()
  let renderer = initRenderer()
  let controls = initControl(camera, renderer.domElement)
  let { loader, loadManager } = initLoader()
  let mesh = initMesh(key, loader)
  listenTexture(
    loadManager,
    scene,
    mesh,
    progress,
    load,
    render
  )

  function render() {
    if (load.value) {
      renderer.render(scene, camera)
    }
  }

  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    render()
  }

  function changeMaterial(key: string) {
    load.value = false
    progress.value = 0
    mesh.material = createMaterialList(
      loader,
      config.home[key],
      '..'
    )
  }

  return {
    changeMaterial,
    progress,
    load,
    animate
  }
}

// 相机
function initCamera() {
  const camera = new PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.01,
    100
  )
  camera.position.z = 0.01

  return camera
}

// 渲染器
function initRenderer(): WebGLRenderer {
  const renderer = new WebGLRenderer()

  // 解决图片模糊
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  return renderer
}

// 场景
function initScene() {
  const scene = new Scene()
  return scene
}

// 控制器
function initControl(
  camera: PerspectiveCamera,
  dom: HTMLCanvasElement
) {
  const controls = new OrbitControls(camera, dom)
  controls.autoRotate = true
  return controls
}

// 材质加载器
function initLoader() {
  const loadManager = new LoadingManager()
  const loader = new TextureLoader(loadManager)
  return { loader, loadManager }
}

// 监听材质加载
function listenTexture(
  loadManager: LoadingManager,
  scene: Scene,
  mesh: Mesh,
  progress: Ref<number>,
  load: Ref<boolean>,
  render: Function
) {
  scene.add(mesh)

  // 监听图片加载是否成功
  loadManager.onLoad = () => {
    load.value = true
    render()
  }

  // 监听图片加载进度
  loadManager.onProgress = (
    urlOfLastItemLoaded,
    itemsLoaded,
    itemsTotal
  ) => {
    progress.value = itemsLoaded / itemsTotal
  }
}

function initMesh(key: string, loader: TextureLoader) {
  const geometry = new BoxGeometry(1, 1, 1)
  const mesh = new Mesh(
    geometry,
    createMaterialList(loader, config.home[key], '..')
  )
  mesh.geometry.scale(1, 1, -1)
  return mesh
}
