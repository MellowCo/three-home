/*
 * @Author: licl
 * @Date: 2022-03-01 14:35:36
 * @LastEditTime: 2022-03-01 14:46:30
 * @LastEditors: licl
 * @Description:
 */
export type Img = {
  id: number
  name: string
  photoUrl: string
}

export type MaterialConfig = {
  name: string
  grouts: Img[]
  tiles: Img[]
}

export type HomeConfig = {
  name: string
  up: string
  down: string
  left: string
  right: string
  front: string
  behind: string
}

export type Config = {
  config: MaterialConfig
  home: {
    [key: string]: HomeConfig
  }
}
