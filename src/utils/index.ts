import { MeshBasicMaterial, TextureLoader } from 'three'
import { HomeConfig } from './../types/index'

/**
 * 生成房间6面的贴图
 * @param loader
 * @param homeConfig
 * @param prefix
 * @returns
 */
export function createMaterialList(
  loader: TextureLoader,
  homeConfig: HomeConfig,
  prefix: string
): MeshBasicMaterial[] {
  const { up, down, left, right, behind, front } =
    homeConfig

  return [
    createMaterial(loader, right, prefix),
    createMaterial(loader, left, prefix),
    createMaterial(loader, up, prefix),
    createMaterial(loader, down, prefix),
    createMaterial(loader, front, prefix),
    createMaterial(loader, behind, prefix)
  ]
}

/**
 * 生成贴图
 * @param loader
 * @param url
 * @param prefix
 * @returns
 */
export function createMaterial(
  loader: TextureLoader,
  url: string,
  prefix: string
): MeshBasicMaterial {
  return new MeshBasicMaterial({
    map: loader.load(getImgUrl(url, prefix))
  })
}

/**
 * 通过vite 加载本地图片
 * @param url 图片路径 /img/home/xxx.jpg
 * @param prefix 相对路径前缀  ..
 * @returns
 */
export function getImgUrl(
  url: string,
  prefix: string
): string {
  // ../img/xxx =>
  return new URL(`${prefix}${url}`, import.meta.url).href
}
