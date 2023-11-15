/**
 *Created by limbo <yykaue@qq.com> on 2023/11/14.
 */
import { getBrowserVersion } from '../src/tools'

const { browser, version } = getBrowserVersion()
// modules下文件名需和apiVersion的key全匹配
const apiVersion = {
  AbortController: { Chrome: 65, Edge: 16, Firefox: 57, Opera: 53, Safari: 12.1 },
  flat: { Chrome: 69, Edge: 79, Firefox: 62, Opera: 56, Safari: 12 }
}

const getModulesFiles = () => {
  const modulesFiles = require.context('./modules', true, /\.js$/)

  modulesFiles.keys().forEach(modulePath => {
    let splitArr = modulePath.split('/')
    splitArr = splitArr[splitArr.length - 1].split('.')
    const fileName = splitArr[0]
    if (apiVersion[fileName] && apiVersion[fileName][browser] < version) {
      const value = modulesFiles(modulePath)
      value.default()
    }
  })
}

export default getModulesFiles