/*
 * @Author: licl
 * @Date: 2022-03-01 14:35:36
 * @LastEditTime: 2022-03-01 14:53:11
 * @LastEditors: licl
 * @Description:
 */
import { Config, MaterialConfig } from '../types'

const material: MaterialConfig = {
  name: '客厅',
  grouts: [
    {
      id: 42,
      name: '1#纯白色',
      photoUrl:
        '/img/grout/0b2fc9082cdf474c8c00560e62ef83d0.png'
    },
    {
      id: 43,
      name: '2#象牙白',
      photoUrl:
        '/img/grout/a790c5d1bb0d47c0b83486e0c094bf43.png'
    },
    {
      id: 44,
      name: '9#闪亮银',
      photoUrl:
        '/img/grout/13eac4f5fc3442dea492dd39d57b4155.png'
    }
  ],
  tiles: [
    {
      id: 37,
      name: 'BS',
      photoUrl:
        '/img/tile/f83d03a37d934b87a71d047e12f41acb.jpg'
    },
    {
      id: 38,
      name: 'SS',
      photoUrl:
        '/img/tile/eae612f921a943fb8517fb281a228bc1.jpg'
    }
  ]
}

const config: Config = {
  config: material,
  home: {
    '37-42': {
      name: 'BS-1#纯白色',
      up: '/img/home/37-42/9f8bbe6d8c104bed89f3836b40cd7e22.jpeg',
      down: '/img/home/37-42/0be7f1e0906d4ab1ba30ac0aa911a447.jpeg',
      left: '/img/home/37-42/1089de005162436fbf980dcf7c835270.jpeg',
      right:
        '/img/home/37-42/635b46da80d042a68bb407419201cae1.jpeg',
      front:
        '/img/home/37-42/522c7a07288542f8979704d424113361.jpeg',
      behind:
        '/img/home/37-42/159588d15a3e4d22be4d0087c9418bac.jpeg'
    },
    '37-43': {
      name: 'BS-2#象牙白',
      up: '/img/home/37-43/b7836ec1ac744a49adfffd0fbc18fe9a.jpeg',
      down: '/img/home/37-43/748f6dbaf3c041189aa6e3651284c400.jpeg',
      left: '/img/home/37-43/aec84b8222f34013855276e3bd9a012c.jpeg',
      right:
        '/img/home/37-43/a2d9dd988ded48e9995c4ed19b14f9fe.jpeg',
      front:
        '/img/home/37-43/1e1ea87d343e4fe291ec96b1ce062532.jpeg',
      behind:
        '/img/home/37-43/c977e894876a42f997c8867b806f81c8.jpeg'
    },
    '37-44': {
      name: 'BS-9#闪亮银',
      up: '/img/home/37-44/df7e8ecf22474b5b8e16819625125abf.jpeg',
      down: '/img/home/37-44/55f4975acee644749be5e4acae10ac50.jpeg',
      left: '/img/home/37-44/eeafa1e884e141119e8340fd9d8c0924.jpeg',
      right:
        '/img/home/37-44/f329bbeb9c634f939b2e98f90b1ee8e2.jpeg',
      front:
        '/img/home/37-44/dd7eecdc10c04ec0a31569ed56346b70.jpeg',
      behind:
        '/img/home/37-44/e31e4bb0fd724e2f9c3452dd66dfabd7.jpeg'
    },
    '38-42': {
      name: 'SS-1#纯白色',
      up: '/img/home/38-42/930d9b3349ed4af8bd266ac64cac2f80.jpeg',
      down: '/img/home/38-42/3ad08567d9444b40b177b9bebe030507.jpeg',
      left: '/img/home/38-42/71fccf7bdc974b81ba5da6654ee10ade.jpeg',
      right:
        '/img/home/38-42/4527d732b75a45f9931224665994b9f8.jpeg',
      front:
        '/img/home/38-42/3ef1c9c3b84b4e73a7f242332e4ce6af.jpeg',
      behind:
        '/img/home/38-42/a613203ffddc42e5b67797f27dc10cc0.jpeg'
    },
    '38-43': {
      name: 'SS-2#象牙白',
      up: '/img/home/38-43/070a29e72cb4460b85bd2385296a92a3.jpeg',
      down: '/img/home/38-43/34955e7a36344f4285ad114aa2116f3b.jpeg',
      left: '/img/home/38-43/e70886481cf14aa4b54438355bb5c261.jpeg',
      right:
        '/img/home/38-43/55e97c33c81c42a5adb32e4af82ee37c.jpeg',
      front:
        '/img/home/38-43/1e5bac7eaf5f4fadb9b6a59e8d6fadec.jpeg',
      behind:
        '/img/home/38-43/dcab3035f3ec46f9a956db55a66fbee4.jpeg'
    },
    '38-44': {
      name: 'SS-9#闪亮银',
      up: '/img/home/38-44/77e43bd6dfc84d77b6dd1b42d58eac06.jpeg',
      down: '/img/home/38-44/9ccfcf9a562b4b69bb2d707054ff97dc.jpeg',
      left: '/img/home/38-44/67ebd65aeb674d668f5005ea0335aba9.jpeg',
      right:
        '/img/home/38-44/d860a515d6b241e3992f1a5902fdd5fd.jpeg',
      front:
        '/img/home/38-44/aa073928274c4a96b9ef498080d50b43.jpeg',
      behind:
        '/img/home/38-44/f5e75e5b4aa54e2bafb6d25b14543620.jpeg'
    }
  }
}

export default config
